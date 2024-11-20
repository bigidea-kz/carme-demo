import { Button } from "@/components/ui";
import { BookOpenCheck, Calendar1, HandCoins, ShieldCheck } from "lucide-react";

export const Hero = () => {
    return (
        <div className="min-h-screen pt-28">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="font-inter flex gap-8">
                    <div className="flex basis-3/5 flex-col justify-between">
                        <h1 className="text-6xl font-bold">Стантье владельцем нового Geely Emgrand</h1>
                    </div>

                    <div className="flex basis-2/5 flex-col items-end justify-end">
                        <p className="text-lg">
                            Аренда с выкупом на наших условиях
                        </p>
                        <p className="text-lg">
                            <span className="text-blue-500 font-bold">выгоднее</span>, чем автокредит в банке
                        </p>
                    </div>
                </div>

                <div className="relative w-full flex items-center justify-end pt-8 h-[30rem] 2xl:h-[34rem]">

                    <div className="absolute flex items-center p-5 space-x-8 rounded-l-2xl bg-blue-50 font-montserrat">
                        <p className="leading-none">Оставьте заявку прямо сейчас <br />и заберите авто в течение дня</p>
                        <Button variant="accent">
                            Оставить заявку
                        </Button>
                    </div>

                    <div className="rounded-3xl w-full h-full bg-[url('/hero-emgrand-b@2x.png')] bg-cover bg-bottom bg-no-repeat"></div>
                </div>

                <div className="flex w-full items-center pt-4 gap-6 font-montserrat">
                    <div className="flex flex-1 flex-row items-center justify-between rounded-xl bg-blue-50 p-5 leading-none">
                        <div className="flex">
                            <BookOpenCheck size={48} className="stroke-blue-500 stroke-1" />
                        </div>

                        <div className="flex flex-col leading-none text-right">
                            <span className="text-xl font-medium">Без проверки</span>
                            <span className="text-sm">кредитной истории</span>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-row items-center justify-between rounded-xl bg-blue-50 p-5 leading-none">
                        <div className="flex">
                            <ShieldCheck size={48} className="stroke-blue-500 stroke-1" />
                        </div>

                        <div className="flex flex-col leading-none text-right">
                            <span className="text-xl font-medium">КАСКО и ОГПО</span>
                            <span className="text-sm">за наш счет</span>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-row items-center justify-between rounded-xl bg-blue-50 p-5 leading-none">
                        <div className="flex">
                            <Calendar1 size={48} className="stroke-blue-500 stroke-1" />
                        </div>

                        <div className="flex flex-col leading-none text-right">
                            <span className="text-xl font-medium">37</span>
                            <span className="text-sm">месяцев</span>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-between rounded-xl bg-blue-50 p-5 leading-none">
                        <div className="flex">
                            <HandCoins size={48} className="stroke-blue-500 stroke-1" />
                        </div>

                        <div className="flex flex-col leading-none text-right">
                            <span className="text-xl font-medium">1 852 000 т</span>
                            <span className="text-sm">комиссия</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}