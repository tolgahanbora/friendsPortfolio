import React from 'react';
import CertificateCard from './certificateCard';

const certificatesData = [
    {   
        "number": 1,
        "title": "Ux Design",
        "author": "Google",
        "date": "2022"
    },
    {   
        "number": 2,
        "title": "Responsive Website Basics: Code with HTML, CSS, and JavaScript",
        "author": "London University",
        "date": "2021"
    },
    {   
        "number": 3,
        "title": "Web Design: Strategy and Information",
        "author": "London University",
        "date": "2021"
    },
]

function Certificates() {
    return (
        <div className='lg:container md:container xl:container mx-4 md:mx-20 my-12 px-4 md:px-10' id='mobilContainer'>
            <div className='mx-4 md:mx-12'>
                <h2 className='text-2xl font-bold mb-4 my-4 md:my-20' id='aboutH2'>Certificates</h2>
                {certificatesData.map((item, index) => (
                    <CertificateCard 
                        key={index}
                        number={item.number}
                        title={item.title} 
                        author={item.author}
                        date={item.date}
                    />
                ))}
            </div>
            </div>
   
    );
}

export default Certificates;
