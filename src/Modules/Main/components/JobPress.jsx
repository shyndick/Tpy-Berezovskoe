import { NavLink } from "react-router-dom"

export const JobPress = () => {
    return(
    <div className="press">
        <div className="container">
            <div className="press_wrapper">
                <div className="press_name">
                    <div className="name_title">
                        ХОТИТЕ С НАМИ РАБОТАТЬ?
                    </div>
                    <div className="name_subtitle">
                        ОСТАВЬТЕ ЗАЯВКУ И МЫ С ВАМИ СВЯЖЕМСЯ! 
                    </div>
                </div>
                <button className="press_btn">
                    <NavLink to='/feedback'>Оставить заявку</NavLink>
                </button>
            </div>
        </div>
    </div>
    )
}