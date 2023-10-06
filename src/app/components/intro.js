import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function intro() {

  const whatsappURL = 'https://wa.me/+905346060680';

  return (
    <div className="container mx-auto  px-4 md:px-8 lg:px-20 my-12">
      <div className="flex flex-col md:flex-row items-center justify-between my-10">
        <div className="w-full my-12 md:w-1/2 mb-6 md:mb-0 md:pr-6 pl-8"> {/* px-6 sınıfı sol taraftan boşluk bırakır */}
          <h6 className="text-xl font-bold">Hello There 👋</h6>
          <h2 className="text-4xl font-bold mb-4 my-3">I Am Cuma Can Polat <br />
            a UX/UI Designer</h2>
          <p className="text-lg font-medium">
            Hello, I'm Can Polat! I am an enthusiastic UI/UX Designer in user experience and UI design for websites and mobile apps. I design user-oriented web and mobile products and SaaS platforms at scale. I have experience in user research, design, wireframe creation, A/B testing, prototyping, usability testing.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <a className="custom-Button px-6 py-2 text-white font-medium flex items-center"  href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer">
              Let's Talk
              <Image
                src="/uil_message.svg"
                alt="Message Icon"
                width={30}
                height={30}
                className="ml-2"
              />
            </a>
            <Link href="https://drive.google.com/file/d/18J6YpcLXQ2uz1D5GAUcww0iL19ZVsrk4/view?usp=sharing " className="cv-Link flex items-center my-5 px-5 font-bold ">
              My cv
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
          <div className='mt-6 font-bold text-lg'>
          <div className="flex items-center space-x-5">
            <h5 className="mr-5">Check out my</h5>
       
              <a href="https://dribbble.com/cnplttt" className="block">
                <Image
                  src="/dribble.png"
                  alt="Image 1"
                  width={34}
                  height={34}
                />
              </a>
              <a href="https://www.behance.net/canpolattt/projects" className="block">
                <Image
                  src="/behance.png"
                  alt="Image 2"
                  width={34}
                  height={34}
                />
              </a>
              <a href="https://www.linkedin.com/in/can-polat-004b361b9/" className="block">
                <Image
                  src="/linkedin.png"
                  alt="Image 3"
                  width={34}
                  height={34}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="memoji w-full md:w-1/2  pl-6 flex items-center justify-end">


          <Image
            src="/memoji.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />

        </div>
      </div>
    </div>
  )
}

export default intro