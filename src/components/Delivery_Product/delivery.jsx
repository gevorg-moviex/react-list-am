import "./delivery.css"
import { delivery } from "../../../data"
let icon = "fa-brands fa-shopify"

export default function Delivery({ productTitle }){
    return (
        <div className="product-main grid justify-center items-center text-left p-3">
            <h2 className="product-title relative top-[45px] cursor-pointer transition-all duration-[0.3s] hover:text-[#110BFF]">
                {productTitle}
            </h2>
            <div className="product-item-child grid grid-cols-6xauto grid-rows-auto justify-center gap-[20px] mt-[60px]">
                {delivery.map((item, index) => (
                    <div key={index} className="product-item flex flex-col w-full max-w-[180px] gap-2.5 text-left py-2.5 cursor-pointer transition-all duration-[0.5s] hover:brightness-[110%]">
                        {item.imageUrl && <img src={item.imageUrl} alt={item.description || 'Product Image'} className="object-cover shadow-productsShadow rounded-xl"/>}
                        <span className="price font-bold text-[17px]">
                            {item.price}
                        </span>
                        <button className="delivery-button flex w-[75%] py-2 px-[5px] gap-1 justify-center items-center text-white bg-[#FF8A24] border-none outline-none rounded-md font-[100]">
                            <i className={icon}></i>Գնել առաքումով
                        </button>
                        <span className="description text-[15px] text-[#292c49] hover:text-[#110BFF]">
                            {item.description}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}