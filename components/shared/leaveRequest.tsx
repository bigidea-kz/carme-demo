import { CircleChevronRight, ChevronRight } from "lucide-react";

export const LeaveRequest = () => {
    return (
        <div className="py-36">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex mx-auto p-16 rounded-[50px] bg-orange-50 gap-8">
                    <div className="flex-1 space-y-2">
                        <h2 className="text-3xl font-semibold w-3/4">Мечтаете о новом авто, но кредит или полная оплата не подходят?</h2>
                        <div className="cursor-pointer flex items-center text-blue-600 text-md font-medium group">
                            <span>оставить заявку</span>
                            <ChevronRight className="ml-2 group-hover:scale-150 transition duration-300"/>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-end items-center">
                        <img className="h-12" src="/logo.svg" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};