import React, { useState } from "react";
import { Button, Space, Modal, Form, Input, Select, Table } from "antd";
import { DaTaType } from "../Worktime/Worktime";
import { TimePicker } from "antd";
import dayjs from "dayjs";
// import { type } from "@testing-library/user-event/dist/type";

const format = "HH:mm";
type ModalAddProps = {
  open: boolean;
  onOK: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  onCancel:
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  onSubmit: (a: DaTaType) => void;
};
const ModalAdd: React.FC<ModalAddProps> = (props) => {
  return (
    <>
      <Modal
        title="Thêm mới"
        open={props.open}
        onOk={props.onOK}
        onCancel={props.onCancel}
        footer={[
          <Form.Item>
            <Button type="primary" htmlType="submit" form="formAdd">
              Lưu
            </Button>
          </Form.Item>,
        ]}
      >
        <Form
          id="formAdd"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          labelAlign="left"
          onFinish={props.onSubmit}
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
export default ModalAdd;
