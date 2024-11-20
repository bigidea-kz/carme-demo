'use client';

import React, { useEffect } from "react";

export const SmoothScroll = ({
    children
}: Readonly<{ children: React.ReactNode }>) => {
    useEffect(() => {
        let isThrottled = false;

        const handleWheel = (event: WheelEvent) => {
            if (isThrottled) return;

            event.preventDefault();
            isThrottled = true;

            const scrollAmount = event.deltaY > 0 ? 100 : -100; // Количество пикселей прокрутки
            window.scrollBy({ top: scrollAmount, behavior: "smooth" });

            setTimeout(() => {
                isThrottled = false;
            }, 100); // Задержка для предотвращения слишком частой прокрутки
        };

        const handleTouchMove = (event: TouchEvent) => {
            const touch = event.changedTouches[0];
            const deltaY = touch.pageY - touch.clientY;

            window.scrollBy({ top: -deltaY, behavior: "smooth" });
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};