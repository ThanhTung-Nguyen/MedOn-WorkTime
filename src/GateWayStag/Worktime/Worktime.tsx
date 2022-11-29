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
import { Button, Space, Modal, Form, Input, Popconfirm, Table } from "antd";
import { Checkbox } from "antd";
import { TimePicker } from "antd";
import { ColumnsType } from "antd/es/table";
import { Divider, Tag } from "antd";
import ArrowTitle from "../ArrowTitle/ArrowTitle";
import SelectBtnReset from "../SelectBtnSelect/SelectBtnSelect";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import ModalAdd from "../ModalAdd/ModalAdd";
import "./Worktime.css";

const format = "HH:mm";

export interface DaTaType {
  key: string;
  ten: string;
  loai: string;
  ca: string;
  start: string;
  end: string;
  create: string;
  status: string;
}
interface FixedDataType {
  key: React.Key;
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
    loai: "vidcall",
    ca: "morning",
    start: "2022-11-29T11:11",
    end: "07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "morning",
    start: "07:00",
    end: "08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "2",
    ten: "08h00-09h00",
    loai: "vidcall",
    ca: "morning",
    start: "08:00",
    end: "09:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "3",
    ten: "09h00-10h00",
    loai: "Video Call",
    ca: "morning",
    start: "09:00",
    end: "10:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "4",
    ten: "10h00-11h00",
    loai: "vidcall",
    ca: "morning",
    start: "10:00",
    end: "11:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "5",
    ten: "11h00-12h00",
    loai: "Video Call",
    ca: "morning",
    start: "11:00",
    end: "12:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "6",
    ten: "12h00-13h00",
    loai: "vidcall",
    ca: "afternoon",
    start: "12:00",
    end: "13:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "7",
    ten: "13h00-14h00",
    loai: "Video Call",
    ca: "afternoon",
    start: "13:00",
    end: "14:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
];

//TODO: View WorkTime Page
const Worktime = () => {
  const columns: ColumnsType<FixedDataType> = [
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
      render: (a) => {
        if (a === "vidcall") return <Tag>Video Call</Tag>;
        return <Tag>Lịch thường</Tag>;
      },
    },
    {
      title: "Ca làm việc",
      dataIndex: "ca",
      render: (a: any) => {
        if (a === "morning") return <Tag>Ca sáng bác sĩ</Tag>;
        if (a === "afternoon") return <Tag>Ca chiều bác sĩ</Tag>;
        return <Tag>Ca tối bác sĩ</Tag>;
      },
    },
    {
      title: "Giờ bắt đầu",
      dataIndex: "start",
      render: (value) => {
        return dayjs(value).format(format);
      },
    },
    {
      title: "Giờ kết thúc",
      dataIndex: "end",
    },
    {
      title: "Ngày tạo",
      dataIndex: "create",
      render: () => {
        return "29/11/2022";
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: () => {
        return <Tag color="blue">Đã duyệt</Tag>;
      },
    },
    {
      title: "Thao tác",
      dataIndex: "operation",
      width: "6%",
      fixed: "right",
      //TODO: Action Button
      render: (_: any, record: any, index: any) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            onClick={() => {
              showModalUpdate();
              setEditrow(index);
            }}
            icon={<EditOutlined />}
          ></Button>
          <Button
            danger
            onClick={() => {
              showModalDel();
              setSelectedrow(index);
            }}
            icon={<DeleteOutlined />}
          ></Button>
        </Space>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDelOpen, setModalDelOpen] = useState(false);
  const [arrlist, setArrlist] = useState<DaTaType[]>(data);
  const [selectedrow, setSelectedrow] = useState(0);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [editrow, setEditrow] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalDel = () => {
    setModalDelOpen(true);
  };
  const showModalUpdate = () => {
    setModalEditOpen(true);
  };
  const closeModalDel = () => {
    setModalDelOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onSubmit = (a: DaTaType) => {
    arrlist.push(a);
    setArrlist([...arrlist]);
    closeModal();
  };
  const handleDel = () => {
    arrlist.splice(selectedrow, 1);
    setArrlist([...arrlist]);
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
        <ModalAdd
          open={isModalOpen}
          onOK={closeModal}
          onCancel={closeModal}
          onSubmit={onSubmit}
        />
      </div>
      <div>
        <Table bordered dataSource={arrlist} columns={columns} />
        <Modal
          title="Cập nhật"
          open={modalEditOpen}
          onOk={(e) => {}}
          onCancel={closeModalDel}
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
                placeholder="-- Chọn loại khung giờ --"
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
                placeholder="-- Chọn ca làm việc --"
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
              name="ten"
              label="Tên khung giờ:"
              rules={[{ required: true, message: "Nhập vào tên khung giờ!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Khung giờ" required>
              <Form.Item
                name="start"
                initialValue={dayjs("12:08", format)}
                rules={[{ required: true, message: "Nhập giờ bắt đầu!" }]}
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              >
                <TimePicker format={format} />
              </Form.Item>
              <Form.Item
                name="end"
                initialValue={dayjs("12:08", format)}
                rules={[{ required: true, message: "Nhập giờ kết thúc!" }]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <TimePicker format={format} />
              </Form.Item>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Cảnh báo"
          open={modalDelOpen}
          onOk={(e) => {
            handleDel();
            closeModalDel();
          }}
          onCancel={closeModalDel}
        >
          <p>Bạn có chắc muốn thực hiện hành động này?</p>
        </Modal>
      </div>
    </div>
  );
};
export default Worktime;
