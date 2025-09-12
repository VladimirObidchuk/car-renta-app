import Select, { components } from "react-select";
import style from "./Select.module.css";

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
    color: "#8d929a",
    backgroundColor: state.isFocused ? "#f0f0f0" : "white", // hover ефект
  }),
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
      borderColor: "transparent",
      backgroundColor: "#f7f7f7",
    },
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="16"
        height="16"
        fill="#101828"
        color="#101828"
        display="flex"
        style={{
          transform: props.selectProps.menuIsOpen
            ? "rotate(180deg)"
            : "rotate(0deg)",
          transition: "transform 0.2s ease",
        }}
      >
        <use xlinkHref="../../shared/sprite.svg#icon-chevron-down"></use>
      </svg>
    </components.DropdownIndicator>
  );
};

export default function Selector({
  options,
  value,
  placeHolderValue,
  onChange,
}) {
  return (
    <Select
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={onChange}
      classNamePrefix="react-select"
      placeholder={placeHolderValue}
      menuPlacement="auto"
      maxMenuHeight={200}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      className={style.brandSelect}
      styles={customStyles}
      isSearchable={false}
    />
  );
}
