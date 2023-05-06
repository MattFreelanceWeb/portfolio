import Image from 'next/image'
import React from 'react'
import ShoutingStar from '@/assets/starGif.gif'
type Props = {}

function Loader({}: Props) {
// utiliser framer motion pour lancer le loader et le faire disparaitre au bout de 1s
  return (
    <div className='fixed top-0 left-0 h-screen w-screen z-[999] duration-500 opacity-0'>
        <Image src={ShoutingStar} alt='' className='w-full h-full object-cover '/>
    </div>
  )
}

export default Loader