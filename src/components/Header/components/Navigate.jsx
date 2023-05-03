import { NavLink } from "react-router-dom"

export const Navigate = () => {
    return (
            <div className="header_nav">
                <NavLink className="header_nav_link">Главная</NavLink>
                <NavLink className="header_nav_link">Услуги</NavLink>
                <NavLink className="header_nav_link">О предприятии</NavLink>
                <NavLink className="header_nav_link">Контакты</NavLink>
            </div>
    )
}