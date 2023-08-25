import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    type: "group",
    label: "Kafedralar",
    children: [
      {
        key: "2",
        label: "sub menu",
        children: [
          {
            key: "2-1",
            label: "3rd menu item",
            children: [
              {
                key: "2-1-1",
                label: <p>asf</p>,
              },
            ],
          },
        ],
      },

      {
        key: "2-3",
        label: "sub menu",

        children: [
          {
            key: "2-1-3",
            label: "3rd menu item",
            children: [
              {
                key: "2-1-1-3",
                label: <p>dd</p>,
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   key: "2",
  //   label: "sub menu",
  //   children: [
  //     {
  //       key: "2-1",
  //       label: "3rd menu item",
  //       children: [
  //         {
  //           key: "2-1-1",
  //           label: <p>df</p>,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   key: "3",
  //   label: " sub menu",

  //   children: [
  //     {
  //       key: "3-1",
  //       label: "5d menu item",
  //     },
  //     {
  //       key: "3-2",
  //       label: "6th menu item",
  //     },
  //   ],
  // },
];
const DropdownItems = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Maglumat howpsuzlygy
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownItems;
