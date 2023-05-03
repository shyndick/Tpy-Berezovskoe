import { Navigate } from "../Header/components/Navigate"
import { Logo } from "../Header/components/Logo"
import { FooterContact } from "./components/FooterContact"

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_logo">
                        <Logo/>
                    </div>
                    <div className="footer_info">
                        <FooterContact/>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer_nav">
                    <Navigate/>
                    <p>© 2023, ТПУ "Березовское"</p>
                </div>
            </div>
        </footer>
    )
}