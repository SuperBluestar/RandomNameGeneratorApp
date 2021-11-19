import React, { useState, useContext } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AvatarCover from '../components/Avatar/AvatarCover';

import { AccountContext } from '../context/AccountContext';

const Home = () => {
    const [startDate, setStartDate] = useState(new Date("1974-04-30"));
    const { apiServer, country, gender } = useContext(AccountContext);
    return (
        <div className="flex">
            <div className="w-44 h-full">
                <AvatarCover></AvatarCover>
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
                <h2 className="text-2xl">John Doe</h2>
                { apiServer } { country } { gender }
            </div>
        </div>
    )
}

export default Home;