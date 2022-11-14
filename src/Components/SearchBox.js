import React from "react";
import "antd/dist/antd.css";
import { Dropdown, Input } from "antd";
import SuggestionBox from "./suggestionBox";

const items = [
  {
    key: "1",
    label: <SuggestionBox />,
  },
];

const SearchBox = () => {
  return (
    <>
      <div className="pt-5">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Input placeholder="Search items..." className="w-75" />
        </Dropdown>
      </div>
    </>
  );
};

export default SearchBox;
