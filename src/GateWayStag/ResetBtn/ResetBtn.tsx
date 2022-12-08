import React from "react";
import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

type ResetBtnProps = {
  onClick: React.MouseEventHandler<HTMLElement> | undefined;
};
const ResetBtn:React.FC<ResetBtnProps> = (props) => {
  return (
    <>
      <Button
        block={false}
        icon={<ReloadOutlined />}
        size={"middle"}
        style={{ borderRadius: 0 }}
        onClick={props.onClick}
      >
        Reset
      </Button>
    </>
  );
}

export default ResetBtn;
