import { ID } from "appwrite";
import { storage, storageId } from "../../../config/appwrite-config";

export async function uploadProfileImage(
  file: File,
  createOrUpdate: "create" | "update",
  profileImageId: string
) {
  if (createOrUpdate === "create") {
    const createProfileImage = storage.createFile(storageId, ID.unique(), file);
    return createProfileImage;
  } else {
    const updateProfileImage = storage.updateFile(storageId, profileImageId);
    return updateProfileImage;
  }
}

export function getPreviewImageById(fileId: string) {
  return fileId ? storage.getFilePreview(storageId, fileId) : null;
}
