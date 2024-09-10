import "./items.css";
import { items } from "../../../data";

export default function Items(){
    return (
        <div className="items-main grid grid-cols-8x130 grid-rows-[130px] justify-center gap-[20px] mt-[40px] overflow-x-auto p-3">
           {items.map((item, index) => (    
                <div key={index} className="item rounded-[10px] p-[10px] overflow-hidden cursor-pointer text-[14px] text-white font-bold transition-all duration-[0.2s] bg-cover bg-center bg-no-repeat hover:brightness-[110%]" style={{ 
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: '100% auto',
                    backgroundPosition: 'bottom center', 
                    backgroundRepeat: 'no-repeat' ,
                    backgroundColor: `${item.bgColor}`
                }}>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}