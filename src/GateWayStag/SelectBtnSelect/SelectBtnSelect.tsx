import React from "react";
import { Space, Select, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import '../GateWayStag.css'

const { Title } = Typography;
const { Option } = Select;
// type SelectBtnResetProps = {
//   onChange:
//     | ((value: string, option: DefaultOptionType | DefaultOptionType[]) => void)
//     | undefined;
// };
const SelectBtnReset:React.FC = (props) => {
  
  return (
    <>
      <Space style={{ margin: "15px 0" }}>
        <p style={{marginRight: 35}}>Loại khung giờ:</p>
        <Select
          size="middle"
          defaultValue="vidcall"
          style={{ width: 260, textAlign: "left"}}
          // onChange={props.onChange}
        >
          <Option value="vidcall">Video Call</Option>
          <Option value="normal">Lịch thường</Option>
        </Select>
        <Button block={false} icon={<ReloadOutlined />} size={"middle"} style={{borderRadius: 0}}>
          Reset
        </Button>
      </Space>
    </>
  );
};
export default SelectBtnReset;
