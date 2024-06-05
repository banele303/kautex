import Link from "next/link";
import Image from "next/image";

import logo from "../../public/KAUTEX.png"

export default function Footer() {
    return (
        <div className="dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] ">
            <footer className="footer p-10 grid grid-cols-1 md:grid-cols-4 gap-5">
                <aside className="flex flex-row gap-[-1rem]">
                    <div className="md:mt-[-2rem] pr-[-2rem] text-white"> Kautex Electrical</div>

                    <div className="flex items-center h-[3rem] w-[4rem] md:h-[5rem] md:w-[10rem] ml-[2rem] md:ml-1 md:pl-[4rem]">
                            <Image src={logo} width={100} height={100} alt="logo" className='h-full md:h-full rounded-sm' />
                        </div>


                </aside>
                <nav className="flex flex-col">
                    <h6 className="footer-title text-semibold text-slate-200 text-[17px] ">Andavenced Painting and Painting Services</h6>

                    <p className="link link-hover text-slate-400"><Link href="/">Home</Link> </p>
                    <p className="link link-hover text-slate-400"><Link href="/about-us">Geyser services</Link> </p>
                    <p className="link link-hover text-slate-400"><Link href="/our-plumbing-services">Painting Services</Link> </p>
                    <p className="link link-hover text-slate-400"><Link href="/about-us">General Electric services</Link> </p>

                </nav>
                <nav>
                    <h6 className="footer-title  text-slate-200 text-[19px]">General Electrical</h6>
                    <p className="link link-hover text-slate-400"><Link href="/our-plumbing-services">DB Box wiring</Link> </p>
                    <p className="link link-hover text-slate-400"><Link href="/about-us">Lights</Link> </p>
                    <p className="link link-hover text-slate-400"><Link href="/about-us">All electriacal works</Link> </p>
                    <p className="link link-hover text-slate-400"><Link href="/our-plumbing-services">Roof Painting</Link> </p>

                </nav>
                <nav>
                    <h6 className="footer-title text-slate-200 text-[19px]">Legal</h6>
                    <a className="link link-hover text-slate-400">Terms of use</a>
                    <p className="link link-hover text-slate-400"><Link href="/privacy-policy">Privacy policy</Link> </p>
                    <p className="link link-hover text-slate-400"><Link href="/privacy-policy">Cookie policy</Link> </p>
                </nav>
            </footer>
            <footer className="footer items-center p-4 ext-neutral-content">
                <aside className="items-center grid-flow-col">

                    <p className="text-slate-200 mr-3 md:pl-[4rem]">Build and created by <span className="text-blue-600"> <Link href='/southflowagency.co.za'>SouthFlow Marketing Agency</Link></span>© 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>

                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </nav>
            </footer>
        </div>
    )
}