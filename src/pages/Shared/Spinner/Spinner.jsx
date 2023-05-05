import React from "react";
import loading from "../../../../public/loading.json";
import Lottie from "lottie-react";
import useSetTitle from "../../../hook/useSetTitle";

const Spinner = () => {
  useSetTitle("Loading");
  return (
    <div className="flex items-center justify-center h-[calc(100vh-260px)]">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
};

export default Spinner;
