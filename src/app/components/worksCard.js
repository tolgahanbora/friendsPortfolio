import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function worksCard({ title, date, body, pics, link }) {
    const isSpecialProject = title === 'Finfree' || title === 'Magin.Ai Freelance Project';

    return (
        <div className='containter mx-4 md:mx-20 my-20 px-4 md:px-10 pr-4 md:pr-20 md:justify-center md:items-start' id='worksContainer'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center md:justify-start md:items-start'>
                {/* Mobile: Image */}
                <div className='md:hidden flex justify-center'>
                    <Image src={pics} height={550} width={850} />
                </div>

                <div className='col-span-1'>
                    <div className='mr-4'>
                        <h4 className='font-bold text-lg'>{title}</h4>
                    </div>
                    <div className='mt-3'>
                        {isSpecialProject ? (
                            <h7 className='font-bold' id='date-text'>
                                {date} - <span className='present-text'>Present</span>
                            </h7>
                        ) : (
                            <h7 className='font-bold' id='date-text'>{date}</h7>
                        )}
                    </div>
                    <div className='mt-8'>
                        <p className='font-bold text-base leading-loose' id='body-text'>
                            {body}
                        </p>
                    </div>
                    <div className='mt-5'>
                        <Link href={link} className='font-bold text-base border-b pb-1' id='link-text'>
                            View Projects
                        </Link>
                    </div>
                </div>

                {/* Desktop: Image */}
                <div className='hidden md:block col-span-1 mx-2'>
                    <div className='flex justify-center'>
                        <Image src={pics} height={550} width={850} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default worksCard;
