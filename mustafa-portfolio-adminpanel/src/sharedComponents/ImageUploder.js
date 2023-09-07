import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "../sharedComponentsStyle/ImageUploader.css";
import uploadIcon from "../assets/uploadIcon.png";
import { FileUploader } from "react-drag-drop-files";
import { notify } from "../Helper/Notify";
const fileTypes = ["jpge", "png", "jpg"];

const ImageUploader = forwardRef((props, ref) => {
  const [images, setImages] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);

  const handleChange = (file) => {
    const uploadedImages = Object.values(file);
    setImages([...images, ...uploadedImages]);
  };

  useEffect(() => {
    const urls = [];
    const readerPromises = images.map((element) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          urls.push(reader.result);
          resolve();
        };
        reader.readAsDataURL(element);
      });
    });

    Promise.all(readerPromises).then(() => {
      setImagesUrl(urls);
      props.sendImages(urls);
    });
  }, [images]);
  const deleteImage = (indexToRemove) => {
    setImages(images.filter((item, index) => index !== indexToRemove));
    setImagesUrl(imagesUrl.filter((item, index) => index !== indexToRemove));
  };
  useImperativeHandle(ref, () => ({
    deleteImage,
  }));

  const handleTypeError = () => {
    notify(
      "You try to upload wrong Supported formate,Try one of these extensions:JPEG, PNG, GIF."
    );
  };
  const handleSizeError = () => {
    notify("he size of photos is to large try to choose another photo");
  };

  const children = (
    <div className="drag-drop-section">
      <div
        className="upload-icon"
        style={{ backgroundImage: `url("${uploadIcon}")` }}
      ></div>
      <div className="drag-massage">
        Drag & Drop images or <span className="browse-word">Browse</span>
      </div>
      <div className="support-type">Supported formate: JPEG, PNG, GIF.</div>
    </div>
  );

  return (
    <div className="image-upload-holder">
      <div className="upload-word">Upload Project Images</div>
      <FileUploader
        handleChange={handleChange}
        name="image-upload-form"
        types={fileTypes}
        children={children}
        maxSize={20}
        multiple={true}
        onTypeError={handleTypeError}
        onSizeError={handleSizeError}
      />
    </div>
  );
});
export default ImageUploader;
