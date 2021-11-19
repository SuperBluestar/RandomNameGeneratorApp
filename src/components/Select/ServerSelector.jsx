import React, { useMemo, useState } from 'react';
import Select from '.';

const ServerList = () => ([
    { label: "Offline", value: "localhost" },
    { label: "Server NameFaker", value: "https://api.namefake.com/" },
    { label: "Server 3", value: "api-v3" },
])

const ServerSelector = ({
    value = "", 
    changeHandler = () => {}
}) => {
    const options = useMemo(ServerList, [])
  
    const temp = options.find((ext) => value === "" || ext.value === value);
  
    const [ currentExtension, setCurrentExtension] = useState(temp);
    return (
        <Select 
            options={options}
            selectedOption={currentExtension}
            handelChange={val => {
                setCurrentExtension(val);
                changeHandler(val.value)
            }} 
        />
    )
}

export default ServerSelector;