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
                <h2 className="text-xl font-bold mb-4 my-3">Dating App Landing Page Design</h2>
            </div>
            <div   style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image
                   
                    src="/dating/dating.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
          
                    <p className='mb-11 '>This project is also the landing page design of a dating app. It appeals to users with a title and text that encourages users to download the app. Afterwards, a page structure was created with a section describing how the application works and a layout describing the payment plan.</p>
                </div>
              
            </div>
            <button className="backTop-Button rounded-full cursor-pointer scroll-button">
             <img src='/UP.png' className='mr-1' id='up' />  <strong className='text-bold '>Back to top</strong>
            </button>
        </div>
    );
}

export default Content;
