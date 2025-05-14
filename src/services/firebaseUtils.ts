import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Initialize Firebase storage
const storage = getStorage();

// Utility function to get image URL from Firebase
export const getImageUrl = async (imagePath: string): Promise<string> => {
  try {
    const imageRef = ref(storage, imagePath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL: ", error);
    return "/placeholder.jpg"; // Return a placeholder image in case of error
  }
}; 