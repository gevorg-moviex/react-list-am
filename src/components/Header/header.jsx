import "./Header.css"; // For custom styles if needed
import logo from "/logo-list.png";
import Navbar from "../Navbar/navbar.jsx";

export default function Header() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-x-[50px] w-full items-center text-[15px]">
                <input type="checkbox" id="check" className="hidden" />
                <label htmlFor="check" className="text-[30px] text-white cursor-pointer hidden z-[1000] relative lg:inline-block md:hidden">
                    <i className="fas fa-bars"></i>
                </label>
                <img srcSet={logo} alt="" className="w-full object-cover max-w-[100px] mix-blend-darken cursor-pointer hidden lg:block" />
                <div className="flex gap-[7px] cursor-pointer justify-center items-center transition-all duration-[0.3s] hover:text-[#110BFF] lg:flex">
                    <i className="fa-solid fa-bars"></i>
                    <span className="cursor-pointer">Բաժիններ</span>
                </div>
                <div className="input-block w-full flex flex-1 items-center justify-center mr-2.5 lg:w-0">
                    <input
                        type="text"
                        placeholder="Որոնում"
                        className="w-[80%] lg:w-[520px] rounded-lg border-none outline-none text-black bg-[#F6F6F6] px-[10px] py-[13px] transition-all duration-[0.5s] focus:border-[#110BFF]"
                    />
                </div>
                <span className="cursor-pointer hover:text-[#110BFF] hidden lg:inline">
                    Իմ էջը
                </span>
                <button
                    type="submit"
                    className="w-[240px] cursor-pointer rounded-[30px] py-[10px] px-[5px] text-[14px] text-white font-bold border-none outline-none bg-[#0090FF] transition-all duration-[0.3s] hover:opacity-[0.8] hidden lg:inline"
                >
                    Տեղադրել հայտարարություն
                </button>
                <Navbar className="hidden lg:block"/>
            </div>
        </>
    );
}
