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
    const [accountInfo, setAccountInfo] = useState({
        avatar: "",
        fullname: "",
        email: "",
        userName: "",
        password: "",
        zipCode: "",
        cityName: "",
        companyName: "",
        companyLocation: ""
    });

    const getAccountValue = (name) => {
        return accountInfo[name];
    }

    const setAccountValue = (name, value) => {
        setAccountInfo(oldVal => ({
            ...oldVal,
            [name]: value,
        }))
    }

    const updateData = async () => {
        setLoading(true);
        setAccountInfo({
            avatar: faker.image.avatar(),
            fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: `${faker.internet.email()}`,
            userName: `${faker.internet.userName()}`,
            password: `${faker.internet.password()}`,
            zipCode: `${faker.address.zipCode()}`,
            cityName: `${faker.address.cityName()}`,
            companyName: `${faker.company.companyName()}`,
            companySuffix: `${faker.company.companySuffix()}`,
            companyLocation: `${faker.address.cityName()}`,
        })
        setLoading(false);
    }

    useEffect(async () => {
        let myip = await publicIp.v4();
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
                updateData,
                getAccountValue,
                setAccountValue
            }}
        >
        {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider;