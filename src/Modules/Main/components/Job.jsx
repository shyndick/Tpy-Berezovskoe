import clarity from '../../../image/clarity.svg'
import greenhouse from '../../../image/greenhouse.svg'
import sprout from '../../../image/sprout.png'

export const Job = () => {
    return(
        <div className="job">
            <div className="container">
                <div className="job_title">
                    ЧЕМ МЫ ЗАНИМАЕМСЯ?
                </div>
            <div className="job_subtitle_wrapper">
                <div className="job_subtitle_item">
                    <div className="job_item_image">
                        <img src={greenhouse} alt="greenhouse" />
                    </div>
                    <div className="job_item_title">
                        ДОБЫЧА ТОРФА ДЛЯ ЗАГОТОВКИ КОМПОСТОВ
                        </div>
                    <div className="job_item_subtitle">
                        Используют  в сельском хозяйстве с целью улучшения плодородия почвы
                    </div>
                </div>
                <div className="job_subtitle_item">
                    <div className="job_item_image">
                        <img src={clarity} alt="clarity" />
                    </div>
                    <div className="job_item_title">
                        ПРОИЗВОДСТВО ТОПЛИВНЫХ БРИКЕТОВ 
                    </div>
                    <div className="job_item_subtitle">
                        Топливные брикеты предназначены для бытовых нужд и промышленных котельных
                    </div>
                </div>
                <div className="job_subtitle_item">
                    <div className="job_item_image">
                        <img src={sprout} alt="sprout" />
                    </div>
                    <div className="job_item_title">
                        ПРОИЗВОДСТВО ТОРФЯНОЙ СУШЁНКИ
                    </div>
                    <div className="job_item_subtitle">
                        Сушёнку получают путем измельчения и сушки фрезерного торфа
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}