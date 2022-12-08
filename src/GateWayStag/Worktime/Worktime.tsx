import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { Select } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Space, Modal, Form, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import { Tag } from "antd";
import { Tooltip } from "antd";
import ArrowTitle from "../ArrowTitle/ArrowTitle";
import SelectType from "../SelectType/SelectType";
import ResetBtn from "../ResetBtn/ResetBtn";
import dayjs from "dayjs";
import ModalAdd from "../ModalAdd/ModalAdd";
import ModalEdit from "../ModalEdit/ModalEdit";
import "./Worktime.css";

const format = "HH:mm";
//TODO: DaTaType
export interface DaTaType {
  key: string;
  ten: string;
  loai: string;
  ca: string;
  start: string;
  end: string;
  create: string;
  status: boolean;
}
//TODO: FixedDataType
interface FixedDataType {
  key: React.Key;
  ten: string;
  loai: string;
  ca: string;
  start: string;
  end: string;
  create: string;
  status: boolean;
}
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
    status: true,
  },
  {
    key: "1",
    ten: "07h00-08h00",
    loai: "normal",
    ca: "morning",
    start: "2022-11-30T07:00",
    end: "2022-11-30T08:00",
    create: "15/11/2022",
    status: false,
  },
  {
    key: "2",
    ten: "08h00-09h00",
    loai: "vidcall",
    ca: "morning",
    start: "2022-11-30T08:00",
    end: "2022-11-30T09:00",
    create: "15/11/2022",
    status: true,
  },
  {
    key: "3",
    ten: "09h00-10h00",
    loai: "normal",
    ca: "morning",
    start: "2022-11-30T09:00",
    end: "2022-11-30T10:00",
    create: "15/11/2022",
    status: false,
  },
  {
    key: "4",
    ten: "10h00-11h00",
    loai: "vidcall",
    ca: "morning",
    start: "2022-11-30T10:00",
    end: "2022-11-30T11:00",
    create: "15/11/2022",
    status: true,
  },
  {
    key: "5",
    ten: "11h00-12h00",
    loai: "normal",
    ca: "",
    start: "2022-11-30T11:00",
    end: "2022-11-30T12:00",
    create: "15/11/2022",
    status: false,
  },
  {
    key: "6",
    ten: "12h00-13h00",
    loai: "vidcall",
    ca: "",
    start: "2022-11-30T12:00",
    end: "2022-11-30T13:00",
    create: "15/11/2022",
    status: true,
  },
  {
    key: "7",
    ten: "13h00-14h00",
    loai: "normal",
    ca: "",
    start: "2022-11-30T13:00",
    end: "2022-11-30T14:00",
    create: "15/11/2022",
    status: false,
  },
  {
    key: "8",
    ten: "14h00-15h00",
    loai: "vidcall",
    ca: "",
    start: "2022-11-30T14:00",
    end: "2022-11-30T15:00",
    create: "15/11/2022",
    status: true,
  },
  {
    key: "9",
    ten: "15h00-16h00",
    loai: "normal",
    ca: "",
    start: "2022-11-30T15:00",
    end: "2022-11-30T16:00",
    create: "15/11/2022",
    status: false,
  },
  {
    key: "10",
    ten: "16h00-17h00",
    loai: "vidcall",
    ca: "",
    start: "2022-11-30T16:00",
    end: "2022-11-30T17:00",
    create: "15/11/2022",
    status: true,
  },
  {
    key: "11",
    ten: "17h00-18h00",
    loai: "normal",
    ca: "",
    start: "2022-11-30T17:00",
    end: "2022-11-30T18:00",
    create: "15/11/2022",
    status: false,
  },
];

