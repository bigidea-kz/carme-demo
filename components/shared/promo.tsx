import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";

export const Promo = () => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="absolute top-0 bottom-0 z-2 container px-4 lg:px-0">
                <div className="flex flex-col justify-between h-full py-12">
                    <h3 className="text-2xl text-blue-50">Promo</h3>

                    <div className="flex justify-end gap-8">
                        <CircleChevronLeft size={40} className="cursor-pointer stroke-blue-50 stroke-1"/>
                        <CircleChevronRight size={40} className="cursor-pointer stroke-blue-50 stroke-1"/>
                    </div>
                </div>
                
            </div>

            <div className="">
                <Image src="/promo-atlas.jpg" width="1920" height="900" alt="Geely Atlas" />
            </div>
            {/* <img src="/promo-atlas.jpg" alt="" /> */}
        </div>
    );
};