"use client"
import React, { useState } from 'react';
import WorksCard from '../components/worksCard';

const personalData = [
    {
        title: "Finfree",
        date: "November 2022",
        body: "It is a full-fledged investment platform that offers the opportunity to invest in Turkish stocks with both mobile and web applications, provides free investment training and access to analysis, and provides the opportunity to access the analysis and virtual portfolios of experienced investors.",
        pics: "/Finfree2.png",
        link: "/finfree"
    },
    {
        title: "Magin.Ai Freelance Project",
        date: "February 2022",
        body: "Magin.ai is an innovative AI based image creation application. This unique platform allows users to turn their imagination into reality. Magin.ai is equipped with advanced deep learning algorithms and allows users to create different visual content such as pictures, illustrations and graphics.",
        pics: "/magin.ai.png",
        link: "/magin-ai"
    },
];



const experienceData = [
    {
        title: "Redesigning Ux/Ui Travel Design",
        date: "August 2022 - September 2022",
        body: "Coral Travel Group (OTI Holding) has been operating in the tourism sector since 1992 with 37 companies and 4300 professional employees in 22 countries and serves over 3 million tourists annually.",
        pics: "/travelplus.jpg",
        link: "/travel-design"
    },
    {
        title: "Redesigning Cinemaximum for mobile",
        date: "May 2022 - June 2022",
        body: "Cinemaximum is part of Mars Cinema Group. Mars Cinema Group was established in 2001 with the philosophy of creating a different and unique cinema experience in Turkey. Today, Mars Cinema Group has managed to become one of the largest cinema chains in Turkey, with 97 movie theaters and 848 movie theaters in 36 cities.",
        pics: "/cinemaximum.png",
        link: "/cinemaximum"
    },
    {
        title: "Ux/Ui Case Study Mobile App",
        date: "August 2022 - September 2022",
        body: "'Pizza Taste' application is a project that allows you to experience the authentic taste of a real Italian pizzeria with the comfort of your smartphone. This application is specially designed for those who love the unique pizzas of the Italian cuisine. ",
        pics: "/pizza.png",
        link: "case-study"
    },
    {
        title: "Role Plus Streaming App Design",
        date: "January 2022 - February 2022",
        body: "With this application, it is designed to enable users to reach the content they want with short and fast solutions. With role plus, which is a streaming application, it understands user needs and brings robust ux solutions to users in this direction.",
        pics: "/roleplus.png",
        link: "/role-plus"
    },

    {
        title: "Dating App Landing Page Design",
        date: "June 2022 - August 2022",
        body: "This project is also the landing page design of a dating app. It appeals to users with a title and text that encourages users to download the app. ",
        pics: "/dating.png",
        link: "/dating"
    },
]



function Work() {
    const [activeTab, setActiveTab] = useState('personal');

    const handleTabChange = (tab) => {
        console.log('Changing tab to:', tab);
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const dataToMap = activeTab === 'personal' ? personalData : experienceData;

    return (
        <div>
            <div className="toggle-button-container flex justify-center items-center h-screen">
                <div className='container flex space-x-2' id='button-Container'>
                    <button
                        className={`toggle-button ${activeTab === 'personal' ? 'active' : ''}`}
                        onClick={() => handleTabChange('personal')}
                    >

                        Experience
                    </button>
                    <button
                        type='button'
                        className={`toggle-button ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => handleTabChange('experience')}
                    >
                        Personal
                    </button>
                </div>
            </div>
            <div className='mt-12'>
                {dataToMap.map((item, index) => (
                    <WorksCard
                        key={index}
                        title={item.title}
                        date={item.date}
                        body={item.body}
                        pics={item.pics}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Work;
