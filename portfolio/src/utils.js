
export const getImageUrl = (path) => {
    if (!path) {
        console.error("Image path is missing or undefined.");
        return ""; // Return an empty string to prevent the app from breaking
    }

    // Use the Vite-specific way to access environment variables
    const basePath = import.meta.env.VITE_PUBLIC_URL || ''; // Default to root if VITE_PUBLIC_URL is undefined

    // Construct the full URL to the image file
    const fullPath = `${basePath}/images/${path}`; // Adjust this depending on where your images are located

    // Optionally log the full image path for debugging
    console.log(`Image URL generated: ${fullPath}`);

    return fullPath;
};
