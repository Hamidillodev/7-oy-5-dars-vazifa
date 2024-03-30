import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Progress_Bar from '/Progress Bar.png'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(``)
  const add = () => {

  }
  return (
    <>
      <Header />
      <main className='text-left'>
        <img src={Progress_Bar} alt="" />
        <div>
          <h1>Выбор тип профиля</h1>
          <p>Чтобы размещать задания в сервисе, примите условия <br />
            Соглашения Qugo с Заказчиком и выберите “Стать заказчиком”<br />
            Чтобы выполнять задания и зарабатывать деньги выберите “Стать исполнителем”</p>
          <div>
            <input type="radio" name="" id="" />Стать исполнителем<br />
            <input type="radio" name="" id="" />Стать заказчиком<br />
          </div>
          <input type="checkbox" name="" id="" />
          <p>Я прочитал и принимаю условия Соглашения Qugo с Заказчиком</p>
          <button onClick={add}>Стать исполнителем</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
