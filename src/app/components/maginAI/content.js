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
                <h2 className="text-3xl font-bold mb-4 my-3">Magin.Ai</h2>
                <h7 className="font-medium " id="date-text">February 2023 - <span className='present-text'>Present</span></h7>
                <div className="lg:w-3/6 mx-auto text-center mb-10 mt-5">
                    <p className='text-center font-bold '>

                        Magin.ai offers users a unique experience that will take them beyond their creative potential. It is an application that paves the way for creativity in a wide range from visual effects to image processing, from style transfer to automatic drawing.
                    </p>
                </div>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image

                    src="/maginAI/1.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
          
                    <p className='mb-11 '>Whether you're an artist, designer or a curious visual creator, this app will put your imagination into reality. Thanks to high learning algorithms and cutting-edge deep learning techniques, you will be able to create unique and aesthetically impressive visuals inspired by photos, drawings or text.</p>
                </div>
                <Image
                    src="/maginAI/2.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>Because there is no limit to their creativity, users get a powerful tool to tell their visual stories and create new and original works by pushing the boundaries of digital art. This app simplifies the visual creation process, transporting users to an inspiring experience for their own artistic exploration.</p>
                </div>
                <Image
                    src="/maginAI/3.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>Opening new horizons in the world of art and design, allowing users to create more impressive and original visuals. By spreading the power of art and creativity to wider audiences, this application strengthens everyone's ability to express themselves and allows new talents to emerge in the field of visual arts.</p>


                    <div className='content flex items-center mt-20 mb-20'>
                        <div className='image mr-10'>
                            <img src='/maginAI/memoji.png' alt='Sol Görsel' className="h-30" />
                        </div>
                        <div className='details'>
                
                            <p className='mb-7'>Opening new horizons in the world of art and design, allowing users to create more impressive and original visuals. By spreading the power of art and creativity to wider audiences, this application strengthens everyone's ability to express themselves and allows new talents to emerge in the field of visual arts.</p>

                            <Link href="https://app.finfree.co/">
                            <img src='/maginAI/artwork.png' id='memojs31' alt='Sol Görsel' className="h-11" />
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
