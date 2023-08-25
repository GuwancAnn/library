import React, { useState } from "react";
// import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      title: "Item 1",
      subItems: ["Subitem 1", "Subitem 2", "Subitem 3"],
    },
    {
      title: "Item 2",
      subItems: ["Subitem 1", "Subitem 2", "Subitem 3"],
    },
    {
      title: "Item 3",
      subItems: ["Subitem 1", "Subitem 2", "Subitem 3"],
    },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleDropdownClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown-menu">
      <ul>
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            onClick={() => handleDropdownClick(menuItem)}
            className={menuItem === activeMenuItem ? "active" : ""}
          >
            {menuItem.title}
            {showDropdown && activeMenuItem === menuItem && (
              <ul className="dropdown-submenu">
                {menuItem.subItems.map((subItem, index) => (
                  <li key={index}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
