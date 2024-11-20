export const Footer = () => {
    return (
        <div className="py-24">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex items-center justify-between">
                    <img src="/logo.svg" alt="logo" />

                    <p>© Carme,  2024</p>

                    <div className="flex items-center space-x-8">
                        <div className="cursor-pointer">
                            <img src="/instagram-icon.svg" alt="icon" />
                        </div>

                        <div className="cursor-pointer">
                            <img src="/whatsapp-icon.svg" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};