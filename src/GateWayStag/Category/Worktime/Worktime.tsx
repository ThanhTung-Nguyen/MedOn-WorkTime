import React, { useContext, useEffect, useRef, useState } from "react";
import { Typography } from "antd";
import { Select } from "antd";
import {
  ReloadOutlined,
  ArrowLeftOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import type { InputRef } from "antd";
import { Button, Space, Modal, Form, Input, Popconfirm, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { FormInstance } from "antd/es/form";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { Pagination } from "antd";
import "./WorkTime.css";

const format = "HH:mm";
const { Option } = Select;
const { Title } = Typography;
interface DaTaType {
  key: string;
  ten: string;
  loai: string;
  ca: string;
  start: string;
  end: string;
  create: string;
  status: string;
}
//TODO: Data
const data: DaTaType[] = [
  {
    key: "0",
    ten: "06h00-07h00",
    loai: "Video Call",
    ca: "Ca 1",
    start: "06:00",
    end: "07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "Ca 2",
    start: "07:00",
    end: "08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "0",
    ten: "06h00-07h00",
    loai: "Video Call",
    ca: "Ca 1",
    start: "06:00",
    end: "07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "Ca 2",
    start: "07:00",
    end: "08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "0",
    ten: "06h00-07h00",
    loai: "Video Call",
    ca: "Ca 1",
    start: "06:00",
    end: "07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "Ca 2",
    start: "07:00",
    end: "08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "0",
    ten: "06h00-07h00",
    loai: "Video Call",
    ca: "Ca 1",
    start: "06:00",
    end: "07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "Ca 2",
    start: "07:00",
    end: "08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "0",
    ten: "06h00-07h00",
    loai: "Video Call",
    ca: "Ca 1",
    start: "06:00",
    end: "07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "Ca 2",
    start: "07:00",
    end: "08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "0",
    ten: "06h00-07h00",
    loai: "Video Call",
    ca: "Ca 1",
    start: "06:00",
    end: "07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "Ca 2",
    start: "07:00",
    end: "08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
];

//TODO: Modal Thêm mới
const ModalAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Thêm mới"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          labelAlign="left"
        >
          <Form.Item
            label="Loại khung giờ:"
            name="loai"
            rules={[{ required: true, message: "Nhập vào loại khung giờ!" }]}
          >
            <Select
              showSearch
              allowClear
              size="large"
              defaultValue="-- Chọn loại khung giờ --"
              style={{ width: 315, textAlign: "left" }}
              options={[
                {
                  value: "vidcall",
                  label: "Video Call",
                },
                {
                  value: "normal",
                  label: "Lịch thường",
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item
            label="Ca làm việc:"
            name="ca"
            rules={[{ required: true, message: "Nhập vào ca làm việc!" }]}
          >
            <Select
              showSearch
              allowClear
              size="large"
              defaultValue="-- Chọn ca làm việc --"
              style={{ width: 315, textAlign: "left" }}
              options={[
                {
                  value: "morning",
                  label: "Ca sáng Bác sĩ",
                },
                {
                  value: "afternoon",
                  label: "Ca chiều Bác sĩ",
                },
                {
                  value: "evening",
                  label: "Ca tối Bác sĩ",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Tên khung giờ:"
            rules={[{ required: true, message: "Nhập vào tên khung giờ!" }]}
          >
            <Input name="ten" />
          </Form.Item>
          <Form.Item label="Khung giờ:" name={"khunggio"} required>
            <Input name="start" />
            đến
            <Input name="end" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
const ModalDel = () => {
  Modal.confirm({
    title: "Cảnh báo",
    icon: <ExclamationCircleOutlined />,
    content: "Bạn có chắc muốn thực hiện hành động này",
    okText: "Đồng ý",
    cancelText: "Huỷ bỏ",
  });
};

const columns = [
  {
    title: "",
    dataIndex: "",
    width: "3%",
    render: () => (
      <Checkbox
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Checkbox>
    ),
  },
  {
    title: "Tên khung giờ",
    dataIndex: "ten",
    width: "12%",
  },
  {
    title: "Loại khung giờ",
    dataIndex: "loai",
  },
  {
    title: "Ca làm việc",
    dataIndex: "ca",
  },
  {
    title: "Giờ bắt đầu",
    dataIndex: "start",
  },
  {
    title: "Giờ kết thúc",
    dataIndex: "end",
  },
  {
    title: "Ngày tạo",
    dataIndex: "create",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Thao tác",
    dataIndex: "operation",
    width: "6%",
    //TODO: Action Button
    render: () => (
      <Space size="middle">
        <Button type="primary" ghost icon={<EditOutlined />}></Button>
        <Modal title="Cập nhật">
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label="Loại khung giờ:"
              name="loai"
              rules={[{ required: true, message: "Nhập vào loại khung giờ!" }]}
            >
              <Select
                showSearch
                allowClear
                size="large"
                defaultValue="-- Chọn loại khung giờ --"
                style={{ width: 315, textAlign: "left" }}
                options={[
                  {
                    value: "vidcall",
                    label: "Video Call",
                  },
                  {
                    value: "normal",
                    label: "Lịch thường",
                  },
                ]}
              ></Select>
            </Form.Item>
            <Form.Item
              label="Ca làm việc:"
              name="ca"
              rules={[{ required: true, message: "Nhập vào ca làm việc!" }]}
            >
              <Select
                showSearch
                allowClear
                size="large"
                defaultValue="-- Chọn ca làm việc --"
                style={{ width: 315, textAlign: "left" }}
                options={[
                  {
                    value: "morning",
                    label: "Ca sáng Bác sĩ",
                  },
                  {
                    value: "afternoon",
                    label: "Ca chiều Bác sĩ",
                  },
                  {
                    value: "evening",
                    label: "Ca tối Bác sĩ",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Tên khung giờ:"
              name="ten"
              rules={[{ required: true, message: "Nhập vào tên khung giờ!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Khung giờ:" name={"khunggio"} required>
              <TimePicker
                name="start"
                defaultValue={dayjs("00:00", format)}
                format={format}
              />
              đến
              <TimePicker
                name="end"
                defaultValue={dayjs("00:00", format)}
                format={format}
              />
            </Form.Item>
          </Form>
        </Modal>
        <Button danger onClick={ModalDel} icon={<DeleteOutlined />}></Button>
      </Space>
    ),
  },
];
  
//TODO: Arrow Title Danh mục khung giờ
const ArrowTitle = () => {
  return (
    <div className="ant-page-header-heading">
      <div className="ant-page-header-heading-left">
        <div className="ant-page-header-back">
          <div className="ant-page-header-back-button">
            <a href="#">
              <ArrowLeftOutlined />
            </a>
          </div>
        </div>
        <div>
          <span className="ant-page-header-heading-title">
            Danh mục khung giờ
          </span>
        </div>
      </div>
    </div>
  );
};

//TODO: Select and Button Reset Danh mục khung giờ
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

//TODO: View WorkTime Page
const Worktime = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [arrlist, setArrlist] = useState<DaTaType[]>(data);
 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const ModalDel = () => {
    Modal.confirm({
      title: "Cảnh báo",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc muốn thực hiện hành động này",
      okText: "Đồng ý",
      cancelText: "Huỷ bỏ",
    });
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
 
  return (
    <div className="sc-eCApnc iylGhi">
      <div className="ant-page-header ant-page-header-ghost">
        <div>
          <ArrowTitle />
        </div>
        <div>
          <SelectBtnReset />
        </div>
      </div>
      <div className="modalAdd">
        <Button
          icon={<PlusCircleOutlined style={{ color: "#26C705" }} />}
          onClick={showModal}
        >
          Thêm mới
        </Button>
        <ModalAdd />
      </div>
      <div>
        <Table bordered dataSource={arrlist} columns={columns} />
      </div>
    </div>
  );
};
export default Worktime;
