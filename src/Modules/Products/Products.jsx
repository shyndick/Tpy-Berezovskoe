import { JobPress } from "../Main/components/JobPress"
import {Bt} from './components/Bt'
import { Drova } from "./components/Drova"
import { Mushrooms } from "./components/Mushrooms"
import { Syshenka } from "./components/Syshenka"
import { Torf } from "./components/Torf"


export const Products = () => {
    return (
        <>
            <div className="container">
                <div className="cafe contacts_title">Продукция</div>
                <div className="line"></div>
                <div className="products_subtitle">
                    <Bt/>
                    <div className="line"></div>
                    <Torf/>
                    <div className="line"></div>
                    <Syshenka/>
                    <div className="line"></div>
                    <Drova/>
                    <div className="line"></div>
                    <Mushrooms/>
                    <div className="line"></div>
                </div>
            </div>
            <JobPress/>
        </>
    )
}