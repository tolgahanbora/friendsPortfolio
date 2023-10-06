import React from 'react';

function Companys() {

  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-20 my-1'>
    <div className='flex flex-col md:flex-row items-center justify-between my-1 mx-7'>
        <div className='mb-4 md:mb-0'>
            <div className='header'>
                <h2 className='text-2xl font-bold mb-4 my-3' id='aboutH2'>Current Company</h2>
            </div>
            <div className='content flex items-center'>
            <div className='image mr-4'>
              <img src='/Finfree.png' alt='Sol Görsel' className="h-20" id='finfreeMobilLogo'/>
            </div>
            <div className='details'>
              <h3 className='text-md font-bold my-2 companyH3'>UX/UI Designer at Finfree </h3>
              <p className="font-medium" id="date-text2">November 2022 - <span className='present-text'>Present</span>  Istanbul, Turkey</p>
              <p className="font-medium my-2">Responsible for UX/UI developments for mobile<br />
                app and website.</p>
            </div>
          </div>
        </div>
        <div className='mt-4 md:mt-0'>
                    <div className='header'>
                        <h2 className='text-2xl font-bold mb-4 my-2' id='freelanceH2'>Freelance</h2>
                    </div>
                    <div className='content flex items-center'>
            <div className='image mr-4'>
              <img src='/freelance.png' alt='Sağ Görsel' className="h-20"  id='freelanceMobilLogo'/>
            </div>
            <div className='details'>
              <h3 className='text-md font-bold my-2 companyH3'>UX/UI Designer</h3>
              <p className="font-medium" id="date-text">February 2022 - <span className='present-text'>Present</span></p>
              <p className="font-medium my-2">As a freelancer, I develop ui/ux solutions and<br/>
                 bring my creative ideas to life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companys;