//TODO: Worktime const
const Worktime = () => {
  //TODO: Columns
  const columns: ColumnsType<FixedDataType> = [
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
        if (a === "normal")
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
      //TODO: Trạng thái
      render: (completed) => {
        if (completed === true) {
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
      },
      filters: [
        { text: "Đã duyệt", value: true },
        { text: "Không duyệt", value: false },
      ],
      onFilter: (value, record) => {
        return record.status === value;
      },
    },
    {
      title: "Thao tác",
      dataIndex: "operation",
      width: "7.3%",
      fixed: "right",
      //TODO: Button Thao tác
      render: (value: any, record: any, index: any) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Space size="middle">
              <Button
                type="primary"
                ghost
                onClick={() => {
                  setEditrow(record);
                  showModalUpdate();
                }}
                icon={<EditOutlined />}
              ></Button>
              <Button
                shape="default"
                danger
                onClick={() => {
                  modalDel(record);
                }}
                icon={<DeleteOutlined />}
              ></Button>
            </Space>
          </div>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); //State Modal Add
  const [modalDelOpen, setModalDelOpen] = useState(false); //State Modal Delete
  const [arrlist, setArrlist] = useState<DaTaType[]>(data); //State Data Table
  const [modalEditOpen, setModalEditOpen] = useState(false); //State Modal Edit
  const [editrow, setEditrow] = useState<any>(); //State chọn row để Edit

  const [filter, setfilter] = useState<string>("vidcall"); //State lọc loại khung giờ
  const [messageApi, contextHolder] = message.useMessage(); //State Message

  useEffect(() => {
    if (filter) {
      let a = data.filter((currentValue) => currentValue.loai === filter);
      setArrlist(a);
      console.log(a);
    } else {
      setArrlist(data);
    }
  }, [filter]);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Thành công",
    });
  };

  const modalDel = (value: any) => {
    Modal.confirm({
      title: "Cảnh báo",
      content: "Bạn có chắc muốn thực hiện hành động này?",
      icon: <ExclamationCircleOutlined />,
      okText: "Đồng ý",
      cancelText: "Huỷ bỏ",
      open: modalDelOpen,
      onOk: () => {
        handleDel(value);
        closeModalDel();
      },
      onCancel() {
        closeModalDel();
      },
    });
  };
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
    setEditrow("");
  };
  //TODO: Hàm Add
  const onSubmit = (a: DaTaType) => {
    arrlist.push(a);
    setArrlist([...arrlist]);
    closeModal();
    success();
  };
  //TODO: Hàm Delete
  const handleDel = (selectedrow: any) => {
    setArrlist(
      arrlist.filter((currentValue) => {
        return currentValue !== selectedrow;
      })
    );
    success();
  };
  //TODO: Hàm Edit
  const handleEdit = (values: any) => {
    let index = arrlist.indexOf(editrow);
    arrlist[index] = { ...editrow, ...values };
    setArrlist([...arrlist]);
    setModalEditOpen(false);
    success();
  };

  const [select, setSelect] = useState({
    selectedRowKeys: [],
    loading: false,
  });
  const { selectedRowKeys, loading } = select;
  const rowSelection = {
    selections: true,
    hideSelectAll: true,
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => {
      setSelect({
        ...select,
        selectedRowKeys: selectedRowKeys,
      });
    },
  };

  //TODO: View Work Time
  return (
    <div className="sc-eCApnc iylGhi">
      {contextHolder}
      <div className="ant-page-header ant-page-header-ghost">
        <div>
          <ArrowTitle />
        </div>
        <div>
          <Space style={{ margin: "15px 0" }}>
            <SelectType
              onChange={(value: any, option) => {
                setfilter(value);
              }}
            />
            <ResetBtn
              onClick={() => {
                setArrlist(data);
                setfilter("vidcall");
              }}
            />
          </Space>
        </div>
      </div>
      {/* TODO: Modal ADD */}
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
        {/* TODO: Table */}
        <Table
          rowSelection={rowSelection}
          bordered
          dataSource={arrlist}
          columns={columns}
          onRow={(record: any, index) => {
            return {
              onClick: () => {},
              onDoubleClick: () => {
                setEditrow(record);
                setModalEditOpen(true);
              },
            };
          }}
        />
        {/* TODO: Modal Edit */}
        <ModalEdit
          setEditrow={setEditrow}
          data={editrow}
          open={modalEditOpen}
          onEdit={handleEdit}
          onCancel={closeModalUpdate}
        />
      </div>
    </div>
  );
};
export default Worktime;
