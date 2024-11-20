import { ArrowRight, Heart } from "lucide-react";
import { Button } from "../ui";
import Image from "next/image";
import { cars } from "@/constants";

export const Catalog = () => {
    return (
        <div className="py-36">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col space-y-4">
                    <h3 className="font-light text-md">Каталог</h3>
                    <h2 className="font-bold text-5xl">Новое авто. <span className="text-blue-600">В течение дня.</span></h2>
                    <p className="font-regular text-md max-w-3/5">Выберите автомобиль, который вам подходит, и начинайте аренду с выкупом сегодня!</p>
                </div>
            
                <div className="grid grid-cols-4 gap-8 mt-32">

                    {
                        cars.map((car) => (
                            <div key={car.id} className="flex flex-col flex-1 rounded-2xl bg-blue-50 p-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-md font-medium">{car.model}</h3>
                                        <p className="text-sm font-light">{car.body}</p>
                                    </div>

                                    <Heart className="cursor-pointer stroke-blue-950 hover:stroke-blue-600 hover:fill-blue-600" size={30} />
                                </div>

                                <div className="relative grow py-8">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-md leading-none">{car.commission}</h3>
                                            <p className="text-sm font-light leading-none">комиссия</p>
                                        </div>

                                        <div className="rounded-full border border-blue-950 px-4 py-1 text-sm">
                                            {car.equipment}
                                        </div>
                                    </div>

                                    <Image src={car.image} width="400" height="160" alt="Emgrand" />
                                    
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-md leading-none">{car.term}</h3>
                                            <p className="text-sm font-light leading-none">срок аренды</p>
                                        </div>

                                        <div>
                                            <h3 className="text-md leading-none">{car.pay}</h3>
                                            <p className="text-sm font-light leading-none text-right">в месяц</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="flex-1">
                                        <Button variant="accent" className="w-full rounded-full">
                                            Оставить заявку
                                        </Button>
                                    </div>

                                    <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-600 group hover:bg-blue-600 transition duration-300">
                                        <ArrowRight className="stroke-blue-600 group-hover:stroke-blue-50 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    

                    
                </div>
            </div>
        </div>
    );
}