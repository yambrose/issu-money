import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router";
import {AppContextProvider} from './context/AppContext.tsx';
import './index.css';
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";

createRoot(document.getElementById('root')!).render(
    <AppContextProvider>
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    </AppContextProvider>
)
