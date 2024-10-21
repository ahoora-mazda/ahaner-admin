import { Progress } from "antd";
import React, { useEffect, useState } from "react";
interface Props {
  onClose: () => void;
  show: boolean;
}

const PdfLoading: React.FC<Props> = ({ onClose, show }) => {
  const [progress, setProgress] = useState<number>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress: number) =>
        prevProgress >= 100
          ? 1
          : prevProgress + Math.floor(Math.random() * 2) + 1
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    if (show) {
      return;
    }
    setProgress(100);
    onClose();
  }, [show]);
  if (show) {
    return (
      <div className="h-screen flex items-center justify-center ">
        <div className="w-[400px] z-20 relative bg-white p-4 rounded-lg">
          <div>
            <img
              alt=""
              src={require("../../assets/images/logo/logo.png")}
              className="w-24 m-auto mb-3"
            />
          </div>
          <Progress percent={progress} status="active" />
          <p className="text-center mt-2">درحال ساخت pdf</p>
        </div>
        <div className="bg-[rgba(0,0,0,0.3)] left-0 right-0 fixed h-screen z-[-1] w-full"></div>
      </div>
    );
  }
  return <></>;
};

export default PdfLoading;
