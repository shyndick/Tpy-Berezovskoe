import {Carusel} from './Carousel'

export const MainNews = () => {
    return(
        <div className='main_news'>
            <div className="news_title ">Наши новости</div>
            <div className="news_items">
                <Carusel/>
            </div>
        </div>
    )
}