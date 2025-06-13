import React from 'react'

const NewArrivalText = ({
    heading = 'PlayStation 5',
    description = 'Black and White version of the PS5 coming out on sale.'
}) => {
    return (
        // <div className='absolute top-0 left-0 w-full h-full object-cover bg-[#00000067] flex flex-col justify-end items-start p-10 gap-y-3'>
        //     <h3 className='text-text_white text-3xl font-poppins'>{heading}</h3>
        //     <p className='text-text_white text-sm font-thin font-poppins'>{description}</p>
        //     <button className='text-text_white text-base font-poppins pb-1 border-b-2 border-b-text_white font-normal'>Shop Now</button>
        // </div>

        <div className='absolute top-0 left-0 w-full h-full bg-[#00000067] flex flex-col justify-end items-start p-4 sm:p-6 md:p-10 gap-y-2 sm:gap-y-3'>
            <h3 className='text-text_white text-xl sm:text-2xl md:text-3xl font-poppins'>
                {heading}
            </h3>
            <p className='text-text_white text-xs sm:text-sm font-thin font-poppins'>
                {description}
            </p>
            <button className='text-text_white text-sm sm:text-base font-poppins pb-0.5 sm:pb-1 border-b border-b-text_white font-normal'>
                Shop Now
            </button>
        </div>

    )
}

export default NewArrivalText