import gaz from '../../../image/gaz.svg'
import les from '../../../image/les.svg'
import frost from '../../../image/frost.svg'
import pochta from '../../../image/pochta.svg'

export const Clients = () => {
    return(
        <div className="clients">
            <div className="container">
                <h2 className="client_title">НАШИ КЛИЕНТЫ</h2>
                <ul className="clients_items">
                    <li className="clients_item"><img src={gaz} alt="gaz" /></li>
                    <li className="clients_item"><img src={les} alt="les" /></li>
                    <li className="clients_item"><img src={frost} alt="frost" /></li>
                    <li className="clients_item"><img src={pochta} alt="pochta" /></li>
                </ul>
            </div>
            
        </div>
    )
}