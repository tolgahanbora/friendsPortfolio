"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';




function Content() {


    useEffect(() => {
        const scrollButton = document.querySelector('.scroll-button');

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        if (scrollButton) {
            scrollButton.addEventListener('click', scrollToTop);
        }

        return () => {
            if (scrollButton) {
                scrollButton.removeEventListener('click', scrollToTop);
            }
        };
    }, []);


    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem', justifyContent: "center" }}>
                <h2 className="text-3xl font-bold mb-4 my-3">Finfree</h2>
                <h7 className="font-medium " id="date-text">November 2022 - <span className='present-text'>Present</span></h7>
                <div className="lg:w-3/6 mx-auto text-center mb-10 mt-5">
                    <p className='text-center font-bold '>

                        With Finfree, you can trade on Borsa Istanbul and American Stock Exchanges and access all company analysis reports. With Finfree, you can access all company analyzes in Borsa Istanbul and access the financial ratios of the shares.
                    </p>
                </div>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image

                    src="/finfree/1.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Project Goal</h5>
                    <p className='mb-11 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>
                </div>
                <Image
                    src="/finfree/3.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>
                </div>
                <Image
                    src="/finfree/4.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>
                </div>
                <Image
                    src="/finfree/5.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>




                    <div className='content flex items-center mt-10 mb-10'>
                        <div className='image mr-10'>
                            <img src='/finfree.png' alt='Sol Görsel' className="h-15" />
                        </div>
                        <div className='details'>
                            <h3 className='text-md font-bold my-2 companyH3 '>See More</h3>
                            <p className='mb-3'>See more on the website to explore in more detail the unique features Finfree has to offer, unlocking enhanced functionality and unique experiences.</p>

                            <Link href="https://app.finfree.co/">
                                <span className='linkText'>
                                    https://app.finfree.co/
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>



            </div>



            <button className="backTop-Button rounded-full cursor-pointer scroll-button">
                <img src='/UP.png' className='mr-1' id='up' />  <strong className='text-bold '>Back to top</strong>
            </button>
        </div>
    );
}

export default Content;
