export default function Sidebar() {
    return (
        <div id="main" className="max-w-full p-24 500:px-6 flex flex-col gap-y-2 text-white relative top-24">
            <h2 className="text-5xl 500:text-[8vw] font-medium">Selam, Ben</h2>
            <h2 className="text-7xl 500:text-[10vw] font-bold">Tuğkan Gönültaş.</h2>
            <h3 className="text-2xl 500:text-[6vw] leading-none font-medium ml-2 500:ml-1 mt-1">Influencer ve Twitch Yayıncısı</h3>

            <button className="btn max-w-[176px] mt-4 ml-7 500:ml-1 overflow-hidden">Hakkımda</button>
        </div>
    )
}