 
import { useState } from "react";
import "./selectdrop.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const SelectDrop = (props) => {
  const [isopen, setIsopen] = useState(false);
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState(props.placeholder);

  const closeSelect = (e, index) => {
    setSelectIndex(index);
    setIsopen(!isopen);
    setSelectedItems(e.target.textContent);
  };
  return (
    <ClickAwayListener onClickAway={() => setIsopen(false)}>
      <div className="selectDrop cursor position-relative ">
      {props.icon}
        <span className="openSelect" onClick={() => setIsopen(!isopen)}>
          {selectedItems}
          <KeyboardArrowDownIcon className="arrowIcon" />
        </span>
        {isopen === true && (
          <div className="selectDropdown">
            <div className="searchField">
              <input type="text" placeholder="Search..." />
            </div>
            <ul className="searchResults">
              {props.data.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => closeSelect(e, index)}
                    className={`${selectIndex === index ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SelectDrop;
