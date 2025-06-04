import React from 'react'
import { PiMoneyBold } from 'react-icons/pi'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const CustomerService = () => {
    const service = [
        {
            id: 1,
            icon: <TbTruckDelivery />,
            title: 'FREE AND FAST DELIVERY',
            description: 'Free delivery for all orders over $140',
        },
        {
            id: 2,
            icon: <RiCustomerServiceFill />,
            title: '24/7 CUSTOMER SERVICE',
            description: 'Friendly 24/7 customer support',
        },
        {
            id: 3,
            icon: <PiMoneyBold />,
            title: 'MONEY BACK GUARANTEE',
            description: 'We reurn money within 30 days',
        },
    ]
    return (
        <div>
            <div className="container my-24">
                <div className='flex justify-center items-center gap-x-12'>
                    {
                    service?.map((item, index) => (                       
                        <div key={item.id} className='flex flex-col items-center'>
                            <span className='inline-block bg-black text-text_white p-3 text-3xl rounded-full border-8 border-gray-400 mb-4'>{item.icon}</span>
                            <h3 className='text-black font-bold text-xl font-poppins'>{item.title}</h3>
                            <p className='font-poppins text-sm text-black'>{item.description}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default CustomerService