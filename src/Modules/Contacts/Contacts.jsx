import { ContactsEmail } from "./components/ContactsEmail"
import { ExportPhone } from "./components/ExportPhone"
import { Maps } from "./components/Maps"
import { Phone } from "./components/Phone"
import { Reqvesit } from "./components/Reqvesit"

export const Contacts = () => {
    return(
        <>
            <div className="container">
                <Reqvesit/>
                <Phone/>
                <ContactsEmail/>
                <ExportPhone/>
                <Maps/>
            </div>
        </>
    )
}