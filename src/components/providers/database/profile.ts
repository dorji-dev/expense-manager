import { Profile } from "@/lib/types/config";
import {
  profileCollectionId,
  databaseId,
  databases,
} from "@/config/appwrite-config";
import { Models, Query } from "appwrite";

export async function updateUser(profileId: Profile["$id"], data: Profile) {
  const result = await databases.updateDocument(
    databaseId,
    profileCollectionId,
    profileId,
    data
  );
  return result;
}

export async function createProfile(
  profile: Omit<Profile, "$id">,
  userId: string
) {
  const document = await databases.createDocument(
    databaseId,
    profileCollectionId,
    userId,
    profile
  );
  return {
    category: mapDocument(document),
  };
}

export async function getProfile(userId: string): Promise<Profile> {
  const { documents } = await databases.listDocuments(
    databaseId,
    profileCollectionId,
    [Query.equal("$id", userId)]
  );

  return documents.map(mapDocument)[0];
}

function mapDocument(document: Models.Document) {
  const profile: Profile = {
    name: document.name,
    email: document.email,
    $id: document.$id,
    profileImageId: document.profileImageId,
  };
  return profile;
}
