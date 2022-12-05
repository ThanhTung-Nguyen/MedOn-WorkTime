import React from "react";
import { Tag, Tooltip } from "antd";

interface StatusProps {
  completed: boolean;
}
const Status: React.FC<StatusProps> = (props) => {
  if (props.completed === true) {
    return (
      <Tooltip title="Click đúp chuột để xem chi tiết">
        <Tag color="blue">Đã duyệt</Tag>
      </Tooltip>
    );
  }
  return (
    <Tooltip title="Click đúp chuột để xem chi tiết">
      <Tag color="volcano">Không duyệt</Tag>
    </Tooltip>
  );
};
export default Status;
