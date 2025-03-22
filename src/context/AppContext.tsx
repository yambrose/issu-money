import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type ContextType = {
    isDarkMode: boolean;
    handleThemeChange: (value: boolean) => void;
}

const AppContext = createContext<ContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMouseVisible, setIsMouseVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    /* -- Check if Mobile -- */
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /* -- Theme Change -- */
    const handleThemeChange = () => {
        setIsDarkMode(prevTheme => !prevTheme);
    };

    /* -- Custom Cursor -- */
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isMobile) {
            setIsMouseVisible(false);
            return;
        };
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsMouseVisible(true);
    }, [isMobile]);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        if (
            e.clientX <= 0 ||
            e.clientX >= window.innerWidth ||
            e.clientY <= 0 ||
            e.clientY >= window.innerHeight
        ) {
            setIsMouseVisible(false);
        }
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIsMouseVisible(false);
            return;
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, [handleMouseMove]);

    useEffect(() => {
        if (isMobile) {
            setIsMouseVisible(false);
            return;
        };

        const hoverableElements = document.querySelectorAll('button, .hover-button');

        const mouseEnter = () => setIsHovering(true);
        const mouseLeave = () => setIsHovering(false);

        hoverableElements.forEach((element) => {
            element.addEventListener('mouseenter', mouseEnter);
            element.addEventListener('mouseleave', mouseLeave);
        });

        return () => {
            hoverableElements.forEach((element) => {
                element.removeEventListener('mouseenter', mouseEnter);
                element.removeEventListener('mouseleave', mouseLeave);
            });
        };
    }, []);



    return (
        <AppContext.Provider value={{ isDarkMode, handleThemeChange }}>
            {children}
            {isMouseVisible && (
                <div className={`custom-pointer ${isHovering && 'is-hovering'}`}
                    style={{
                        top: `${mousePosition.y}px`,
                        left: `${mousePosition.x}px`,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            )}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);