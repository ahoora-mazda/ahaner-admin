import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <RingLoader color="#000" />
    </div>
  );
};

export default Loading;
