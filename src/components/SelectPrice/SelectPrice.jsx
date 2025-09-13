import { useState } from "react";
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
    "&:hover": { border: "none", backgroundColor: "#f7f7f7" },
  }),
};

// Іконка
const DropdownIndicator = (props) => {
  const styleObj = {
    transform: props.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  };
  return (
    <components.DropdownIndicator {...props}>
      <Icon width={16} height={16} name="arrow-down" styleCss={styleObj} />
    </components.DropdownIndicator>
  );
};

// Кастомний ValueContainer (hover/вибір з "To $")
const ValueContainer = ({ children, ...props }) => {
  const { getValue, selectProps, hasValue } = props;
  const hoveredOption = selectProps.hoveredOption;

  let display;
  if (hoveredOption) {
    display = `To $${hoveredOption.label}`; // при hover
  } else if (hasValue) {
    display = `To $${getValue()[0]?.label}`; // при виборі
  } else {
    display = props.selectProps.placeholder; // placeholder
  }

  return (
    <components.ValueContainer {...props}>{display}</components.ValueContainer>
  );
};

export default function SelectPrice({
  options,
  value,
  placeHolderValue,
  onChange,
}) {
  const [hoveredOption, setHoveredOption] = useState(null);

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

  // ⚡️ Redux має отримати тільки число
  const handleChange = (selected) => {
    onChange(
      selected ? { value: selected.value, label: selected.label } : null
    );
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      classNamePrefix="react-select"
      placeholder={placeHolderValue}
      menuPlacement="auto"
      maxMenuHeight={200}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
        Option,
        ValueContainer,
      }}
      styles={customStyles}
      hoveredOption={hoveredOption}
      isSearchable={false}
    />
  );
}
