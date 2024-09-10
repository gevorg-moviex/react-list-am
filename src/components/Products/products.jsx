import React from 'react';
import './products.css';

import { rentCar, realEstate, carService, electronics, hobbySport } from '../../../data.js';

const dataMap = {
    rentCar,
    realEstate,
    carService,
    electronics,
    hobbySport
};

const ProductList = ({ category, productName}) => {
    const data = dataMap[category] || [];

    return (
        <div className="product-main grid justify-center items-center text-left p-3">
            <h2 className='product-title relative top-[45px] cursor-pointer transition-all duration-[0.3s] hover:text-[#110BFF]'>{productName}</h2> 
            <div className="product-item-child grid grid-cols-6xauto grid-rows-auto justify-center gap-[20px] mt-[60px]">
            {data.map((item, index) => (
                <div key={index} className="product-item flex flex-col w-full max-w-[180px] gap-2.5 text-left py-2.5 cursor-pointer transition-all duration-[0.5s] hover:brightness-[110%]">
                    {item.imageUrl && <img src={item.imageUrl} alt={item.description || 'Product Image'} className='object-cover shadow-productsShadow rounded-xl'/>}
                    <span className="price font-bold text-[17px]">
                        {item.price}
                    </span>
                    <span className="description text-[15px] text-[#292c49] hover:text-[#110BFF]">
                        {item.description || item.model || item.address}
                    </span>
                    <span className='size text-[#70717f]'>
                        {item.size || ""}
                    </span>
                </div>
            ))}
            </div>
        </div>
    );
};

export default function Products() {
    return (
        <>
            <ProductList category="rentCar" productName="Ավտոմեքենաների վարձույթ" />
            <ProductList category="realEstate" productName="Անշարժ գույք" />
            <ProductList category="carService" productName="Ավտոսպասարկում" />
            <ProductList category="electronics" productName="Էլեկտրոնիկա" />
            <ProductList category="hobbySport" productName="Հոբբի և սպորտ" />
        </>
    );
}
