import { JobPress } from "../Main/components/JobPress"
import companyTitle from '../../image/companyTitle.jpg'
import { CompanySubtitle } from "./companents/CompanySubTitle"

export const AboutCompany = () => {
    return (
        <>
            <div className="container">
                <div className="about_company_title contacts_title">О предприятии</div>
                <div className="line"></div>
                <div className="about_company_title_img">
                    <img className="title_img" src={companyTitle} alt="companytitle" />

                </div>
                <CompanySubtitle/>
            </div>
            <JobPress/>
        </>
    )
}