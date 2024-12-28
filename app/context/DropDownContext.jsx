'use client'
import { createContext, useState, useContext, useRef, useEffect } from "react";

export const DropDownContext = createContext();

export const DropDownContextProvider = ({ children }) => {

    // -------------------- Profile Drop Down: start (/app/components/navbar/Header.jsx) --------------------
    const [isProfile, setIsProfile] = useState(false);
    const handleProfileDropDown = () => {
        setIsProfile(prevProfile => !prevProfile);
    }
    // -------------------- Profile Drop Down: end --------------------

    // -------------------- Close Dropdowns: start --------------------
    const isCloseDropdowns = useRef(false);
    useEffect(() => {
        const handleClickOutside = event => {
            if (isCloseDropdowns.current && !isCloseDropdowns.current.contains(event.target)) {
                setIsProfile(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);
    // -------------------- Close Dropdowns: end --------------------

    return <DropDownContext.Provider
        value={{
            // ----------------------------------------
            isProfile, handleProfileDropDown,
            // ----------------------------------------
            isCloseDropdowns
        }}
    >
        { children }
    </DropDownContext.Provider>
}

export const useDropDownContext = () => {
    return useContext(DropDownContext);
}