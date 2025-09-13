import { useState, useRef, useEffect } from "react";
import Select, { components } from "react-select";
import Icon from "../Icon/Icon";

const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "1.25",
    textAlign: "center",
    color: "#101828",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "1.25",
    color: state.isFocused ? "#101828" : "#8d929a",
    backgroundColor: "transparent",
    cursor: "pointer",
  }),
  control: (provided) => ({
    ...provided,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "1.25",
    color: "#101828",
    border: "none",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": { border: "none", backgroundColor: "#f7f7f7" },
  }),
};

const DropdownIndicator = (props) => {
  const isOpen = props.selectProps.menuIsOpen;

  const styleObj = isOpen ? "isOpen" : "isClose";

  return (
    <components.DropdownIndicator {...props}>
      <Icon width={16} height={16} name="arrow-down" styleCss={styleObj} />
    </components.DropdownIndicator>
  );
};

const ValueContainer = ({ ...props }) => {
  const { getValue, selectProps } = props;
  const hoveredOption = selectProps.hoveredOption;

  const selected = getValue();
  let display;

  if (hoveredOption) {
    display = hoveredOption.label;
  } else if (selected.length > 0) {
    display = selected[0]?.label;
  } else {
    display = props.selectProps.placeholder;
  }

  return (
    <components.ValueContainer {...props}>{display}</components.ValueContainer>
  );
};

export default function Selector({
  options,
  value,
  placeHolderValue,
  onChange,
}) {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Option = (props) => (
    <components.Option
      {...props}
      innerProps={{
        ...props.innerProps,
        onMouseEnter: () => setHoveredOption(props.data),
        onMouseLeave: () => setHoveredOption(null),
      }}
    >
      {props.children}
    </components.Option>
  );

  return (
    <div ref={selectRef}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        classNamePrefix="react-select"
        placeholder={placeHolderValue}
        menuPlacement="auto"
        maxMenuHeight={200}
        menuIsOpen={menuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
          Option,
          ValueContainer,
        }}
        styles={customStyles}
        hoveredOption={hoveredOption}
        isSearchable={false}
        selectProps={{ menuIsOpen, hoveredOption }}
      />
    </div>
  );
}
