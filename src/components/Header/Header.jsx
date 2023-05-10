import {PhoneEmail} from "./components/PhoneEmail"
import { Navigate } from "./components/Navigate"
import { Logo } from "./components/Logo"
import { Title } from "./components/Title"
import { useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === '/' && <header className="header_bgr">
                                            <div className="header_wrapper">
                                                <Logo/>
                                                <Navigate/>
                                                <div className="header_contact">
                                                    <PhoneEmail/>
                                                </div>
                                            </div>
                                            <Title/>
                                        </header>}
            {location.pathname !== '/' && <header>
                                            <div className="header_wrapper">
                                                <Logo/>
                                                <Navigate/>
                                                <div className="header_contact">
                                                    <PhoneEmail/>
                                                </div>
                                            </div>
                                        </header>}
        </>
        
    )
}