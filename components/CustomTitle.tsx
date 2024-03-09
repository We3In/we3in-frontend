import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

const CustomTitle = ({
    title,
    description,
  }: {
    title: string;
    description?: string;
  }) => {
  return (
    <div className='flex flex-col items-center py-10'>
      <TextGenerateEffect words={title} />
      <p className='text-gray-600 pt-3'>{description}</p>
    </div>
  )
}

export default CustomTitle