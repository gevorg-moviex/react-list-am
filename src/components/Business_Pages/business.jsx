import "./business.css"
import  { business }  from "../../../data"

export default function BusinessPage(){
    return (
        <div className="business-main mt-[50px] p-3">
            <div className="business-grid grid grid-rows-auto-auto justify-center gap-[20px] mt-[20px]">
                <h2>Բիզնես էջեր</h2>
                <div className="business-loop overflow-x-auto grid grid-cols-10xauto gap-[20px]">
                    {business.map((item, index) => (
                        <div key={index} className="business-child w-[100px] h-[100px] rounded-[10px]">
                            <img srcSet={item} alt="" className="w-full h-full rounded-[10px] cursor-pointer transition-all duration-[0.3s] hover:brightness-[120%] hover:shadow-myBoxShadow" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}