import { PhoneEmail } from "../../Header/components/PhoneEmail"
import location from '../../../image/Location.svg'
import instagram from '../../../image/Instagram.svg'
import facebook from '../../../image/Facebook.svg'
import google from '../../../image/Google.svg'

export const FooterContact = () => {
    return (
        <>
            <p className="footer_contact_address" href="/">
                <img className="header_contact_img" src={location} alt="tpy_location"/>
                ул. Центральная 5, пос. Зелёный Бор, Ивацевичский р-н, Брестская область
                </p>
            <PhoneEmail/>
            <p className="social_network">
                Social Media:
                <img className="header_contact_img" src={instagram} alt="tpy_instagram"/>
                <img className="header_contact_img" src={facebook} alt="tpy_facebook"/>
                <img className="header_contact_img" src={google} alt="tpy_google"/>
            </p>
        </>
    )
}