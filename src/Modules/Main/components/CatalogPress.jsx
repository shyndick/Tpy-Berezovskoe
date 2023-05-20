import { NavLink } from "react-router-dom"

export const CatalogPress = () => {
    return(
        <div className="press">
            <div className="container">
                <div className="press_wrapper">
                    <div className="press_name">
                        <div className="name_title">
                            ХОТИТЕ ПРИОБРЕСТИ?
                        </div>
                        <div className="name_subtitle">
                            ПЕРЕХОДИТЕ В КАТАЛОГ И ОСТАВЛЯЙТЕ ЗАЯВКУ
                        </div>
                    </div>
                    <button className="press_btn">
                        <NavLink to='/products'>Смотреть каталог</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}