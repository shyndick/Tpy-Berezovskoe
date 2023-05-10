import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export const Navigate = () => {

    return (
            <div className="header_nav">
                <NavLink to='/' className="header_nav_link">Главная</NavLink>
                <div class="dropdown header_nav_link" >
                    <NavLink class="dropbtn header_nav_link " to='/services'>Услуги <FontAwesomeIcon icon={faAngleDown} /></NavLink>
                    <div class="dropdown-content">
                        <NavLink to='/products'>Продукция</NavLink>
                        <NavLink to='/сargo-transportation'>Грузоперевозки</NavLink>
                        <NavLink to='/products-export'>Продукция на экспорт</NavLink>
                        <NavLink to='/cafe'>Кафе "Лесное"</NavLink>
                    </div>
                </div>
                <div class="dropdown header_nav_link" >
                    <NavLink class="dropbtn header_nav_link" to='/about-company'>О предприятии <FontAwesomeIcon icon={faAngleDown} /></NavLink>
                    <div class="dropdown-content2">
                        <NavLink to='/about-company'>История о предприятии</NavLink>
                        <NavLink to='/photo'>Фотогалерея</NavLink>
                        <NavLink to='/quality-control'>Контроль качества</NavLink>
                        <NavLink to='/security'>Охрана труда </NavLink>
                        <NavLink to='/job-openings'>Вакансии</NavLink>
                    </div>
                </div>
                <NavLink to='/contacts' className="header_nav_link">Контакты</NavLink>
            </div>
    )
}