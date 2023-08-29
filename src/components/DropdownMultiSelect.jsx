import React from "react";
import { Select, Space } from "antd";
import { useLessons } from "./hooks/useLessons";
const DropDownMultiSelect = () => {
  const { lessons } = useLessons();
  const options = [];
  lessons.map((lesson) => {
    options.push({
      label: lesson.les_name,
      value: lesson.id,
    });
  });
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Space
      style={{
        width: "100%",
      }}
      direction="vertical"
    >
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        // defaultValue={["a10", "c12"]}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};
export default DropDownMultiSelect;
