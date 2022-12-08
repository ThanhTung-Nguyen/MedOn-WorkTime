import React from "react";
import { Space, Select, Button } from "antd";

import { Typography } from "antd";
import '../GateWayStag.css'

const { Title } = Typography;
const { Option } = Select;
type SelectTypeProps = {
  onChange: ((value: string, option: any) => void) | undefined;
};
const SelectType:React.FC<SelectTypeProps> = (props) => {
  
  return (
    <>
      <Space style={{ margin: "15px 0" }}>
        <p style={{marginRight: 35}}>Loại khung giờ:</p>
        <Select
          size="middle"
          defaultValue="vidcall"
          style={{ width: 260, textAlign: "left"}}
          onChange={props.onChange}
        >
          <Option value="vidcall">Video Call</Option>
          <Option value="normal">Lịch thường</Option>
        </Select>
        
      </Space>
    </>
  );
};
export default SelectType;
