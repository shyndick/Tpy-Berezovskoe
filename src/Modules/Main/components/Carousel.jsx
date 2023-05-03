import Carousel from "react-simply-carousel";
import React, { useState} from "react"; 
import konstitucia from '../../../image/15mart.svg'
import mart8 from '../../../image/8mart.svg'
import mart31 from '../../../image/31mart.svg'
import apr15 from '../../../image/15apr.svg'
import mart23 from '../../../image/23mart.svg'

export const Carusel = () =>{
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        containerProps={{
          style: {
            width: "70%",
            justifyContent: "space-between",
            userSelect: "none"
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 30,
            height: 30,
            minWidth: 30,
            alignSelf: "center",
            fontSize: "60px",
            backgroundColor: "#fff",
            border: "none",
            color: "#FE9A30"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 15,
            height: 30,
            minWidth: 15,
            alignSelf: "center",
            fontSize: "60px",
            backgroundColor: "#fff",
            border: "none",
            color: "#FE9A30"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              margin: '5px'
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black",
              marginTop: '5px'
            }
          }
        }}
        itemsToShow={2}
        speed={400}
      >
      <div className="item"
            // style={{
            //   width: 570,
            //   height: 740,
            //   border: "30px solid white",
            //   textAlign: "center",
            //   padding: "18 62 44 62",
            //   display: "flex",
            // flexDirection: "column", 
            // alignItems: "center",
            // }}
          >
            <div className="news_date">15 марта 2023 г.</div>
            <img className="news_img" src={konstitucia} alt={konstitucia} />
            <div className="news_item_title">День Конституции</div>
            <div className="news_item_subtitle">Ежегодно 15 марта отмечается День Конституции Республики Беларусь. Конституция является Основным Законом нашего государства, на ее основе формируется вся система законодательства, в ней определяется компетенция государственных . . .</div>
            <div className="news_btn">
              <button>Читать далее</button>
            </div>
          </div>

          <div className="item">
            <div className="news_date">8 марта 2023 г.</div>
            <img className="news_img" src={mart8} alt={mart8} />
            <div className="news_item_title">С Праздником 8 Марта!</div>
            <div className="news_item_subtitle">Дорогие, милые, прекрасные, обворожительные, шикарные, красивые мои коллеги! Поздравляю вас с 8 Марта! Желаю всем весеннего настроения! Будьте всегда такими же отзывчивыми и добрыми, с милыми улыбками и горячими . . . </div>
            <div className="news_btn">
              <button>Читать далее</button>
            </div>
          </div>

          <div className="item">
            <div className="news_date">23 марта 2023 г.</div>
            <img className="news_img" src={mart23} alt={mart23} />
            <div className="news_item_title">Отчётная конференция</div>
            <div className="news_item_subtitle">22 марта состоялась отчетная конференция ППО УП "Брестоблгаз" по итогамработы за 2022 год.Участники конференции от ТПУ "Березовское" были Голуб В.В., Кот Ю.В., Молош В. М. . . .</div>
            <div className="news_btn">
              <button>Читать далее</button>
            </div>
          </div>

          <div className="item">
            <div className="news_date">31 марта 2023 г.</div>
            <img className="news_img" src={mart31} alt={mart31} />
            <div className="news_item_title">Единый день безопасности</div>
            <div className="news_item_subtitle">1 марта - Единый день безопасности дорожного движения. В рамках акции сотрудники отделения ГАИ Ивацевичского РОВД посетил филиал ТПУ Березовское. Сотрудники напомнили о причинах ипоследствиях автоаварий, . . . </div>
            <div className="news_btn">
              <button>Читать далее</button>
            </div>
          </div>

          <div className="item">
            <div className="news_date">18 апреля 2023 г.</div>
            <img className="news_img" src={apr15} alt={apr15} />
            <div className="news_item_title">Экскурсия для школьников</div>
            <div className="news_item_subtitle">18 апреля заместитель генерального директора УП "Брестоблгаз" Г.Н.Демидович и директор ТПУ "Березовское" В. В. Голуб посетили Зеленоборскую СШ. После этого была проведена экскурсия по территории филиала, где ученики . . </div>
            <div className="news_btn">
              <button>Читать далее</button>
            </div>
            
          </div>
      </Carousel>
    </>
  )

}