import React from "react";
import Typed from "react-typed";

const ReactTyped = () => {
  return (
    <div className="container mx-auto my-10 bg-pink-400 h-60 text-center">
      <div className="my-auto text-center text-4xl">
        <Typed
          strings={[
            "Search for products",
            "Search for categories",
            "Search for brands",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default ReactTyped;
