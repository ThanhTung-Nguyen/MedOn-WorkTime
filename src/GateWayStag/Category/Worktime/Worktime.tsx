import React, { useContext, useEffect, useRef, useState } from "react";
import { Typography } from "antd";
import { Select } from "antd";
import {
  ReloadOutlined,
  ArrowLeftOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { InputRef } from 'antd';
import { Button, Space, Modal, Form, Input, Popconfirm, Table } from "antd";
import type { FormInstance } from "antd/es/form";
import { TimePicker } from "antd";
import dayjs from "dayjs";

//TODO: Table
interface Item {
  key: string;
  ten: string;
  loai: string;
  ca: string;
  start: string;
  end: string;
  create: string;
  status: string;
}


interface DataType {
  key: React.Key;
  ten: string;
  loai: string;
  ca: string;
  start: string;
  end: string;
  create: string;
  status: string;
}

const format = "HH:mm";
const { Option } = Select;
const { Title } = Typography;
const handleChange = (value: string) => {
  console.log(value);
};
const Worktime = () => {
  //TODO: Table
  const dataSource = [
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
      ten: "06h00-07h00",
      loai: "Video Call",
      ca: "Ca 2",
      start: "06:00",
      end: "07:00",
      create: "15/11/2022",
      status: "Đã duyệt",
    },
  ];

  const defaultColumns = [
    {
      title: "Tên khung giờ",
      dataIndex: "ten",
      width: "30%",
      editable: true,
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
      //TODO: Action Button
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            icon={<EditOutlined />}
            onClick={showModal}
          ></Button>
          <Modal
            title="Cập nhật"
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
                name="loaikhunggio"
                rules={[
                  { required: true, message: "Nhập vào loại khung giờ!" },
                ]}
              >
                <Select
                  allowClear
                  size="large"
                  defaultValue="-- Chọn loại khung giờ --"
                  style={{ width: 315, textAlign: "left" }}
                  onChange={handleChange}
                >
                  <Option value="vidcall">Video Call</Option>
                  <Option value="normal">Lịch thường</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Ca làm việc:"
                name="calamviec"
                rules={[{ required: true, message: "Nhập vào ca làm việc!" }]}
              >
                <Select
                  allowClear
                  size="large"
                  defaultValue="-- Chọn ca làm việc --"
                  style={{ width: 315, textAlign: "left" }}
                  onChange={handleChange}
                >
                  <Option value="morning">Ca sáng Bác sĩ</Option>
                  <Option value="afternoon">Ca chiều Bác sĩ</Option>
                  <Option value="evening">Ca tối Bác sĩ</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Tên khung giờ:"
                name="time"
                rules={[{ required: true, message: "Nhập vào tên khung giờ!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Khung giờ:" name={"khunggio"} required>
                <TimePicker
                  defaultValue={dayjs("00:00", format)}
                  format={format}
                />
                đến
                <TimePicker
                  defaultValue={dayjs("00:00", format)}
                  format={format}
                />
              </Form.Item>
            </Form>
          </Modal>
          <Button danger icon={<DeleteOutlined />}></Button>
        </Space>
      ),
    },
  ];


  //Table
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
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <a href="#" style={{ color: "black" }}>
            <ArrowLeftOutlined />
          </a>
        </div>
        <div>
          <Title level={4}>Danh mục khung giờ</Title>
        </div>
      </div>
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
      <div>
        <Button
          icon={<PlusCircleOutlined style={{ color: "#26C705" }} />}
          onClick={showModal}
        >
          Thêm mới
        </Button>
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
              name="loaikhunggio"
              rules={[{ required: true, message: "Nhập vào loại khung giờ!" }]}
            >
              <Select
                allowClear
                size="large"
                defaultValue="-- Chọn loại khung giờ --"
                style={{ width: 315, textAlign: "left" }}
                onChange={handleChange}
              >
                <Option value="vidcall">Video Call</Option>
                <Option value="normal">Lịch thường</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Ca làm việc:"
              name="calamviec"
              rules={[{ required: true, message: "Nhập vào ca làm việc!" }]}
            >
              <Select
                allowClear
                size="large"
                defaultValue="-- Chọn ca làm việc --"
                style={{ width: 315, textAlign: "left" }}
                onChange={handleChange}
              >
                <Option value="morning">Ca sáng Bác sĩ</Option>
                <Option value="afternoon">Ca chiều Bác sĩ</Option>
                <Option value="evening">Ca tối Bác sĩ</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Tên khung giờ:"
              name="time"
              rules={[{ required: true, message: "Nhập vào tên khung giờ!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Khung giờ:" name={"khunggio"} required>
              <TimePicker
                defaultValue={dayjs("00:00", format)}
                format={format}
              />
              đến
              <TimePicker
                defaultValue={dayjs("00:00", format)}
                format={format}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div>
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={defaultColumns}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default Worktime;
