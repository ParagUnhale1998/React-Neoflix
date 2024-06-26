import React, { useEffect, useState } from 'react'
import Select from "react-select";


const netflixColors = {
    red: '#E50914',
    black: '#000000',
    white: '#FFFFFF',
    background: '#141414',
    background2: '#1C1C1C',
  };
  
  const customStyles = {
    container: (provided) => ({
      ...provided,
      margin: "10px 0",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      
    }),
    control: (provided, state) => ({
      ...provided,
      width: "300px",
      backgroundColor: netflixColors.background,
      borderColor: state.isFocused ? netflixColors.black : netflixColors.red,
      boxShadow: state.isFocused ? `0 0 0 1px ${netflixColors.red}` : "none",
      "&:hover": {
        borderColor: state.isFocused ? netflixColors.black : netflixColors.red,
      },
      padding: "5px",
      color: netflixColors.white,
      fontWeight: "bold", // Font weight bold
    cursor: "pointer", // Cursor pointer
      
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 6px",
      color: netflixColors.white,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: netflixColors.white,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: netflixColors.white,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: netflixColors.white,
      "&:hover": {
        color: netflixColors.red,
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: netflixColors.red,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: netflixColors.background2,
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      zIndex: 10,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
      backgroundColor: netflixColors.background2,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? netflixColors.red
        : state.isFocused
        ? netflixColors.background
        : netflixColors.background2,
      color: state.isSelected ? netflixColors.white : netflixColors.white,
      padding: "10px 20px",
      "&:active": {
        backgroundColor: netflixColors.red,
        color: netflixColors.white,
        cursor: "pointer",
      },
    }),
  };
  
function DropDown({options,placeholder,onChange ,mediaType}) {

  
  return (
    <Select 
    options={options} 
    styles={customStyles}
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}

export default DropDown