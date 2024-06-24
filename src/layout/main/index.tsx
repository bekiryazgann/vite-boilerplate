import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <header className="h-[80px] border-b border-b-zinc-200 px-4 flex items-center bg-zinc-100">
                <div className="flex items-center gap-2">
                    <span className="hover:underline hover:text-blue-700 cursor-pointer"> Anasayfa </span>
                    <span className="hover:underline hover:text-blue-700 cursor-pointer"> Hakkımızda </span>
                    <span className="hover:underline hover:text-blue-700 cursor-pointer"> Yapılacaklar </span>
                </div>
            </header>
            <Outlet/>
        </div>
    )
}
