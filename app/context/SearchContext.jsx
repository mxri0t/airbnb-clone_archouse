'use client'
import { createContext, useState, useContext, useRef, useEffect } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {

    // -------------------- Profile Drop Down: start (/app/components/navbar/Header.jsx) - (Stay && Experince buttons) --------------------
    const [isSearchType, setIsSearchType] = useState('Stay');
    const handleSearchType = (type) => {
        setIsSearchType(type);
    }
    // -------------------- Profile Drop Down: end --------------------

    return <SearchContext.Provider
        value={{
            // ----------------------------------------
            isSearchType, handleSearchType
            // ----------------------------------------
        }}
    >
        { children }
    </SearchContext.Provider>
}

export const useSearchContext = () => {
    return useContext(SearchContext);
}