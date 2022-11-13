import React from "react";
import Gesture from "../components/framer_motion/Gesture";
import KeyFrames from "../components/framer_motion/KeyFrames";
import MovingLeftRight from "../components/framer_motion/MovingLeftRight";

const motion = () => {
  return (
    <>
      <div>
        <KeyFrames />
      </div>
      <div>
        <Gesture />
      </div>
      <div>
        <MovingLeftRight/>
      </div>
    </>
  );
};

export default motion;
