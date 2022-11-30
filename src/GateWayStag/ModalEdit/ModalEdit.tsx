import React, { useState } from "react";
import { Button, Form, Input, Modal, Radio } from "antd";
import { TimePicker, Select } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { DaTaType } from "../Worktime/Worktime";

const format = "HH:mm";
interface ModalEditFormProps {
    open: boolean;
    onEdit: (values: DaTaType) => void;
    onCancel: () => void;
};

const ModalEdit: React.FC<ModalEditFormProps> = ({
  open,
  onEdit,
  onCancel,
}) => {
    const [form] = Form.useForm();
  return (
    <>
      <Modal
        title="Cập nhật"
        open={open}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onEdit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={onCancel}
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
    </>
  );
};
export default ModalEdit;