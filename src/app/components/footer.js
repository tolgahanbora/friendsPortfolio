import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="container mx-auto my-7 px-4 md:px-8 lg:px-20">
            <div className="flex items-center justify-between mx-15">
                <div className="ml-2 md:ml-8">
                    <img src="/can..png" alt="Logo" className="h-7" />
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="https://dribbble.com/cnplttt">
                        <img src="/dribble.png" alt="Icon 1" className="h-8" />
                    </Link>
                    <Link href="https://www.behance.net/canpolattt/projects">
                        <img src="/behance.png" alt="Icon 2" className="h-8" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/can-polat-004b361b9/">
                        <img src="/linkedin.png" alt="Icon 3" className="h-8" />
                    </Link>
                    <Link href="mailto: ccp.polatt@gmail.com">
                        <img src="/mail.png" alt="Icon 4" className="h-8" />
                    </Link>
                </div>
            </div>
            <div className='border-t-2 border-gray-300 mt-5 ' id='border-footer'>

                <div className='text-center mt-3 justify-center' >
                    <p className='f font-medium'>
                        2023 © Crafted in Istanbul by Cuma Can Polat
                    </p>

                </div>

            </div>
        </footer>
    )
}

export default Footer;
