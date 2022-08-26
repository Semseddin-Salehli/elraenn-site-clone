import SocialBox from './Social/SocialBox'

export default function SocialMedia() {
    return (
        <div id='social' className="bg-[#111] 440min:px-24 440:px-7 py-9 w-full min-h-[65.188rem]">
            <span className="text-white text-3xl font-semibold block text-center">Sosyal Medya</span>
            <span className="text-white text-base block text-center mt-1">Güncel Sosyal Medya Hesaplarım</span>

            <div className='social-content flex justify-center items-center gap-x-10 gap-y-10 pt-10 flex-wrap'>
                <SocialBox hoverBg="rgba(166, 72, 190, 0.45)" logo1={"https://www.elraenn.com/img/icon1.png"} platform={"Twitch"} followers={"2.300.000+"} partner={"464"} views={"65.000.000+"} link={"https://www.twitch.tv/elraenn"} />
                <SocialBox hoverBg="rgba(219, 83, 83, 0.45)" logo1={"https://www.elraenn.com/img/icon2.png"} platform={"Youtube - Elraenn"} logo2={"https://www.elraenn.com/img/tugkann.jpg"} followers={"1.130.000+"} partner={"637+"} views={"178.962.000+"} link={"https://www.youtube.com/c/Elraenn"} />
                <SocialBox hoverBg="rgb(97, 49, 129, 0.45)" logo1={"https://www.elraenn.com/img/icon3.png"} platform={"Instagram"} followers={"1.025.000+"} partner={"521"} views={"1.200.000(Aylık)"} link={"https://instagram.com/tugkangonultas"}/>
                <SocialBox hoverBg="rgb(194, 192, 86, 0.45)" logo1={"https://www.elraenn.com/img/icon2.png"} logo2={"https://www.elraenn.com/img/kar%C4%B1nca.jpg"} platform={"Youtube - Karınca Çiftliğim"} followers={"2.300.000+"} partner={"464"} views={"65.000.000+"} link={"https://www.youtube.com/c/Karincaciftligim"} />
                <SocialBox hoverBg="rgb(87, 127, 202, 0.45)" logo1={"https://www.elraenn.com/img/icon4.png"} logoSize={"100px"} platform={"Discord"} followHead={"Üye"} partnerHead={"Lorem"} followers={"228.000+"} views={"93M+"} link={"https://discord.gg/elraenn"} />
            </div>
        </div>
    )
}