import React, { useState } from "react";
import { DatePicker, Space } from "antd";

const DatePickerPrint = () => {
  const [size, setSize] = useState("middle");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Space direction="vertical" className="w-full">
      <DatePicker
        style={{
          width: "100%",
          height: "2.5rem",
        }}
      />
    </Space>
  );
};
export default DatePickerPrint;
