import React from "react";
import Lottie from "react-lottie-player";

const LottieAnimation = ({ source, looping }) => {
  return (
    <Lottie
      loop={looping}
      animationData={source}
      play
      rendererSettings={{ preserveAspectRatio: "none" }}
    />
  );
};

export default LottieAnimation;
