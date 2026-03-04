import React from 'react'
import Person from "@/public/loans1.jpg"
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className="bg-secondary mt-16 mx-4 md:max-w-3/4 md:mx-auto px-4 py-16 md:p-24 rounded-4xl flex items-center gap-10 flex-col md:flex-row">
        <Image src={Person} width={240} alt="person" className="w-full rounded-xl" />
        <div>
            <p className='text-white text-2xl font-semibold mb-2'>❝The business loan helped me restock my shop just before the holiday season. The process was transparent and the staff truly cared about my success.❞</p>
            <p>Christine Maina, Small Business Owner</p>
        </div>
    </div>
  )
}

export default Testimonials