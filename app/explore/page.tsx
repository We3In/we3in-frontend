import { ContentGrid } from '@/components/ContentGrid'
import { Navbar } from '@/components/Navbar'
import { Stick } from 'next/font/google'
import React from 'react'

const page = () => (
  <div>
    <Navbar />
    <ContentGrid/>
   
  </div>
)

export default page