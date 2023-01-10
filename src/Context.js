import React, { useState } from 'react'

const Context = React.createContext()

function ContextProvider ({ children }) {
    
    const [menuLinks, setMenuLinks] = useState('/home')

    return (
        <Context.Provider value={{menuLinks, setMenuLinks}}>
            { children }
        </Context.Provider>
    )
}

export { ContextProvider, Context }