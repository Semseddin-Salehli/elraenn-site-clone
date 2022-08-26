export default function Footer() {
    return (
        <div className="max-w-full min-h-6 bg-[#000] flex flex-wrap justify-between 500:justify-center items-center gap-x-16 text-center text-white px-3 py-5">
            <span className="500:mb-2">Copyright © 2022 Tuğkan Gönültaş. All Rights Reserved.
                <hr className="hidden 500:block w-[96%] -mb-1.5 mt-1 mx-auto" />
            </span>
            <span className="flex gap-x-1">Made by <a href="#" className="text-blue-400">Şemseddin Salehli</a></span>
        </div>
    )
}