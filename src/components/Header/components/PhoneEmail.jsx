import phone from "../../../image/phone.svg"
import email from '../../../image/email.svg'

export const PhoneEmail = () => {
    return (
        <>
            <a className="header_contact_phone" href="tel:+375 (1645) 47232"><img className="header_contact_img" src={phone} alt="tpy_phone"/>+375 (1645) 47232</a>
            <a className="header_contact_email" href="email:tbz@brest.gas.by"><img className="header_contact_img" src={email} alt="tpy_email"/>tbz@brest.gas.by</a>
        </>
    )
}