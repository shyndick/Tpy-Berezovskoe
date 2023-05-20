import {Forma} from './components/Forma.jsx'

export const Feedback = () => {
    return (
        <div className="container">
            <div className="contacts_title">Обратная связь</div>
            <div className="line"></div>
            <div className="products_subtitle_feedback">
                <p>Здесь вы можете отправить заявку на покупку нашей продукции, оставить заявку на оказание услуг, проведение мероприятия или написать нам письмо. </p>
                <p>Для того что бы ваше письмо было рассмотрено, пожалуйста заполните все поля помеченные звездочками(*)</p>
            </div>
            <Forma/>
        </div>
    )
}