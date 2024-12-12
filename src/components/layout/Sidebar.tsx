import { useState } from "react";
import { items } from "../../utils/SidebarItems";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

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
              {/* Main Item */}
              {item.name === "Dashboard" ? (
                <a
                  href="/"
                  className={`${
                    isActive === "Dashboard" ? "bg-gray-300" : "bg-gray-50"
                  } text-gray-700 text-lg font-ubuntu px-12 py-1 w-full flex justify-between items-center`}
                  onClick={() => handleItemClick(item.name)}
                >
                  {item.name}
                </a>
              ) : (
                <Collapsible>
                  {/* Collapsible Trigger */}
                  <CollapsibleTrigger
                    className={`${
                      isActive === item.name ? "bg-gray-300" : "bg-gray-50"
                    } text-gray-700 text-lg font-ubuntu px-12 py-1 w-full flex justify-between items-center`}
                    onClick={() => handleItemClick(item.name)}
                  >
                    {item.name}
                  </CollapsibleTrigger>

                  {/* Collapsible Content */}
                  <CollapsibleContent>
                    {item.sub?.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`/${subItem.link}`}
                        className={`${
                          isActive === subItem.subname
                            ? "bg-gray-300 text-gray-900"
                            : "bg-gray-50 text-gray-500"
                        } text-sm font-ubuntu py-1 px-4 w-full flex justify-between items-center`}
                        onClick={() => handleItemClick(subItem.subname)}
                      >
                        {subItem.subname}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )}
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
