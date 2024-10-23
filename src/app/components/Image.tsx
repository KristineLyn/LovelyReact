"use client";
import app from "../../../firebase-config";
import { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Initialize Firebase storage with the app
        const storage = getStorage(app, "gs://lovely-react.appspot.com");

        // Create a reference to the root of the storage bucket
        const storageRef = ref(storage, 'gallery/');

        // Get all images from the root of the bucket
        const result = await listAll(storageRef);

        // Fetch the download URLs for all images
        const urls = await Promise.all(
          result.items.map((itemRef) => getDownloadURL(itemRef))
        );

        setImageUrls(urls); // Set image URLs to state
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
      <div className="grid grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className="w-96 h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
  );
};

export default ImageGallery;
