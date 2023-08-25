import React from "react";
import { useNavigate } from "react-router-dom";
// import "./style.css";

function Header() {
  const navigate = useNavigate();
  const addItem = () => {
    navigate("/add");
  };
  return (
    <div className=" lg:container  mx-auto pt-4">
      <div className=" flex items-center justify-between">
        <p className="text-xl ">guwancann@gmail.com</p>
        <div className=" w-full">
          <div className=" flex justify-end relative ">
            <input
              type="text"
              className="bg-gray-100 border-gray-400 rounded-2xl font-size-18 pt-3 pb-3 px-4 mr-8 w-[69%] focus: outline-gray-200 text-base"
              name="text"
              placeholder="Gözleg..."
              id=""
            />
            <svg
              className="absolute top-3 right-[10.8%] "
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1955 14.3096C15.8932 14.0067 15.4828 13.8365 15.0548 13.8365C14.8461 13.8365 14.6456 13.7556 14.4955 13.6107L14.3774 13.4969C15.6101 12.0629 16.3522 10.2013 16.3522 8.1761C16.3522 3.66038 12.6918 0 8.1761 0C3.66038 0 0 3.66038 0 8.1761C0 12.6918 3.66038 16.3522 8.1761 16.3522C10.2013 16.3522 12.0629 15.6101 13.4969 14.3774L13.6107 14.4955C13.7556 14.6456 13.8365 14.8461 13.8365 15.0548C13.8365 15.4828 14.0067 15.8932 14.3096 16.1955L19.1877 21.0638C19.706 21.581 20.5452 21.5806 21.0629 21.0629C21.5806 20.5452 21.581 19.706 21.0638 19.1877L16.1955 14.3096ZM8.1761 13.8365C5.04403 13.8365 2.51572 11.3082 2.51572 8.1761C2.51572 5.04403 5.04403 2.51572 8.1761 2.51572C11.3082 2.51572 13.8365 5.04403 13.8365 8.1761C13.8365 11.3082 11.3082 13.8365 8.1761 13.8365Z"
                fill="#9998A5"
              />
            </svg>
            <button
              onClick={addItem}
              className="add-item bg-transparent px-4 py-4.5 rounded-xl border hover:cursor-pointer border-green-500"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="9.5" y1="1" x2="9.5" y2="17" stroke="#9998A5" />
                <line x1="1" y1="9.0332" x2="17" y2="9.0332" stroke="#9998A5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
