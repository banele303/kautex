import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const businessList = [
    {
        title: "Gas Geyser Services",
        id: 1,
        Image: "/geyser2.jpg",
    },
    {
        title: "Solar Geyser Services",
        id: 1,
        Image: "/geyser1.jpg",
    },
    {
        title: "General Electrical",
        id: 1,
        Image: "/geyser7.jpg",
    },
    {
        title: "DB Box Wiring",
        id: 1,
        Image: "/geyser10.jpg",
    },
    {
        title: "Interior Painting",
        id: 1,
        Image: "/geyser8.jpg",
    },

];

function AllServices() {
    return (
        <div className='mt-5 px-[2rem] md:px-[6rem] mt-[23rem] md:mt-[15rem]'>
            <h2 className='font-bold text-[22px] py-[2rem]'>Electrical Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div key={business.id}>
                        <Image src={business.Image} alt={business.title} width={500} height={200} className='h-[350px] md:h-[200px] object-cover rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>{business.title}</h2>
                            <h2 className='font-bold text-lg'>{business.title}</h2>
                            <button className="bg-blue-500 no-underline group w-[9rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-900 py-1 px-1 ring-1 ring-white/10">
                                    <Link
                                        href="/house-remodeling"
                                        className="text-center mx-auto"
                                    >
                                        Learn More
                                    </Link>
                                    <svg
                                        fill="none"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.75 8.75L14.25 12L10.75 15.25"
                                            stroke="orange"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            </button>

                        </div>
                    </div>
                )) :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
                    ))
                }
            </div>
            <div className='py-[3rem] md:pt-[3rem] '>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3'> Trust Only Qualified Electricians to Fix Your Fault</h3>
                <p className='text-[17px] leading-7'>
                    Working with live electricity is dangerous.

                    So it&apos;s crucial to hire only qualified electricians to effectively and safely work on your fault.
                    Unfortunately, there are too many unqualified chancers who are passing themselves off as electricians. When in reality, they have received only the most basic training.
                    <br />
                    <br />
                    We&apos;re fully qualified, skilled, and trained in all new and old electric setups so you can expect fast and efficient fault fixing. Giving you an ultra-safe service while we work and complete peace of mind for you and your family after we leave.




                </p>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3 leading-7'>Detailed Investigation </h3>
                <p className='text-[17px]'>


                    A big problem with electricity installations is the recurrence of the same fault because electricians aren&apos;t investigating the issue thoroughly.
                    They fix the fault without checking to see if there&apos;s a deeper underlying problem. So you&apos;re always in danger of the problem returning or new electric supply problems appearing.
                    <br /><br />
                    AB Electrical conducts thorough investigations of your electrical problems to ensure we&apos;re fixing the entire issue, not just temporarily patching a small part of it.
                    So you can have complete peace of mind knowing your electrical installation is wired correctly and functioning 100% as it should.
                 

                </p>



            </div>


        </div>
    );
}

export default AllServices;