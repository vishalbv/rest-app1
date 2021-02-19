import React, { Component, useState } from "react";

import { FileDrop } from "react-file-drop";
import "./components.scss";
import Clock from "../assets/Clock.png";
import EditModal from "./EditModalFrame/editFrame";
import ImageEditor from "./ImageEditor/imageEditor";
import upload_logo from "../assets/Others/Upload_icon.svg";

export const DragDrop = () => {
  const [showLayout, setShowLayout] = useState(false);
  const [file, setFile] = useState(undefined);
  const [fileToUpload, setFileToUpload] = useState(undefined);
  const [pic, setPic] = useState(upload_logo);

  // styles = {
  //   border: "1px solid black",
  //   width: 600,
  //   color: "black",
  //   padding: 20,
  // };
  const browseFiles = (files) => {
    // console.log(e.target.files[0].name);
    console.log(files);
    setFile(files[0]);
    setPic(URL.createObjectURL(files[0]));
    setShowLayout(true);

    //  props.selectedFile(fileName);
  };
  const uploadFile = () => {
    const callback = (data) => {
      console.log(data);
    };

    if (file) {
      let reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = (e) => {
      //   console.log(e.target.result);
      //   let fileToUpload = { name: this.state.file.name, url: e.target.result };
      //   // this.api.fileUpload(fileToUpload, callback);
      // };
    }
  };

  const onClickSave = async (data) => {
    setPic(data);
    //   setImgState({ zoom: 1, rotate: 0 });
    setShowLayout(!showLayout);
  };

  return (
    <>
      <EditModal
        styleName={"editModal_2"}
        toggleShow={() => setShowLayout(!showLayout)}
        show={showLayout}
      >
        <ImageEditor initImage={pic} setImage={onClickSave} />
      </EditModal>
      <div className="drag-drop">
        <div className="heading2">Upload Restaurant picture</div>
        <div>
          <FileDrop
            // onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
            // onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
            // onFrameDrop={(event) => console.log("onFrameDrop", event)}
            // onDragOver={(event) => console.log("onDragOver", event)}
            // onDragLeave={(event) => console.log("onDragLeave", event)}
            onDrop={(files, event) => browseFiles(files)}
          >
            <div>
              <div style={{ margin: "1vw", color: "#7f8fa4" }}>
                <div>
                  <img src={pic} width={file ? 100 : 100} />
                </div>
                {!file && (
                  <>
                    <div>
                      Drag your image or{" "}
                      <label
                        htmlFor="files"
                        className="label"
                        style={{ cursor: "pointer" }}
                      >
                        Upload Manually
                      </label>
                    </div>
                    <input
                      id="files"
                      style={{
                        visibility: "hidden",
                        width: "0",
                        position: "absolute",
                        height: "0px",
                      }}
                      type="file"
                      onChange={(e) => browseFiles(e.target.files)}
                    />
                  </>
                )}
                {file && <div style={{ marginTop: "10px" }}>{file.name}</div>}
              </div>
            </div>
          </FileDrop>
        </div>
        <span className="upload-button" onClick={uploadFile}>
          Upload
        </span>
      </div>
    </>
  );
};

export default DragDrop;
