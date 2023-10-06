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
                <h2 className="text-xl font-bold mb-4 my-3">Redesigning Ux/Ui Travel Design</h2>
            </div>
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image

                    src="/travelapp/travel1.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div   style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-10 mt-10  text-center'>Solutions</h5>
                </div>
                <Image
                    src="/travelapp/travel2.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>In this section, I aimed to design a simple, clean and understandable interface by avoiding the crowd on the current site. At the same time, I aimed to use the "sign up" button used to become a member where users are more familiar. Also, the nav header had to be placed in a hierarchy. I designed it by finding the right hierarchy for this website.</p>
                </div>
                <Image
                    src="/travelapp/travel3.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11'>In this usage, everything is as a whole, and I designed the hotel features by making it more specific, thinking that it would encourage users to choose their hotel more. The distinction can be made more easily, both in terms of hierarchy and integrity. At the same time, scrolling down continuously with the mouse cursor can tire the user. That's why I designed it with a slider layout, as I aimed for an easier experience with "horizontal scroll" and so that the homepage is not as crowded as possible and is not overwhelmed with cards</p>
                </div>
                <Image
                    src="/travelapp/travel4.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>Users want to feel more comfortable and secure when transacting on a website or application. One of the most important data for this is user comments. Although the absence of comments on the current site is not seen as a big minus, in the scenario where it is, users can do their transactions more securely. That's why I thought it was right to add a comment section.</p>
                </div>
                <Image
                    src="/travelapp/travel5.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>Users may want to explore the hotels they want to go to, examine in more detail and decide. By promoting with a video, I aimed to make the hotel selection more comfortable and encouraging. That's why I decided to design this section.
                    </p>
                </div>
                <Image
                    src="/travelapp/travel6.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div  className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <p className='mt-6 mb-11 '>In this era that we are in the mobile age, most of the users do their transactions through the application and companies encourage this. I designed this section to encourage users who visit the website to have a mobile experience by advertising the application at the same time.
                        The footer section used on the current website had a somewhat cluttered and nested look. Also, the distinction (typography) that should be made with titles was not made correctly. I aimed to get a neat look by writing the titles in a different color and with a few changes to the icon size.
                    </p>

                    <div className="flex flex-row items-center">
                        <Link className="mr-2 text-md " id="behancelink" href="https://www.behance.net/gallery/153525019/Travel-Design">
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
