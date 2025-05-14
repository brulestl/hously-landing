import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Pull in your Firebase config from env vars
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Given a storage path (e.g. "properties/abc123.jpg"), returns a
 * public download URL, or throws if it fails.
 */
export async function fetchImageUrl(path: string): Promise<string> {
  try {
    console.log('Attempting to fetch image from path:', path);
    const imageRef = ref(storage, path);
    const url = await getDownloadURL(imageRef);
    console.log('Successfully fetched image URL:', url);
    return url;
  } catch (err) {
    console.error('Failed to fetch image URL:', {
      path,
      error: err,
      errorCode: (err as any)?.code,
      errorMessage: (err as any)?.message
    });
    throw err;
  }
}

export { storage }; 