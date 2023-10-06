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
                <h2 className="text-xl font-bold mb-4 my-3">Role Plus Streaming Application Design</h2>
            </div>
            <div   style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image
                   
                    src="/roleplus/roleplus1.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>About Project</h5>
                    <p className='mb-11 '>This app is designed to enable users to reach the content they want with short and fast solutions. In this direction, a project that understands user needs has been developed.</p>
                </div>
                <Image
                    src="/roleplus/roleplus2.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                <h5 className='font-bold text-lg mb-4 '>Goal</h5>
                    <p className='mt-6 mb-11 '>My aim is to provide users with user-friendly habits and to enable them to reach the content they want in the easiest way.</p>
                </div>
                <Image
                    src="/roleplus/roleplus3.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6"  style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>It is a project made to eliminate bugs found in existing streaming applications. It was made by focusing more on the ux part than the ui part. Both the reproduction of the options in the search section and the detailing of the information related to the content on the content pages will give a more positive impression in terms of ux.</p>
                </div>
                <Image
                    src="/roleplus/roleplus4.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>

                    <div className="flex flex-row items-center mt-10">
                        <Link className="mr-2 text-md " id="behancelink" href="https://www.behance.net/gallery/139060241/Role-plus-Streaming-Mobile-App">
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
