import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  LegacyRef,
} from "react";
import "./imageEditor.scss";
import upload_logo from "../../assets/Others/Upload_icon.svg";
import AvatarEditor from "react-avatar-editor";
// @ts-ignore
// import Resizer from "react-image-file-resizer";
// import EditModal from "../../EditModalFrame";
import Slider from "react-input-slider";
import rotA from "../../assets/Others/Rotate.png";
import rotB from "../../assets/Others/Rotate Copy.png";
import zoomA from "../../assets/Others/Zoom_In.png";
import zoomB from "../../assets/Others/Zoom_Out.png";

const ImageEditor = ({ image = upload_logo, initImage, setImage, ref }) => {
  //   const [pic, setPic] = useState(image);
  //   const style = inModal ? "upload_component_Modal" : null;
  //   const [width, setWidth] = useState(size);
  const [showLayout, setShowLayout] = useState(true);
  const [imgData, setImgData] = useState(null);
  const [imgState, setImgState] = useState({ zoom: 1, rotate: 0 });
  const setEditorRef = useRef(ref);

  const zoom = (st) => {
    console.log(st, imgState.zoom + st);
    setImgState({
      ...imgState,
      zoom:
        imgState.zoom + st >= 1 && imgState.zoom + st <= 3
          ? imgState.zoom + st
          : 1,
    });
  };

  const rotate = (st) => {
    if (imgState.rotate % 90 !== 0) setImgState({ ...imgState, rotate: 90 });
    else
      setImgState({
        ...imgState,
        rotate: imgState.rotate + st,
      });
  };

  const onClickSave = async () => {
    if (setEditorRef) {
      const canvas = setEditorRef.current.getImage().toDataURL();

      let imageURL = "";
      fetch(canvas)
        .then((res) => res.blob())
        .then((blob) => (imageURL = window.URL.createObjectURL(blob)));

      //   setPic(canvas);
      setImgState({ zoom: 1, rotate: 0 });
      if (setImage) setImage(canvas);
    }
  };

  return (
    <>
      <div className={"main_editor"}>
        <AvatarEditor
          ref={setEditorRef}
          image={initImage}
          width={300}
          height={280}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={imgState.zoom}
          rotate={imgState.rotate}
        />
        <div className={"editor"}>
          <div>
            <div style={{ position: "relative", bottom: -7 }}>Zoom</div>
            <div className={"editor_sub"}>
              <img src={zoomB} onClick={() => zoom(-0.2)} />
              <Slider
                styles={{
                  track: {
                    width: "10vw",
                    backgroundColor: "grey",
                  },
                  active: {
                    backgroundColor: "white",
                  },
                  thumb: {
                    width: 20,
                    height: 20,
                    backgroundColor: "skyblue",
                  },
                  disabled: {
                    opacity: 0.5,
                  },
                }}
                axis="x"
                xmin={1}
                x={imgState.zoom}
                xstep={0.05}
                xmax={3}
                onChange={({ x }) =>
                  setImgState((state) => ({ ...state, zoom: x }))
                }
              />
              <img src={zoomA} onClick={() => zoom(0.2)} />
            </div>
          </div>

          <div>
            <div style={{ position: "relative", bottom: -7 }}>Rotate</div>

            <div className={"editor_sub"}>
              <img src={rotA} onClick={() => rotate(-90)} />
              <Slider
                styles={{
                  track: {
                    width: "10vw",

                    backgroundColor: "grey",
                  },
                  active: {
                    backgroundColor: "white",
                  },
                  thumb: {
                    width: 20,
                    height: 20,
                    backgroundColor: "skyblue",
                  },
                  disabled: {
                    opacity: 0.5,
                  },
                }}
                axis="x"
                xstep={1}
                xmin={0}
                x={imgState.rotate}
                xmax={360}
                onChange={({ x }) =>
                  setImgState((state) => ({ ...state, rotate: x }))
                }
              />
              <img src={rotB} onClick={() => rotate(90)} />
            </div>
          </div>
        </div>
        <div
          className={"top-button2"}
          style={{ margin: "1vw" }}
          onClick={onClickSave}
        >
          {/* <img src={icon} width={35} /> */}
          <div style={{ padding: "0vw 1vw" }}>{"save"}</div>
        </div>
      </div>
    </>
  );
};

export default ImageEditor;
