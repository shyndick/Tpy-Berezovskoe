import { JobPress } from "../Main/components/JobPress"
import { Image } from 'antd';
import photo1 from '../../image/photo1.jpg'
import photo2 from '../../image/photo2.jpg'
import photo3 from '../../image/photo3.jpg'
import photo4 from '../../image/photo4.jpg'
import photo5 from '../../image/photo5.jpg'
import photo6 from '../../image/photo6.jpg'
import photo7 from '../../image/photo7.jpg'
import photo8 from '../../image/photo8.jpg'
import photo9 from '../../image/photo9.jpg'


export const Photo = () => {
    return (
        <>
            <div className="container">
                <div className="cafe contacts_title">Фотогалерея</div>
                <div className="line"></div>
                <div className="photo_items">
                    <div className="photo_item1">
                        <div class="div"><Image src={photo1} alt="photo1" /> </div>
                        <div class="div"><Image src={photo3} alt="photo8" /> </div>
                        <div class="div"><Image src={photo2} alt="photo2" /> </div>
                    </div>
                    <div className="photo_item2">
                        <div class="div"><Image src={photo4} alt="photo9" /> </div>
                        <div class="div"><Image src={photo7} alt="photo3" /> </div>
                    </div>
                    <div className="photo_item_3">
                        <div class="div"><Image src={photo5} alt="photo4" /> </div>
                        <div class="div"><Image src={photo8} alt="photo7" /> </div>
                    </div>
                    <div className="photo_item_4">
                        <div class="div"><Image src={photo6} alt="photo7" /></div>
                        <div class="div"><Image src={photo9} alt="photo7" /></div>
                    </div>
                    
                    
                </div>
            </div>
            <JobPress/>
        </>
    )
}