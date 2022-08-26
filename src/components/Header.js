import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"

export default function Header() {
    const [toggled, setToggled] = useState(false);
    const [color, setColor] = useState(false);


    const menu = () => {
        setToggled(true);

        document.querySelector('.menu-box-phone').classList.remove('-left-[200%]')
        document.querySelector('.menu-box-phone').classList.add('left-0')
        document.querySelector('.menu-box-phone').classList.add('h-[100vh]')
    };
    const cancel = () => {
        setToggled(false);

        document.querySelector('.menu-box-phone').classList.remove('left-0')
        document.querySelector('.menu-box-phone').classList.add('-left-[200%]')
    };

    window.addEventListener('scroll', function () {
        var header = document.querySelector('.header');
        var links = document.querySelectorAll('.nav-link');
        var logo = document.querySelector('.logo');
        var menuBtn = document.querySelector('.menuBtn')
        var cancelBtn = document.querySelector('.cancelBtn')


        if (window.scrollY > 0) {
            header.classList.remove('bg-red-500');
            header.classList.add('bg-white');
            header.classList.add('shadow-rrane')

            setColor(true)

            for (let i = 0; i < links.length; i++) {
                const element = links[i];
                element.classList.add('text-[#111]');
                element.classList.add('hover:!text-[#111]');

                logo.classList.add('text-[#111]')
                logo.classList.remove('text-white');

                menuBtn.classList.add('text-[#111]')
                menuBtn.classList.remove('text-white');

                cancelBtn.classList.add('text-[#111]')
                cancelBtn.classList.remove('text-white');

            }

        } else {
            header.classList.remove('bg-white');
            header.classList.remove('shadow-rrane');

            setColor(false)

            for (let i = 0; i < links.length; i++) {
                const element = links[i];
                element.classList.remove('text-[#111]');
                element.classList.remove('hover:!text-[#111]');

                logo.classList.remove('text-[#111]')
                logo.classList.add('text-white')

                menuBtn.classList.remove('text-[#111]')
                menuBtn.classList.add('text-white')

                cancelBtn.classList.remove('text-[#111]')
                cancelBtn.classList.add('text-white')
            }
        }
    });

    return (
        <div className="flex justify-between items-center p-8 smmax:px-5 px-28 w-full h-[7.188rem] header transition-all duration-300 ease-linear fixed top-0 left-0 z-10 select-none">
            <a href="#" className="text-white text-2xl uppercase tracking-elraenn font-bold logo">Elraenn</a>

            <nav>
                <div className="w-full menu-box-phone lg:static absolute lg:left-0 -left-[200%] top-24 bg-[#000000fb] lg:bg-inherit transition-all duration-500">
                    <ul className="flex flex-wrap w-full lg:auto h-[80%] gap-x-8 items-center lg:static relative top-[5%] lg:justify-between z-20">
                        <li className="w-full lg:w-auto text-center lg:inline-block flex justify-center items-center max-h-6">
                            <a onClick={cancel} href="#main" className="nav-link lgmax:!text-white lgmax:hover:text-white">Anasayfa</a>
                        </li>

                        <li className="w-full lg:w-auto text-center lg:inline-block flex justify-center items-center max-h-6">
                            <a onClick={cancel} href="#about" className="nav-link lgmax:!text-white lgmax:hover:text-white">Hakkında</a>
                        </li>

                        <li className="w-full lg:w-auto text-center lg:inline-block flex justify-center items-center max-h-6">
                            <a onClick={cancel} href="#social" className="nav-link lgmax:!text-white lgmax:hover:text-white">Sosyal Medya</a>
                        </li>

                        <li className="w-full lg:w-auto text-center lg:inline-block flex justify-center items-center max-h-6">
                            <a onClick={cancel} href="#sponsor" className="nav-link lgmax:!text-white lgmax:hover:text-white">Sponsorlar</a>
                        </li>

                        <li className="w-full lg:w-auto text-center lg:inline-block flex justify-center items-center max-h-6">
                            <a onClick={cancel} href="#media" className="nav-link lgmax:!text-white lgmax:hover:text-white">Basın</a>
                        </li>

                        <li className="w-full lg:w-auto text-center lg:inline-block flex justify-center items-center max-h-6">
                            <a onClick={cancel} href="#contact" className="nav-link lgmax:!text-white lgmax:hover:text-white">İletişim</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <AiOutlineMenu className={`${color ? "text-[#111]" : "text-white"} select-none cursor-pointer inline-block lg:hidden menuBtn ${toggled ? "hidden" : 'inline-block'}`} size={"40"} onClick={menu} />
            <FaTimes className={`${color ? "text-[#111]" : "text-white"} select-none cursor-pointer lg:hidden cancelBtn ${toggled ? "inline-block" : 'hidden'}`} size={"40"} onClick={cancel} />
        </div>
    )

}