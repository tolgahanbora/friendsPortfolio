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
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <h2 className="text-xl font-bold mb-4 my-3">Redesigning Cinemaximum For Mobile</h2>
            </div>
            <div   style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image
                   
                    src="/cinemaximum/cinemaximum1.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Project Goal</h5>
                    <p className='mb-11 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>
                </div>
                <Image
                    src="/cinemaximum/cinemaximum2.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>
                </div>
                <Image
                    src="/cinemaximum/cinemaximum3.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6"  style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>
                </div>
                <Image
                    src="/cinemaximum/cinemaximum4.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 '>My goal is to make it a mobile app that helps users find the latest movies that are currently or soon to be released, show nearby cinemas, buy tickets and book seats without any hassle. The main goal of the project is to make the movie selection easy for users and to make the cinema experience perfect.</p>

                    <div className="flex flex-row items-center mt-10">
                        <Link className="mr-2 text-md " id="behancelink" href="https://www.behance.net/gallery/147687113/Cinemaximum-App-Redesign-Project">
                            See on behance
                        </Link>
                        <img src="/ok.png" alt="Behance link" className='mt-1' id='ok' />
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
