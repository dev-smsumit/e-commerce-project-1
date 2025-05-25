import React from 'react'
import ProductCommonLayout from '../../commonComponents/ProductCommonLayout'
import playStation from '../../../assets/secondBanner/playStation.png'
import womanHat from '../../../assets/secondBanner/womanHat.png'
import speaker from '../../../assets/secondBanner/speaker.png'
import perfume from '../../../assets/secondBanner/perfume.png'
import NewArrivalText from '../../commonComponents/NewArrivalText'


const NewArrival = () => {
    return (
        <div className='container'>
            <div>
                <ProductCommonLayout
                    heading='Featured'
                    description='New Arrivals'
                />
            </div>
            <div className='w-full h-[600px] flex gap-x-8 mb-10'>
                <div className='w-1/2 h-full bg-black relative'>
                    <img src={playStation} alt={playStation} className='absolute top-0 left-0 w-full h-full object-cover' />
                    <NewArrivalText
                        heading='PlayStation 5'
                        description='Black and White version of the PS5 coming out on sale.'
                    />
                </div>
                <div className='w-1/2 h-full flex flex-col gap-y-8'>
                    <div className="w-full h-1/2 bg-black relative">
                        <img src={womanHat} alt={womanHat} className='w-full h-[284px] object-cover' />
                        <NewArrivalText
                            heading='Women’s Collections'
                            description='Featured woman collections that give you another vibe.'
                        />
                    </div>
                    <div className="w-full h-[50%] flex gap-x-8">
                        <div className="w-1/2 h-full bg-black relative">
                            <img src={speaker} alt={speaker} className='w-[270px] h-[284px] object-cover' />
                            <NewArrivalText
                                heading='Speakers'
                                description='Amazon wireless speakers'
                            />
                        </div>
                        <div className="w-1/2 h-full bg-black relative">
                            <img src={perfume} alt={perfume} className='w-[270px] h-[284px] object-cover' />
                            <NewArrivalText
                                heading='Perfume'
                                description='GUCCI INTENSE OUD EDP'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival
