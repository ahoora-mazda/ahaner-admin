import React from "react";
interface Props {
  children: React.ReactNode;
}
const PureLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default PureLayout;
