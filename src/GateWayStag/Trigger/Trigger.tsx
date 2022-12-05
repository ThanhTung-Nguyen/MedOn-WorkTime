import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const Trigger = (props:any) => {
    return (
      <>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => props.setCollapsed(!props.collapsed),
          }
        )}
      </>
    );
}
export default Trigger;