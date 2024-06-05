import Image from "next/image";
import { Form } from "./ul/form";


export default function WhyUS() {
    return (
        <div className="px-[2rem] md:px-[5rem]">

            <section className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">

                <div>
                    <h3 className="text-blue-700 text-[17px] font-bold">WHY USE KAUTEX ELECTRICIANS?</h3>
                    <h3 className="text-gray text-[38px] font-extrabold">OVER 15 YEARS OF EXPERIENCE</h3>
                    <ul className="pt-4 text-[20px]">
                        <li className=" flex  flex-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mt-[-4px] text-blue-500 pr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                            Fast Response
                        </li>
                        <li className=" flex  flex-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mt-[-4px] text-blue-500 pr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                            Dedicated Electricians
                        </li>
                        <li className=" flex  flex-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mt-[-4px] text-blue-500 pr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                            Affordable Rates
                        </li>
                        <li className=" flex  flex-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mt-[-4px] text-blue-500 pr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                            Wide Range Of Electrical Services
                        </li>
                        <li className=" flex  flex-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mt-[-4px] text-blue-500 pr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                            Fast Response
                        </li>
                    </ul>
                </div>
                <div><Form /></div>

            </section>

        </div>
    );
}
