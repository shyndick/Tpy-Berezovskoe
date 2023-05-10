export const Maps = () => {
    return(
        <div className="contacts_maps">
            <div className="contacts_title">
                    Схема проезда
                </div>
            <div className="line"></div>
            <div className="contacts_maps_line">
                <div className="first_map">
                    <div className="contacts_map_subtitle">
                        Завод ТПУ "Березовское"
                    </div>
                    <div className="contacts_map_img">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d8281.027407199048!2d25.213611!3d52.659503!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDM5JzM0LjIiTiAyNcKwMTInNTYuOSJF!5e1!3m2!1sru!2sby!4v1683269204547!5m2!1sru!2sby" width="570" height="477" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="second_map">
                    <div className="contacts_map_subtitle">
                        Административное здание ТПУ "Березовское"
                    </div>
                    <div className="contacts_map_img">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4140.988629829806!2d25.23878!3d52.654489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720ade0cea3d447%3A0x7accbb71d27fda5d!2z0KLQn9CjICLQkdC10YDQtdC30L7QstGB0LrQvtC1Ig!5e1!3m2!1sru!2sby!4v1683269511623!5m2!1sru!2sby" width="570" height="477" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}