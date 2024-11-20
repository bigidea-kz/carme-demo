import { ReactLenis, useLenis } from 'lenis/react';
import { AboutUs, Catalog, Hero, HowItWorks, LeaveRequest, Promo } from "@/components/shared";

const HomePage = () => {
    return (
        <ReactLenis root>
            <>
                <Hero />
                <Catalog />
                <AboutUs />
                <HowItWorks />
                <Promo />
                <LeaveRequest />
            </>
        </ReactLenis>
    );
}

export default HomePage;