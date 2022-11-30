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
import { Tooltip } from "antd";
import ArrowTitle from "../ArrowTitle/ArrowTitle";
import SelectBtnReset from "../SelectBtnSelect/SelectBtnSelect";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import ModalAdd from "../ModalAdd/ModalAdd";
import ModalEdit from "../ModalEdit/ModalEdit";
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
// interface CollectionCreateFormProps {
//   onCreate: (values: DaTaType) => void;
// }
//TODO: Data
const data: DaTaType[] = [
  {
    key: "0",
    ten: "06h00-07h00",
    loai: "vidcall",
    ca: "morning",
    start: "2022-11-30T06:00",
    end: "2022-11-30T07:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "Video Call",
    ca: "morning",
    start: "2022-11-30T07:00",
    end: "2022-11-30T08:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "2",
    ten: "08h00-09h00",
    loai: "vidcall",
    ca: "morning",
    start: "2022-11-30T08:00",
    end: "2022-11-30T09:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "3",
    ten: "09h00-10h00",
    loai: "Video Call",
    ca: "morning",
    start: "2022-11-30T09:00",
    end: "2022-11-30T10:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "4",
    ten: "10h00-11h00",
    loai: "vidcall",
    ca: "morning",
    start: "2022-11-30T10:00",
    end: "2022-11-30T11:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "5",
    ten: "11h00-12h00",
    loai: "Video Call",
    ca: "morning",
    start: "2022-11-30T11:00",
    end: "2022-11-30T12:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "6",
    ten: "12h00-13h00",
    loai: "vidcall",
    ca: "afternoon",
    start: "2022-11-30T12:00",
    end: "2022-11-30T13:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
  {
    key: "7",
    ten: "13h00-14h00",
    loai: "Video Call",
    ca: "afternoon",
    start: "2022-11-30T13:00",
    end: "2022-11-30T14:00",
    create: "15/11/2022",
    status: "Đã duyệt",
  },
];

//TODO: View WorkTime Page
const Worktime = () => {
  const columns: ColumnsType<FixedDataType> = [
    // {
    //   title: "",
    //   dataIndex: "",
    //   width: "3%",
    //   render: () => (
    //     <Checkbox
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     ></Checkbox>
    //   ),
    // },
    {
      title: "Tên khung giờ",
      dataIndex: "ten",
      width: "12%",
      render: (value) => {
        return (
          <Tooltip title="Click đúp chuột để xem chi tiết">{value}</Tooltip>
        );
      },
    },
    {
      title: "Loại khung giờ",
      dataIndex: "loai",
      render: (a) => {
        if (a === "vidcall")
          return (
            <Tooltip title="Click đúp chuột để xem chi tiết">
              <Tag>Video Call</Tag>
            </Tooltip>
          );
        return (
          <Tooltip title="Click đúp chuột để xem chi tiết">
            <Tag>Lịch thường</Tag>
          </Tooltip>
        );
      },
    },
    {
      title: "Ca làm việc",
      dataIndex: "ca",
      render: (a: any) => {
        if (a === "morning")
          return (
            <Tooltip title="Click đúp chuột để xem chi tiết">
              <Tag>Ca sáng bác sĩ</Tag>
            </Tooltip>
          );
        if (a === "afternoon")
          return (
            <Tooltip title="Click đúp chuột để xem chi tiết">
              <Tag>Ca chiều bác sĩ</Tag>
            </Tooltip>
          );
        if (a === "evening")
          return (
            <Tooltip title="Click đúp chuột để xem chi tiết">
              <Tag>Ca tối bác sĩ</Tag>
            </Tooltip>
          );
        return (
          <Tooltip title="Click đúp chuột để xem chi tiết">
            <Tag></Tag>
          </Tooltip>
        );
      },
    },
    {
      title: "Giờ bắt đầu",
      dataIndex: "start",
      render: (value) => {
        return (
          <Tooltip title="Click đúp chuột để xem chi tiết">
            {dayjs(value).format(format)}
          </Tooltip>
        );
      },
    },
    {
      title: "Giờ kết thúc",
      dataIndex: "end",
      render: (value) => {
        return (
          <Tooltip title="Click đúp chuột để xem chi tiết">
            {dayjs(value).format(format)}
          </Tooltip>
        );
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "create",
      render: () => {
        return (
          <Tooltip title="Click đúp chuột để xem chi tiết">30/11/2022</Tooltip>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      filters: [
        {
          text: "Đã duyệt",
          value: "duyet",
        },
        {
          text: "Không duyệt",
          value: "koduyet",
        },
      ],
      render: () => {
        return (
          <Tooltip title="Click đúp chuột để xem chi tiết">
            <Tag color="blue">Đã duyệt</Tag>
          </Tooltip>
        );
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
  const [modalDelOpen, setModalDelOpen] = useState(false); //State Modal Delete
  const [arrlist, setArrlist] = useState<DaTaType[]>(data); //State Data Table
  const [selectedrow, setSelectedrow] = useState(0); //State chọn row để xoá
  const [modalEditOpen, setModalEditOpen] = useState(false); //State Modal Edit
  const [editrow, setEditrow] = useState(); //State chọn row để Edit

  //TODO: Đóng mở MoDal Add
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //TODO: Đóng mở MoDal Delete
  const showModalDel = () => {
    setModalDelOpen(true);
  };
  const closeModalDel = () => {
    setModalDelOpen(false);
  };
  //TODO: Đóng mở MoDal Update
  const showModalUpdate = () => {
    setModalEditOpen(true);
  };
  const closeModalUpdate = () => {
    setModalEditOpen(false);
  };
  //TODO: Hàm Add
  const onSubmit = (a: DaTaType) => {
    arrlist.push(a);
    setArrlist([...arrlist]);
    closeModal();
  };
  //TODO: Hàm Delete
  const handleDel = () => {
    arrlist.splice(selectedrow, 1);
    setArrlist([...arrlist]);
  };

  const handleEdit = () => {};

  const onFinish = (values: any) => {
    console.log("Values received", values);
  };
  const [form] = Form.useForm();
  const [select, setSelect] = useState({
    selectedRowKeys: [],
    loading: false,
  });
  const { selectedRowKeys, loading } = select;
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => {
      setSelect({
        ...select,
        selectedRowKeys: selectedRowKeys,
      });
    },
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
        <Table
          rowSelection={rowSelection}
          bordered
          dataSource={arrlist}
          columns={columns}
          onRow={(record, index) => {
            return {
              onDoubleClick: () => {
                handleEdit();
                setModalEditOpen(true);
              },
            };
          }}
        />
        <ModalEdit
          open={modalEditOpen}
          onEdit={handleEdit}
          onCancel={closeModalUpdate}
        />
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
