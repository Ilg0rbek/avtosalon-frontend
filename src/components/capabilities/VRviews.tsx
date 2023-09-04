import { useRef, useState } from "react";
// @ts-ignore
import { Pannellum } from "pannellum-react";
import image from "./assets/car.jpg"
const VR = () => {
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const panImage = useRef<any>(null);

  return (
    <div>
      <Pannellum
        width="824px"
        height="400px"
        image={image}
        pitch={-10}
        yaw={-30}
        hfov={120}
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
