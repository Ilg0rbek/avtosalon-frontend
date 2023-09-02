import { useRef, useState } from "react";
// @ts-ignore
import { Pannellum } from "pannellum-react";

const VR = () => {
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [image] = useState("https://pannellum.org/images/alma.jpg");
  const panImage = useRef<any>(null);

  return (
    <div>
      <Pannellum
        width="824px"
        height="444px"
        image={image}
        pitch={10}
        yaw={180}
        hfov={110}
        autoRotate={2}
        autoLoad
        disableKeyboardCtrl
        // @ts-ignore
        ref={panImage}
        onMouseup={(event: any) => {
          setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
          setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
        }}
      ></Pannellum>
    </div>
  );
};

export default VR;
