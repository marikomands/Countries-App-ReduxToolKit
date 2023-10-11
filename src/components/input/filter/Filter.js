import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { reset, setRegion } from "../../../features/countries/CountriesSlice";
import "./Filter.css";

const Filter = () => {
  const regions = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "oceania", label: "Oceania" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedOption) {
      dispatch(setRegion(selectedOption));
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, selectedOption]);

  // const [filter, setFilter] = useState("");
  // const [displayDropdown, setDisplayDropdown] = useState(false);

  // const handleDropdownChange = () => {
  //   setDisplayDropdown(!displayDropdown);
  // };

  return (
    <div className="select-container">
      <Select
        className="select"
        defaultValue={selectedOption}
        onChange={(option) => {
          setSelectedOption(option.value);
        }}
        options={regions}
        placeholder="Select by Region"
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused
              ? "grey !important"
              : "grey !important",
            boxShadow: state.isFocused ? "none !important" : null,
            // height: "100%",
          }),
        }}
      />
    </div>

    // <section>
    //   <div className="filter-container" onClick={handleDropdownChange}>
    //     { <input
    //       className="filter-input"
    //       type="text"
    //       value={filter}
    //       placeholder="Search by Region"
    //     />
    //     <i className="fa-solid fa-angle-down"></i> }
    //     {displayDropdown ? (
    //       <div className="drop-down">
    //         {regions.map((region) => {
    //           return (
    //             <div
    //               onClick={() => {
    //                 setFilter(region);
    //                 handleDropdownChange();
    //               }}
    //             >
    //               {region}
    //             </div>
    //           );
    //         })}
    //       </div>
    //     ) : null}
    //   </div>
    // </section>
  );
};

export default Filter;
