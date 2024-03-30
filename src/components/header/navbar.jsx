import Logo from '/Frame 2586.svg'
import rasm from '/Frame 330.png'

const Navbar = () => {

    return (
        <>
            <nav className="flex gap-80">
                <div className="flex items-center gap-4">
                    <img src={Logo} alt="logo" />
                    <ul className="flex gap-2">
                        <li className='text-lime-500'>Создать задание</li>
                        <li>Найти задание</li>
                        <li>Для бизнеса</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <h5>Сообщения 2</h5>
                        <h5>Мои заказы 2</h5>
                    </div>
                    <div className="flex items-center">
                        <img src={rasm} alt="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar