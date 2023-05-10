import { JobPress } from "../Main/components/JobPress"

export const Services = () => {
    // if(location.pathname !== '/')

    return(
        <>
            <div className="container">
                <div className="security_title contacts_title">Услуги</div>
            </div>
            <div className="line"></div>
            <JobPress/>
        </>
    )
}