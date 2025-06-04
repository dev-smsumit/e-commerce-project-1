import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import qrCode from '../../../assets/footer/Qrcode.png'
import gplay from '../../../assets/footer/gplay.png'
import appstore from '../../../assets/footer/appstore.png'

const Footer = () => {
    return (
        <div className='bg-black py-24'>
            <div className='container text-text_white font-poppins flex justify-between items-start gap-x-10'>
                <div className='w-1/5 flex flex-col items-start gap-y-2'>
                    <h3 className='text-4xl mb-5 uppercase'>Exclusive</h3>
                    <h5 className='text-2xl'>Subscribe</h5>
                    <p>Get 10% off your first order</p>
                    <form action="#" className='p-2 rounded-md border-2 border-white flex'>
                        <input type="text" placeholder='Enter your email' className='bg-transparent placeholder:text-xs' />
                        <button><AiOutlineSend className='text-xl' /></button>
                    </form>
                </div>
                <div className='w-1/5 flex flex-col items-start gap-y-5'>
                    <h4 className='text-2xl'>Support</h4>
                    <div className='text-sm'>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                </div>
                <div className='w-1/5 flex flex-col items-start gap-y-5'>
                    <h4 className='text-2xl'>Account</h4>
                    <ul className='flex flex-col items-start gap-y-1'>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className='w-1/5 flex flex-col items-start gap-y-5'>
                    <h4 className='text-2xl'>Quick Link</h4>
                    <ul className='flex flex-col items-start gap-y-1'>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='w-1/5 flex flex-col items-start gap-y-5'>
                    <h4 className='text-2xl'>Download App</h4>
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-xs'>Save $3 with App New User Only</p>
                        <div className='flex justify-start gap-x-2'>
                            <div className="w-1/2">
                                <img src={qrCode} alt={qrCode} className='w-full h-full' />
                            </div>
                            <div className="w-1/2 flex flex-col gap-y-2">
                                <div className='h-1/2'>
                                    <img src={gplay} alt={gplay} className='w-full h-full' />
                                </div>
                                <div className='h-1/2'>
                                    <img src={appstore} alt={appstore} className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer