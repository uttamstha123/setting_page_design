import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faChevronUp,
  faTrash,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import fontawesome from "@fortawesome/fontawesome";
fontawesome.library.add(faSort, faChevronUp, faTrash, faGear);

const DataTable = () => {
  return (
    <table cellPadding="10" className="table-auto overflow-x-scroll w-full">
      <thead className="shadow-md rounded">
        <tr className="text-left ">
          <th className="font-medium">
            Request Date{" "}
            <span>
              <FontAwesomeIcon icon="fa-solid fa-chevron-up" size="xs" />
            </span>
          </th>
          <th className="font-medium">
            Requested by{" "}
            <span>
              <FontAwesomeIcon icon="fa-solid fa-sort" size="xs" />
            </span>
          </th>
          <th className="font-medium">
            Status{" "}
            <span>
              <FontAwesomeIcon icon="fa-solid fa-sort" size="xs" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody className="overflow-x-auto"></tbody>
    </table>
  );
};

export default DataTable;
