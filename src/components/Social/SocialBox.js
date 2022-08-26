import { useState } from 'react';

export default function SocialBox({ logo1, logo2, platform, followers, partner, views, followHead = "Takipçi", partnerHead = "Partner", logoSize = '128px', hoverBg }) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        backgroundColor : isHover ? hoverBg : '#222'
    }

return (
    <div style={boxStyle} className={`450:max-w-[18.125rem] w-[18.125rem] min-h-[20.688rem] text-white text-center transition-all duration-300 cursor-pointer rounded-sm py-10 px-5 flex flex-col justify-between items-center`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flex justify-between items-center gap-x-2 max-w-full">
            <img src={logo1} width={logoSize} height={logoSize} />
            {logo2 ? (
                <img src={logo2} className="rounded-full inline-block 450:hidden" width={"100"} height={"100"} />
            ) : ""}
        </div>

        <span className="text-[0.938rem] font-semibold relative mb-4 445min:mb-0">{platform}</span>

        <div className="flex flex-wrap 445min:flex-row flex-col 450min:gap-y-0 gap-y-2 445min:py-0 py-2.5 justify-evenly items-center text-center border-b border-[#f5f5f5] border-solid w-full">
            {partner ? (
                <div className="text-sm 445min:border-r 445:border-b 445:border-[#7c7c7cce] 445:rounded-br-2xl 445:rounded-bl-2xl 445min:border-[#f5f5f5] border-solid flex justify-between items-center flex-col px-5 pb-1.5">
                    <span>{followHead}</span>
                    <span>{followers}</span>
                </div>
            ) :
                <div className="text-sm border-none flex justify-between items-center flex-col px-5 pb-1.5">
                    <span>{followHead}</span>
                    <span>{followers}</span>
                </div>
            }
            {partner ? (
                <div className="text-sm flex justify-between items-center flex-col px-5 pb-1.5">
                    <span>{partnerHead}</span>
                    <span>{partner}</span>
                </div>
            ) : ""}

        </div>

        <div className="block text-center text-sm relative -bottom-1">{views}</div>
    </div>
)
}