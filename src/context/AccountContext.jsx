import React, { createContext, useState, useEffect } from 'react';
import publicIp  from 'public-ip';
// import geoIp from 'geoip-country';

import faker from 'faker';

export const AccountContext = createContext({})

const AccountContextProvider = ({children}) => {
    const [apiServer, setApiServer] = useState("");
    const [country, setCountry] = useState("US");
    const [gender, setGender] = useState("male");

    const [loading, setLoading] = useState(true);
    const [fullname, setFullname] = useState("");
    const [avatar, setAvatar] = useState("");

    const updateData = async () => {
        setAvatar(faker.image.avatar());
        setFullname(`${faker.name.firstName()} ${faker.name.lastName}`);
    }

    useEffect(async () => {
        let myip = await publicIp.v4();
        console.log(myip)
        // let { country } = geoIp.lookup(myip);
        // setCountry(country);
        updateData();
    }, [])
    return (
        <AccountContext.Provider
            value={{
                loading,
                setLoading,
                apiServer,
                setApiServer,
                country,
                setCountry,
                gender,
                setGender,
                updateData
            }}
        >
        {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider;