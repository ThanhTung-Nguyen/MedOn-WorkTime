import React, { useState } from "react";
import { Form, Input, Modal } from "antd";
import { TimePicker, Select } from "antd";
// import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { DaTaType } from "../Worktime/Worktime";

const format = "HH:mm";
interface ModalEditFormProps {
  data: any;
  open: boolean;
  onEdit: (values: DaTaType) => void;
  onCancel: () => void;
}

const ModalEdit: React.FC<ModalEditFormProps> = (props) => {
  const [form] = Form.useForm();
  console.log(props.data);
  return (
    <>
      <Modal
        title="Cập nhật"
        open={props.open}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              props.onEdit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={props.onCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          labelAlign="left"
          //   onFinish={onFinish}
        >
          <Form.Item
            label="Loại khung giờ:"
            name="loai"
            rules={[{ required: true, message: "Nhập vào loại khung giờ!" }]}
          >
            <Select
              showSearch
              allowClear
              size="middle"
              value={props?.data?.loai}
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
              size="middle"
              value={props?.data?.ca}
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
            <Input value={props?.data?.ten} />
          </Form.Item>
          <Form.Item label="Khung giờ" required>
            <Form.Item
              name="start"
              initialValue={dayjs("12:08", format)}
              rules={[{ required: true, message: "Nhập giờ bắt đầu!" }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <TimePicker
                format={format}
                value={props?.data?.start}
                size="large"
              />
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
              <TimePicker
                format={format}
                value={props?.data?.end}
                size="large"
              />
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModalEdit;
