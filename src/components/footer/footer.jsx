import footer_img from '/Frame 2614.png'

const Footer = () => {
    return (
        <>
            <div className="text-left flex gap-40">
                <div className="">
                    <h2>Категории услуг</h2>
                <div className="flex gap-10">
                    <div className="text-lime-500">
                        <h2>Курьерские доставки</h2>
                        <h2>Бытовой ремонт</h2>
                        <h2>Ремонт смартфонов</h2>
                        <h2>Обучение детей</h2>
                        <h2>Услуги промоутеров</h2>
                        <h2>Грузоперевозки</h2>
                        <h2>Психологи</h2>
                        <h2>Клининговые услуги</h2>
                    </div>
                    <div className="text-lime-500">
                        <h2>Фото и видео</h2>
                        <h2>Фрилансеры</h2>
                        <h2>Помощь без категории</h2>
                        <h2>Ремонт компьютеров</h2>
                        <h2>Уход за животными</h2>
                        <h2>Юридические услуги</h2>
                        <h2>Ремонт авто</h2>
                    </div>
                </div>
                </div>
                <div className="gap-20">
                    <div className="">
                            <h2>Сервис</h2>
                            <div className="text-lime-500">
                                <h2>О сервисе</h2>
                                <h2>Личный кабинет</h2>
                            </div>
                    </div>
                    <div className="pt-6">
                        <h2>Документы</h2>
                        <div className="text-lime-500">
                            <h2>Пользовательское соглашение Qugo</h2>
                            <h2>Политика о данных</h2>
                            <h2>Соглашение Qugo с Заказчиком</h2>
                            <h2>Проект договора услуг</h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={footer_img} alt="" />
                </div>
            </div>
            <div className=""></div>
        </>
    )
}

export default Footer