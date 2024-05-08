"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AuthContextProps, useAuth } from "../providers/auth-provider";
import { Form, Field } from "react-final-form";
import { FormValidators } from "../../lib/validationSchema";
import { useEffect, useMemo, useState } from "react";
import { getProfile, updateUser } from "../providers/database/profile";
import { Profile } from "../../lib/types/config";
import { toast } from "../ui/use-toast";
import { TbCameraPlus } from "react-icons/tb";
import {
  getPreviewImageById,
  uploadProfileImage,
} from "../providers/storage/storage";

const UserProfile = () => {
  const { user } = useAuth() as AuthContextProps;
  const [profileData, setProfileData] = useState<Profile>();
  const [file, setFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    getProfile(user.$id).then((profile) => {
      setProfileData(profile);
      const image = getPreviewImageById(profile?.profileImageId as string);
      image && setImageUrl(image.href);
    });
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string); // this "as" is typecasting. we know more than typescript
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      toast({
        description: "Please select a file to upload",
      });
      return;
    }

    try {
      const updateProfileImage = !!profileData?.profileImageId;
      const image = getPreviewImageById(profileData?.profileImageId as string);
      image && setImageUrl(image.href);

      if (updateProfileImage) {
        const imageFile = await uploadProfileImage(
          file,
          "update",
          profileData.profileImageId
        );
        await updateUser(profileData.$id, {
          ...profileData,
          profileImageId: imageFile.$id,
        });
      } else {
        const imageFile = await uploadProfileImage(
          file,
          "create",
          profileData?.profileImageId as string
        );
        profileData &&
          (await updateUser(profileData.$id, {
            ...profileData,
            profileImageId: imageFile.$id,
          }));
      }

      toast({
        description: "File uploaded successfully",
      });
    } catch (error: any) {
      toast({
        description: error.response.message,
      });
    }
  };

  const handleUpdateUser = async (values: Profile) => {
    await updateUser(user.$id, values)
      .then(() => {
        toast({
          description: "Updated profile successfully",
        });
      })
      .catch((error) => {
        toast({
          description: error.response.message,
        });
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }
  const initialValue = useMemo(
    () => ({ name: profileData?.name, email: profileData?.email }),
    [profileData]
  );

  return (
    <div className='max-w-[500px] mx-auto space-y-[30px]'>
      <form
        onSubmit={handleSubmit}
        className='rounded-[10px] border p-[16px] flex justify-between items-center'
      >
        <div className='relative w-[80px] h-[80px]'>
          <label htmlFor='uploadImage'>
            <TbCameraPlus className='text-3xl z-10 rounded-full absolute right-0 top-[54px] cursor-pointer text-primary border border-primary p-1' />
          </label>
          <input
            className='hidden'
            id='uploadImage'
            type='file'
            onChange={handleFileChange}
          />
          <Image
            src={imageUrl ?? "/images/default-user.png"}
            alt='Profile image'
            fill
            priority={true}
            className='rounded-full object-cover overflow-hidden'
          />
        </div>
        <Button variant='outline' type='submit'>
          Update
        </Button>
      </form>

      <Form onSubmit={handleUpdateUser} initialValues={initialValue}>
        {({ handleSubmit, pristine, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className='space-y-[20px]'>
                <label className='block font-medium'>
                  Name
                  <Field
                    name='name'
                    validate={FormValidators.compose(
                      FormValidators.required,
                      FormValidators.minLength(4)
                    )}
                    type='text'
                    placeholder='Name'
                  >
                    {({ input, meta }) => (
                      <>
                        <Input
                          {...input}
                          className='mt-[8px]'
                          errorMessage={
                            meta?.touched && meta?.error ? meta.error : ""
                          }
                        />
                      </>
                    )}
                  </Field>
                </label>
                <label className='block font-medium'>
                  Email
                  <Field
                    name='email'
                    validate={FormValidators.compose(FormValidators.email)}
                    type='email'
                    placeholder='example@domain.com'
                  >
                    {({ input, meta }) => (
                      <Input
                        {...input}
                        className='mt-[8px]'
                        errorMessage={
                          meta?.touched && meta?.error ? meta.error : ""
                        }
                      />
                    )}
                  </Field>
                </label>
                <Button
                  type='submit'
                  className='w-full mt-[20px]'
                  disabled={pristine || submitting}
                >
                  Update information
                </Button>
              </div>
            </form>
          );
        }}
      </Form>
    </div>
  );
};

export default UserProfile;
