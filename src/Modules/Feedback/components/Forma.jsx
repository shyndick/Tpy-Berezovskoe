import { useRef } from "react"

export const Forma = () => {


    const inputName = useRef()
    const inputEmail = useRef()
    const inputText = useRef()
    const inputPhone = useRef()

    let data = []

    const handleAddForm = () => {
        onAddForm(inputName.current.value, inputEmail.current.value, inputText.current.value, inputPhone.current.value)
        inputName.current.value = '';
        inputEmail.current.value = '';
        inputText.current.value = '';
        inputPhone.current.value = '';
    }

    const onAddForm = (taskName, taskEmail, task, taskPhone) => {
        data.push({
            name: taskName, 
            id: new Date().getMilliseconds(),
            email: taskEmail,
            text: task,
            phone: taskPhone
        })
    }

    return (
        <div className="forma">
            <h2>Заполните форму</h2>
            <form>
            <ul>
                <li className="forma_item">
                    <label className="forma_item_name">Введите ФИО*</label>
                    <input type="text" ref={inputName} placeholder="Финке Юлия Руслановна" required/>
                </li>
                <li className="forma_item">
                    <label className="forma_item_name">Введите Ваш e-mail*</label>
                    <input type="email" ref={inputEmail} placeholder="2002julia1001@gmail.com" required/>
                </li>
                <li className="forma_item">
                    <label className="forma_item_name">Введите Ваш телефон*</label>
                    <input type="tel" ref={inputPhone} placeholder="+375-(44)-725-77-34" required/>
                </li>
                <li className="forma_item">
                    <label className="forma_item_name">Введите Ваш вопрос*</label>
                    <textarea  type="text" ref={inputText} placeholder="Здравствуйте! Хочу заказать у Вас ..." required/>
                </li>
                <li className="forma_item">
                    <div className="forma_ckeck">
                        <input type="checkbox" className="checkbox"/>
                    <span>Даю согласие на обработку персональных данных</span>
                    </div>
                    
                </li>
            </ul>
                
            <button onClick={handleAddForm}>Отправить</button>
            </form>
            
        </div>
    )
}