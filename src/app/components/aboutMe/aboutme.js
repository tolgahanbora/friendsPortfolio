import React from 'react'
import Image from 'next/image'

function aboutme() {
  return (
    <div className="container mx-auto  px-4 md:px-8 lg:px-20 my-1">
    <div className="flex flex-col md:flex-row items-center justify-between my-1">
      <div className="w-full  md:w-1/2 mb-6 md:mb-0 md:pr-6 pl-8"> {/* px-6 sınıfı sol taraftan boşluk bırakır */}
        <h2 className="text-3xl font-bold mb-4 my-3" id='aboutH2'>About me</h2>
        <p className="text-lg font-medium">
        I was born on December 30, 1997 in Istanbul. After completing my high school education, I turned to the field of graphics and won the visual communication design department of Sakarya University. In the second year of university, I started to work on ux/ui field and started to do projects in this field. In this process, I earned a certificate from google, university of london and california art institute. I have been doing my job professionally for more than 1 year and I am currently working full time at finfree, a stock market investment application.
        </p>
       
      </div>
      <div className="memoji w-full md:w-1/2  pl-6 flex items-center justify-end">


        <Image
          src="/memojiDüz.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />

      </div>
    </div>
  </div>
  )
}

export default aboutme