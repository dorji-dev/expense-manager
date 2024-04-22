import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UserProfile = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-[30px]">
      <div className="rounded-[10px] border p-[16px] flex justify-between items-center">
        <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden">
          <Image src="/images/default-user.png" alt="Profile image" fill />
        </div>
        <Button variant="outline">Update</Button>
      </div>
      <form className="border rounded-[10px] p-[16px]">
        <div className="space-y-[20px]">
          <label className="block font-medium">
            Full name{" "}
            <Input
              type="email"
              placeholder="example@gmail.com"
              className="mt-[8px]"
            />
          </label>
          <label className="block font-medium">
            Email{" "}
            <Input
              type="email"
              placeholder="example@gmail.com"
              className="mt-[8px]"
            />
          </label>
        </div>
        <Button type="submit" className="w-full mt-[20px]">
          Update information
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
