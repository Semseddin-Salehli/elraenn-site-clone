export default function Contact() {
    return (
        <div id="contact" className="max-w-full h-[54.125rem] bg-[#000] p-24 500:px-2">
            <span className="text-white text-3xl font-semibold block text-center">İletişim</span>
            <span className="text-white text-base block text-center mt-1">Aşağıdaki formu kullanarak iletişime geçebilirsiniz.</span>

            <div className="flex justify-center items-center mt-8">
                <form method="POST" className="flex flex-col gap-y-5 mx-auto">
                    <span className="text-white block text-xl font-medium -mb-2">Mesaj Gönder</span>
                    <input type="text" name="name" className="inputs" placeholder="İsim" required />
                    <input type="email" name="email" className="inputs" placeholder="E-mail" required />
                    <textarea name="message" className="inputs h-[15.625rem] resize-none" placeholder="Mesajınız" required />

                    <button type="submit" className="btn 500min:max-w-[176px]">Gönder</button>
                </form>
            </div>
        </div>
    )
}