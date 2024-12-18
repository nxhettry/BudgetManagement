import { useState } from "react";
import { items } from "../../utils/SidebarItems";

function Sidebar() {
  const [isActive, setIsActive] = useState<string>("Dashboard");

  const handleItemClick = (name: string) => {
    setIsActive(name);
  };

  return (
    <div className="h-screen py-8 px-8 w-[15%] bg-white text-gray-300 flex flex-col justify-between items-center">
      {/* Logo Section */}
      <div className="flex flex-col gap-12 w-full">
        <img
          src="/vite.svg"
          alt="logo"
          className="h-24 w-24 rounded-full mx-auto border-2 border-yellow-300"
        />

        {/* Sidebar Items */}
        <div className="flex flex-col py-8 w-full items-start gap-2">
          {items.map((item, index) => (
            <div key={index} className="w-full">
              <a
                href={item.link}
                className={`${
                  isActive === "Dashboard" ? "bg-gray-300" : "bg-gray-50"
                } text-gray-700 text-lg font-ubuntu px-12 py-1 w-full flex justify-between items-center`}
                onClick={() => handleItemClick(item.name)}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-4/5 border border-gray-300 rounded-lg flex justify-start px-4 gap-3 items-center">
        <img
          src="logo192.png"
          alt="profile logo"
          className="h-12 w-12 rounded-full"
        />
        <div className="h-8 w-[1px] bg-white" />
        <p className="text-xl font-semibold">nishan</p>
      </div>
    </div>
  );
}

export default Sidebar;
