import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import fontawesome from "@fortawesome/fontawesome";
fontawesome.library.add(faGear);

const SettingMenu = () => {
  return (
    <div className="sm:w-1/4 pb-4 border-b border-gray-300 sm:border-0 sm:text-base text-sm">
      <ul className="font-light">
        <li className="mb-1 px-2 py-1 rounded-md hover:bg-gray-100 hover:font-normal cursor-pointer">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-gear" size="xs" />
          </span>{" "}
          Shared event types
        </li>
        <li className="mb-1 px-2 py-1 rounded-md hover:bg-gray-100 hover:font-normal cursor-pointer">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-gear" size="xs" />
          </span>{" "}
          Single sign-on
        </li>
        <li className="mb-1 px-2 py-1 rounded-md hover:bg-gray-100 hover:font-normal cursor-pointer">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-gear" size="xs" />
          </span>{" "}
          Workflows
        </li>
        <li className="font-normal bg-gray-100 py-1 px-2 rounded-md">
          <span className="me-1">
            <FontAwesomeIcon icon="fa-solid fa-trash" size="xs" />
          </span>
          Data deletion
        </li>
      </ul>
    </div>
  );
};

export default SettingMenu;
