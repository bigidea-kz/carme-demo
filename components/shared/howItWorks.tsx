export const HowItWorks = () => {
    return (
        <div className="py-36">
            <div className="container mx-auto px-4 lg-px-0">
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="font-light text-md">Как работает аренда с выкупом?</h3>
                    <h2 className="font-bold text-4xl">Простые шаги на пути к <span className="text-blue-600">вашему автомобилю.</span></h2>
                    <p className="font-regular text-md w-1/2">
                        Гарантированный выкуп через 37 месяцев - с возможностью вернуть машину.
                    </p>
                </div>

                <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-8 mt-32">
                    <div className="rounded-xl bg-blue-50 min-h-60 p-6">
                        <div className="mb-16">
                            <img className="h-12" src="/search-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end space-4">
                            <h3 className="text-xl font-semibold">Выбор авто</h3>
                            <p className="text-sm">Ознакомьтесь с каталогом, выберите подходящую модель.</p>
                        </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 min-h-60 p-6">
                        <div className="mb-16">
                            <img className="h-12" src="/chat-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end space-4">
                            <h3 className="text-xl font-semibold">Консультация</h3>
                            <p className="text-sm">Свяжитесь с нами и получите консультацию.</p>
                        </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 min-h-60 p-6">
                        <div className="mb-16">
                            <img className="h-12" src="/doc-sign-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end space-4">
                            <h3 className="text-xl font-semibold">Договор</h3>
                            <p className="text-sm">Заключите договор и оплатите комиссию.</p>
                        </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 min-h-60 p-6">
                        <div className="mb-16 h-12">
                            <img className="h-8" src="/key-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end space-4">
                            <h3 className="text-xl font-semibold">Получите авто</h3>
                            <p className="text-sm">Примите авто и пользуйтесь.</p>
                        </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 min-h-60 p-6">
                        <div className="mb-16">
                            <img className="h-12" src="/money-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end space-4">
                            <h3 className="text-xl font-semibold">Аренда</h3>
                            <p className="text-sm">Выплачивайте регулярные платежи.</p>
                        </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 min-h-60 p-6">
                        <div className="mb-16">
                            <img className="h-12" src="/car-front-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end space-4">
                            <h3 className="text-xl font-semibold">Поздравляем</h3>
                            <p className="text-sm">Автомобиль ваш по истечении срока аренды.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};