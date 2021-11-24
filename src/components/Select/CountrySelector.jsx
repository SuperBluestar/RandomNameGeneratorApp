import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import Select from '.';

function CountrySelector({
  value = "", 
  changeHandler = () => {}
}) {
  const options = useMemo(() => countryList().getData(), [])

  const temp = options.find((ext) => value === "" || ext.value === value);

  const [ currentExtension, setCurrentExtension] = useState(temp);
  return <>
    <Select 
      options={options}
      selectedOption={currentExtension}
      handelChange={val => {
        setCurrentExtension(val);
        changeHandler(val.value)
      }} 
    />
  </>
}

export default CountrySelector