export default function Sponsor() {
    return (
        <div id="sponsor" className="w-full min-h-[44.313rem] bg-white py-4 md:p-24 mb-7 flex items-center flex-col gap-y-10 flex-shrink">
            <div>
                <span className="text-[#111] text-3xl font-semibold block text-center">Sponsorlar</span>
                <span className="text-base block text-center mt-1.5">Güncel Sponsorlarım.</span>
            </div>

            <div className="flex items-center justify-between 1164:flex-row flex-col flex-wrap gap-y-8 1164:gap-y-7 1164:gap-x-28 w-full h-full">
                <img className="1164:w-[30%] smmax:w-3/4 h-[100px]" src="https://cdn.discordapp.com/attachments/733847315592380536/853657576520286228/Msi_Logo.png" />
                <img className="1164:w-[30%] smmax:w-3/4 h-[96px]" src="https://cdn.discordapp.com/attachments/733847315592380536/853659210020552755/Viewsonic-logo-9872AAFEBC-seeklogo.com.png" />
                <img className="1164:w-[30%] smmax:w-3/4 h-[111px]" src="https://cdn.discordapp.com/attachments/733847315592380536/853659322813644810/bynogame-logo-siyah2.png" />
                <img className="1164:w-[30%] smmax:w-3/4 h-[63px]" src="https://cdn.discordapp.com/attachments/733847315592380536/853660013582090270/Nvidia_logo.png" />
            </div>

            <div className="w-full h-12 text-center flex justify-center items-center mt-10 smmax:mt-3">
                <button className="btn max-w-[12.938rem] h-full">Daha fazlası</button>
            </div>
        </div>
    )
}