import React, { useContext } from 'react'
import ServerSelector from '../components/Select/ServerSelector';

import { AccountContext } from "../context/AccountContext";

const Topbar = () => {
    const { apiServer, setApiServer } = useContext(AccountContext);
    return (
        <>
            <div className="flex justify-between px-2">
                <h1 className="text-4xl font-raisin">Fake Name Generator</h1>
                <div className="flex items-center">
                    <p className="text-sm mr-2">API Server</p>
                    <ServerSelector 
                        value={apiServer}
                        changeHandler={setApiServer}
                    />
                </div>
            </div>
            <hr className="my-1"/>
        </>
    )
}

export default Topbar;