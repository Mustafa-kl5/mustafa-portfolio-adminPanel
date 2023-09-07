export async function fetchAndConvertImagesToBase64(imageUrls) {
  const base64Images = [];

  for (const imageUrl of imageUrls) {
    try {
      // Fetch the image
      const response = await fetch(imageUrl);

      // Check if the request was successful (status code 200)
      if (response.ok) {
        // Convert the image to a blob
        const blob = await response.blob();

        // Create a FileReader to read the blob as base64
        const reader = new FileReader();

        reader.onload = () => {
          // The result contains the base64 encoded image
          const base64String = reader.result;
          base64Images.push(base64String);
        };

        // Read the blob as base64
        reader.readAsDataURL(blob);
      } else {
        console.error(
          `Failed to fetch image from ${imageUrl}. Status code: ${response.status}`
        );
      }
    } catch (error) {
      console.error(
        `An error occurred while fetching image from ${imageUrl}:`,
        error
      );
    }
  }

  return base64Images;
}
