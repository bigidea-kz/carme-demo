"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { Bookmark, Heart, Menu, User } from "lucide-react";

const Header = () => {
    const scrolled = useScrollTop();
    
    return (
        <header className={cn(
            "fixed z-50 bg-white/75 top-0 w-full py-4",
            scrolled && "border-b shadow-sm backdrop-blur-xl"
        )}>
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex gap-4 md:gap-16 font-inter">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="logo" />
                    </div>

                    <div className="flex justify-end md:justify-between grow">
                        <div className="hidden md:flex items-center gap-8">
                            <a className="text-sky-950 font-medium" href="/">автомобили</a>
                            <a className="text-sky-950 font-medium" href="/">о нас</a>
                            <a className="text-sky-950 font-medium" href="/">условия</a>
                        </div>

                        <div className="flex items-center gap-4 md:gap-8">
                            <Heart size={24} className="cursor-pointer stroke=blue-950 hover:fill-blue-600 hover:stroke-blue-600"/>
                            <User size={24} className="cursor-pointer stroke-blue-950 hover:fill-blue-600 hover:stroke-blue-600"/>
                        </div>
                    </div>
                    
                    <div className="cursor-pointer flex group">
                        <Menu size={24} className="stroke-blue-600 group-hover:stroke-blue-800" />
                    </div>
                </div> 

            </div>
        </header>
    );
}

export { Header };