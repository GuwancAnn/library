import React from "react";
import { Select, Space } from "antd";
import { useTeachers } from "./hooks/useTeachers";

const DropDownNameSelect = () => {
  const { teachers } = useTeachers();

  const options = [];

  teachers.map((teach) => {
    options.push({
      label: teach.teach_name,
      value: teach.id,
    });
  });
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  console.log(teachers);
  return (
    <Space
      style={{
        width: "100%",
      }}
      className="h-10"
      direction="vertical"
    >
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        //   defaultValue={["a10", "c12"]}
        onChange={handleChange}
        options={options}
        className="h-10 "
      />
    </Space>
  );
};
export default DropDownNameSelect;
