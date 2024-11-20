import { AboutUs, Catalog, Hero, HowItWorks, LeaveRequest, Promo } from "@/components/shared";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Catalog />
            <AboutUs />
            <HowItWorks />
            <Promo />
            <LeaveRequest />
        </>
    );
}

export default HomePage;