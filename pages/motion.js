import React from "react";
import Gesture from "../components/framer_motion/Gesture";
import KeyFrames from "../components/framer_motion/KeyFrames";

const motion = () => {
  return (
    <>
      <div>
        <KeyFrames/>
      </div>
      <div>
        <Gesture />
      </div>
    </>
  );
};

export default motion;
