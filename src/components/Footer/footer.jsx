import "./footer.css"

export default function Footer(){
    return (
        <footer className="flex flex-wrap justify-between py-[15px] px-[170px] text-[14px] items-center bg-[#f7f5f5]">
            <div className="footer-1">
                <span>&copy; 2005-2024 List.am</span>
            </div>
            <div className="footer-2">
                <ul className="flex gap-[20px] list-none">
                    <a href="" className="no-underline text-[#292c49] transition-all duration-[0.3s] hover:text-[#110BFF]"><li>Տեղեկանք</li></a>
                    <a href="" className="no-underline text-[#292c49] transition-all duration-[0.3s] hover:text-[#110BFF]"><li>Հետադարձ կապ</li></a>
                    <a href="" className="no-underline text-[#292c49] transition-all duration-[0.3s] hover:text-[#110BFF]"><li>Օգտագործման համաձայնագիր</li></a>
                </ul>
            </div>
        </footer>
    )
}