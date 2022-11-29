import { Space, Select, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

const { Option } = Select;
const SelectBtnReset = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <Space>
        <p>Loại khung giờ:</p>
        <Select
          size="large"
          defaultValue="Tất cả"
          style={{ width: 260, textAlign: "left" }}
          onChange={handleChange}
        >
          <Option value="vidcall">Video Call</Option>
          <Option value="normal">Lịch thường</Option>
        </Select>
        <Button icon={<ReloadOutlined />} size={"large"}>
          Reset
        </Button>
      </Space>
    </>
  );
};
export default SelectBtnReset;
