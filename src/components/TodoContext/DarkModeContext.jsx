import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

// 인자로 자식 노드들을 받는다.
export function DarkMdoeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMdoe(!darkMode);
    }

    useEffect(() => {
        const isDark = 
        localStorage.theme === 'dark' || (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        updateDarkMdoe(isDark);
    },[])

    return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}

function updateDarkMdoe(darkMode){
    // document 즉, 전체 문서에 클래스를 적용해버리네
    if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

export const useDarkMdoe = () => useContext(DarkModeContext);

