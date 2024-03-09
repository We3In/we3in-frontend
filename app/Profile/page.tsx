import { DialogDemo } from '@/components/DialogDemo'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { Anybody } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
    <div className='flex flex-col justify-between items-center'>
        <div className='mt-20 flex-col flex items-center'>

        {/* image gelecek   */}
        <h1 className='text-3xl font-bold my-2'>Güneş Yılmaz</h1>
        <p className='text-md text-secondary'>Wallet Address: 12ed08h6fkz0a628mxu</p> 
        
        
        </div>
        <DialogDemo/>
    </div>
    <div className='flex justify-center items-center'>
      <div className='flex justify-between w-3/4 bg-background border rounded-md p-4'>
        <div className='flex'>    
        <p className='p-4'> 
          <AnimatedTooltip />
        </p>
        <div className='flex flex-col'>
        <p>Challenge Name</p>
      <p>Challenge Descripton</p>
        </div>
        </div>
        <p>price</p>
      </div>
    </div>
    </div>
  )
}

export default page