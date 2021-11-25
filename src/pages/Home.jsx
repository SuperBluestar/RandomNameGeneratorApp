import React, { useState, useContext } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AvatarCover from '../components/Avatar/AvatarCover';
import Spinner2 from '../components/Spinner/Spinner2';

import { AccountContext } from '../context/AccountContext';

const Home = () => {
    const [startDate, setStartDate] = useState(new Date("1974-04-30"));
    const { 
        apiServer, 
        country, 
        gender, 
        loading, 
        getAccountValue
    } = useContext(AccountContext);
    return (
        <div className="flex relative" style={{
            width: "100%",
            height: "calc(100vh - 51px - 0.5rem)",
        }}>
            { loading ? <Spinner2 /> :
            (<><div className="w-44 h-full">
                <AvatarCover avatarUrl={getAccountValue("avatar")}></AvatarCover>
                <p className="font-medium">Birthday</p>
                <DatePicker className="ml-4" selected={startDate} onChange={(date) => setStartDate(date)} />
                <p className="font-medium">Age</p>
                <p className="ml-4">47 years old</p>
                <p className="font-medium">Jodiac</p>
                <p className="ml-4">Taurus</p>
                <p className="font-medium">Phone</p>
                <p className="ml-4">597.752.7301x905</p>
                <p className="ml-4">613.434.6828</p>
            </div>
            <div className="h-full ml-3">
                <h2 className="text-2xl">{getAccountValue("fullname")}</h2>
                <h2 className="text-xl">{getAccountValue("zipCode")} {getAccountValue("cityName")}</h2>
                <h2>Email: </h2><h2>{getAccountValue("email")}</h2>
                <div className="flex flex-between">
                    <h2>Username: </h2><h2>{getAccountValue("userName")}</h2>
                    <h2>Password: </h2><h2>{getAccountValue("password")}</h2>
                </div>
                <div className="flex flex-between">
                    <h2>companyName</h2><h2>{getAccountValue("companyName")} | {getAccountValue("companyLocation")}</h2>
                </div>
            </div></>) }
        </div>
    )
}

export default Home;