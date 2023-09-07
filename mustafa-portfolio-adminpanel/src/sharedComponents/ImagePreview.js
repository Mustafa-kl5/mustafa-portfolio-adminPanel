import React from "react";
import "../sharedComponentsStyle/ImagePreview.css";
import imageIcon from "../assets/imageIcon.png";
import deleteIcon from "../assets/delete.png";

export default function ImagePreview(props) {
  const deleteImage = (index) => {
    props.handelDeleteImage(index);
  };
  return (
    <div className="image-preview-holder">
      <div className="preview-logo-word">
        <div
          className="preview-logo"
          style={{ backgroundImage: `url("${imageIcon}")` }}
        ></div>
        <div className="preview-word">Images</div>
      </div>

      <div className="preview-scrollholder">
        <div
          className={
            props?.images.length !== 0
              ? "card-image-preview-holder"
              : "empty-image-section-holder"
          }
        >
          {props?.images.length !== 0 ? (
            props.images.map((imageUrl, index) => {
              return (
                <div
                  className="post-image-card"
                  style={{
                    backgroundImage: `url("${imageUrl}")`,
                  }}
                  key={index}
                >
                  <div
                    className="delete-icon"
                    style={{ backgroundImage: `url("${deleteIcon}")` }}
                    onClick={() => deleteImage(index)}
                  ></div>
                </div>
              );
            })
          ) : (
            <div className="empty-image">
              <div className="empty-image-section"></div>
              <div className="empty-image-hint">
                At least you must add one photo
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
