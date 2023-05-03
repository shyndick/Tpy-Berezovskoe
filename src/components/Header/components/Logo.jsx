import logo from "../../../image/logo.svg"
import { NavLink } from "react-router-dom"

export const Logo = () => {
    return (
        <div className="header_logo">
            <NavLink><img className="logo_img" src={logo} alt="tpy_logo" /></NavLink>
        </div>
    )
}