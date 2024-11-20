export const AboutUs = () => {
    
    return (
        <div className="py-36 bg-blue-50">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col space-y-4">
                    <h3 className="font-light text-md">О нас</h3>
                    <h2 className="font-bold text-5xl">С комфортом. <span className="text-blue-600">Без лишних забот.</span></h2>
                    <p className="font-regular text-md w-1/2">
                        Наши условия аренды очень схожи с автокредитом, но при этом гораздо более гибкие и простые. Вы получаете автомобиль без необходимости брать на себя долговые обязательства перед банком.
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-8 mt-32">
                    <div className="flex flex-col flex-1 min-h-96 rounded-2xl bg-white shadow p-6">
                        <div className="mb-10">
                            <h3 className="mb-4">Доступно</h3>
                            <img className="h-10" src="/card-check-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end">
                            <h2 className="text-xl text-blue-600 font-semibold leading-tight">Отсутствие проверки кредитной истории</h2>
                            <p className="mt-4 text-sm">
                                Забудьте о сложных процедурах — мы не проверяем вашу кредитную историю, что делает оформление максимально простым и быстрым.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 min-h-96 rounded-2xl bg-white shadow p-6">
                        <div className="mb-10">
                            <h3 className="mb-4">Гибкость</h3>
                            <img className="h-10" src="/fact-check-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end">
                            <h2 className="text-xl text-blue-600 font-semibold leading-tight">Гибкие условия аренды с выкупом</h2>
                            <p className="mt-4 text-sm">
                                Мы предоставляем гибкие условия, которые напоминают автокредит, но без длинных и сложных обязательств, делая процесс оформления и использования автомобиля намного проще.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 min-h-96 rounded-2xl bg-white shadow p-6">
                        <div className="mb-10">
                            <h3 className="mb-4">Безопасность</h3>
                            <img className="h-10" src="/shield-plus-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end">
                            <h2 className="text-xl text-blue-600 font-semibold leading-tight">Первый год без забот</h2>
                            <p className="mt-4 text-sm">
                                Мы полностью покрываем расходы на страхование по КАСКО и ОГПО в первый год аренды. Вам не нужно беспокоиться о дополнительных расходах на страховку — она уже включена!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 min-h-96 rounded-2xl bg-white shadow p-6">
                        <div className="mb-10">
                            <h3 className="mb-4">Обратимость</h3>
                            <img className="h-10" src="/restore-icon.svg" alt="icon" />
                        </div>

                        <div className="flex flex-col justify-end">
                            <h2 className="text-xl text-blue-600 font-semibold leading-tight">Гибкие условия расторжения</h2>
                            <p className="mt-4 text-sm">
                                Если вы решите расторгнуть договор, мы вернем 40% комиссии. В отличие от авто кредитов, где первоначальный взнос не возвращается.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}