import React, { useEffect, useState } from 'react';
import { CiLight, CiDark } from "react-icons/ci";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='relative'>
            <CiLight
                onClick={toggleTheme}
                className={`drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200
                    absolute right-0 z-10 text-3xl cursor-pointer ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}
                    rounded-full p-1 font-bold bg-gradient-to-r from-primary to-secondary text-white`}
            />
            <CiDark 
                onClick={toggleTheme}
                className={`drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200
                    absolute right-0 z-10 text-3xl cursor-pointer ${theme === 'light' ? 'opacity-0' : 'opacity-100'}
                    rounded-full p-1 font-bold bg-gradient-to-r from-primary to-secondary text-white`}
            />
        </div>
    );
};

export default DarkMode;
