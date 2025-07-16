import Image from "next/image"

export default function Hero() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-12 mt-24 lg:mt-10">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Hi, I am </span> Diya </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Hello, I’m Diya from Karachi, Pakistan. I am currently pursuing a B.Ed. Hons degree and am passionate about teaching, programming, and lifelong learning. My journey has been shaped by a variety of experiences and accomplishments in education, technology, and extracurricular activities.<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Agentic AI</span>.</p>
                    <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-600 via-pink-600 to-purple-600 hover:bg-slate-200 text-white"><a href="#contact">Hire Me</a></button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3"><a href="https://github.com/Diya-14/resume/" target="_blank">My Resume</a></button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 hidden md:block">
                    <div>
                        <Image src="/my-pic.png" alt="My Image" className="rounded-full" width={400} height={400}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}