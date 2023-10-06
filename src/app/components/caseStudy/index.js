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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image

                    src="/caseStudy/casestudy1.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Problem Statement</h5>
                    <p className='mb-11 '>Because of the covid-19 pandemic, people were eager to go out and eat out at the same time. Meanwhile, people began to try fast food in their own homes. The most tried fast food dish was pizza. In pizza making, people gave up because they could not get the same result. As a result, they started to order pizza. But here they were not very satisfied. One of the reasons for this was that the pizza deliveries were delayed due to the intensity and could not stay warm.</p>
                    <h5 className='font-bold text-lg mb-4 '>Problem Solutions</h5>
                    <p className='mb-11 '>Users will be able to reach the pizza they want with the simplest solutions without visiting another website, and they will be able to set the delivery time for their favorite pizza as they wish, with a minimum of 20 minutes. In order to avoid delivery densities, pizzas frequently ordered by everyone who logs into the application will always be kept ready. Thus, the ordered pizza will be delivered in a short time and will remain quite fresh.</p>
                    <h5 className='font-bold text-lg mb-4 '>Goal</h5>
                    <p className='mb-11 '>Making an easy-to-use app for pizza-loving people and being motivated to use it
                    </p>
                    <h5 className='font-bold text-lg mb-4 '>My Responsibility</h5>
                    <p className='mb-11 '>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping,
                        conducting usability studies, accounting for
                        accessibility, and iterating on designs.</p>
                    <h5 className='font-bold text-lg mb-4 '>My Role</h5>
                    <p className='mb-11 '>UX Research - UX/UI Designer</p>
                </div>
                <Image
                    src="/caseStudy/casestudy2.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Design Strategy</h5>
                    <p className='mb-11 '>Design strategy is the term used to describe the nexus between corporate strategy and design thinking. Corporate strategy is the traditional method that businesses and other similar entities used to identify, plan, and achieve their long term objectives and goals. </p>
                    <h5 className='font-bold text-lg mb-4 '>User Research</h5>
                    <p className='mb-11 '>Competitive analysis in marketing and strategic management is an assessment of the strengths and weaknesses of current and potential competitors.
                    </p>
                </div>
                <Image
                    src="/caseStudy/casestudy3.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Qualitative Analysisl</h5>
                    <p className='mb-11 '>Qualitative research methods step in to explore, understand, and empathize with users, and are conducted iteratively throughout the entire development process, not just during the exploratory research phase.
                    </p>
                    <ul className=" list-none space-y-5 mb-10 lg:ml-80">
                        <li><normal className="as"> Q1. </normal>How would you describe a day?
                        </li>
                        <li><normal className="as"> Q2. </normal> How often do you consume pizza?
                        </li>
                        <li><normal className="as"> Q3. </normal> What is your favorite pizza? and why?
                        </li>
                        <li><normal className="as"> Q4. </normal> What time period do you usually consume pizza?
                        </li>
                        <li><normal className="as"> Q5. </normal>  How do you buy your pizzas?
                        </li>
                        <li><normal className="as"> Q6. </normal> How often do you access online pizza apps?
                        </li>
                        <li><normal className="as"> Q7. </normal> What size pizza do you usually prefer?
                        </li>
                    </ul>

                    <h5 className='font-bold text-lg mb-4 '>Quantitative Analysis</h5>
                    <p className='mb-11 '>Quantitative research is used to collect and analyze numerical data, identify patterns, make predictions, and generalize findings about a target audience or topic. This survey was conducted with 42 people and using Google Forms.
                    </p>
                </div>
                <Image
                    src="/caseStudy/casestudy4.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Survey Insight</h5>



                </div>
                <Image
                    src="/caseStudy/casestudy5.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>User Persona</h5>
                    <p className='mb-11 '>I created a user personality suitable for the target user group. I created a fictional character representing the app's target user groups.</p>
                </div>
                <Image
                    src="/caseStudy/casestudy6.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Empathy Mapping</h5>
                    <p className='mb-11 '>Empathizing with potential users is the shortest way to understand them. By empathizing with them, a more user-experienced application will emerge.</p>
                </div>
                <Image
                    src="/caseStudy/casestudy7.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>User Journey Mapping</h5>
                    <p className='mb-11 '>Based on user research, I created a journey map to better understand the pain points, thoughts, and action users may encounter when purchasing a pizza.
                    </p>
                </div>
                <Image
                    src="/caseStudy/casestudy8.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Card Sorting</h5>
                    <p className='mb-11 '>Card sorting is a technique in user experience design in which a person tests a group of subject matter experts or users to create a dendrogram or folksonomy.
                    </p>
                </div>
                <Image
                    src="/caseStudy/casestudy9.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Information Architecture</h5>
                    <p className='mb-11 '>Information architecture is a discipline that focuses on the organization of information within digital products. For example, when designers create apps and websites, they lay out each individual screen so that the user can easily find the information they need.</p>
                </div>
                <Image
                    src="/caseStudy/casestudy10.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Low Fidelity Wireframes</h5>
                    <p className='mb-11 '>Low-fidelity prototypes are often paper-based and do not allow user interactions. They range from a series of hand-drawn mock-ups to printouts. In theory, low-fidelity sketches are quicker to create.</p>
                </div>
                <Image
                    src="/caseStudy/casestudy11.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>High Fidelity Wireframes</h5>
                    <p className='mb-11 '>High-quality prototypes
                        are detailed, interactive
                        versions of designs
                        closely match the look
                        and feel of the final
                        product.
                    </p>
                </div>
                <Image
                    src="/caseStudy/casestudy12.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
                    <h5 className='font-bold text-lg mb-4 '>Usability Testing</h5>
                    <p className='mb-11 '>I did a test with 3 users in our target audience. Users who participated in the test did not experience any difficulties while using the application and were satisfied with the design. There were a few pain points and feedback.</p>
                </div>
                <Image
                    src="/caseStudy/casestudy13.png"
                    width={700}
                    height={600}
                    alt="Picture of the author"
                />
                <div className="lg:w-3/6" style={{ textAlign: 'start', marginTop: '1rem' }}>
               

                    <div className="flex flex-row items-center mt-12">
                        <Link className="mr-2 text-md " id="behancelink" href="https://www.behance.net/gallery/143949677/Ux-Case-Study-Pizza-Lezzeti-App">
                            See on behance
                        </Link>
                        <img src="/ok.png" alt="Behance link" className='mt-1' id='ok' />
                    </div>

                </div>

            </div>
            <button className="backTop-Button rounded-full cursor-pointer scroll-button ">
                <img src='/UP.png' className='mr-1' id='up' />  <strong className='text-bold '>Back to top</strong>
            </button>
        </div>
    );
}

export default Content;
