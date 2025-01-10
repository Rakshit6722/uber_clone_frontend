import { createContext, useState } from "react";

export const captainDataContext = createContext()

const CaptainContextProvider = ({children}) => {
    const [captain,setCaptain] = useState({})

    const value = {captain,setCaptain}

    return (
        <captainDataContext.Provider value={value}>
            {children}
        </captainDataContext.Provider>
    )
}

export default CaptainContextProvider
