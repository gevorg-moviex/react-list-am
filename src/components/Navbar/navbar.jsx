import { navItems } from "../../../data";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="grid grid-cols-[repeat(5,_auto)] grid-rows-[repeat(3,_auto)] gap-y-5 justify-center items-center gap-x-[35px] mt-5 p-3">
            {navItems.map((item, index) => (
                <div key={index} className="flex gap-[5px] cursor-pointer text-[#292c49] font-normal transition-all duration-[0.2s] hover:text-[#36A6FD]">
                    <i className={item.iconUrl}></i>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}