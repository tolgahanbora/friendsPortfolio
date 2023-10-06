import React from 'react';

function latest() {
    return (
        <div className='container mx-auto px-4 md:px-8 lg:px-20 my-12'>
            <div className='flex flex-col md:flex-row items-center justify-between my-1 mx-7'>
                <div className='mb-4 md:mb-0'>
                    <div className='content flex items-center'>
                        <div className='details'>
                            <h3 className='text-lg font-bold my-2 companyH3'>Latest Behance</h3>
                            <p className="font-medium my-4 md:my-7">
                                Follow my design journey on Behance and feel free to<br />
                                message me anytime: <span className='present-text'>@canpolattt</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 md:mb-0'>
                    <div className='content flex items-center'>
                        <div className='details'>
                            <h3 className='text-lg font-bold my-2 companyH3'>Latest Dribbble</h3>
                            <p className="font-medium my-4 md:my-7">
                                Follow my design journey on Dribbble and feel free to<br />
                                message me anytime: <span className='present-text'>@cnplttt</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default latest;
