import React, { useState, useEffect } from "react";
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
  setEditrow: any;
}

const ModalEdit: React.FC<ModalEditFormProps> = (props) => {
  const [form] = Form.useForm();
  console.log(props.data);

  useEffect(() => {
    form.setFieldsValue({
      ...props?.data,
      start: dayjs(props?.data?.start),
      end: dayjs(props?.data?.end),
    });
  }, [props.data])
  
  
  return (
    <>
      <Modal
        title="Cập nhật"
        open={props.open}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              props.onEdit(values);
              form.resetFields();
              props.setEditrow();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={() => {
          props.onCancel();
          form.resetFields();
        }}
      >
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          labelAlign="left"
          // initialValues={{
          //   ...props?.data,
          //   start: dayjs(props?.data?.start),
          //   end: dayjs(props?.data?.end),
          // }}

          onFinish={() => form.resetFields()}
        >
          <Form.Item
            // getValueProps={(value) => dayjs(value)}
            label="Loại khung giờ:"
            name="loai"
            rules={[{ required: true, message: "Nhập vào loại khung giờ!" }]}
          >
            <Select
              showSearch
              allowClear
              size="middle"
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
            <Input/>
          </Form.Item>
          <Form.Item label="Khung giờ" required>
            <Form.Item
              name="start"
              rules={[{ required: true, message: "Nhập giờ bắt đầu!" }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <TimePicker format={format} />
            </Form.Item>
            <Form.Item
              name="end"
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
