import PageDetails from '@/components/PageDetails/PageDetails'
import Image from 'next/image'
import React from 'react'
import { decodeURLParameter } from '../../../../util/helpers'
import ProfileTabNavigation from '@/components/ProfileTabNavigation/ProfileTabNavigation'

type Props = {
  params: {
    username: string
  }
}

export default function Author({ params: { username } }: Props) {

  const decodedUrl = decodeURLParameter(username);
  let finalUsername;

  if(decodedUrl.charAt(0) === "@"){// Check if the "@" character is at the front of thedecoded parameter
    finalUsername = decodedUrl.replace(/^@/g, "");
  }else{
    finalUsername = username;
  }

  // After checks, interact with the database to fetch user information
  return (
    <main>
        <PageDetails pageName='Author' pageDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos molestiae recusandae sapiente expedita autem porro praesentium vel amet veritatis!' />
        {/* Blog content goes here*/}
        <section className='container mx-auto px-5 md:px-0 my-12'>
          <div className='gap-4 mb-8 flex flex-col justify-center items-center md:flex-row md:justify-start'>
            <div>
              <Image
              src="/travel.jpg"
              alt='Some alt content'
              height={100} 
              width={100}
              className="h-32 w-32 rounded-full" 
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-sm md:text-lg lg:text-2xl'>Shodiya Folorunsho - <span>@{finalUsername}</span> <span className='text-sm md:text-base ml-2 bg-primary text-white py-1 px-2 rounded-sm shadow-sm'>Writer</span></h1>
              <p className='text-xs md:text-sm text-primary flex items-center justify-center md:justify-start'>51 posts<span className='font-bold text-base mx-2'>|</span>7.4k followers<span className='font-bold text-base text-base mx-2'>|</span>851 following</p>
              <button className="p-2 border border-secondary rounded-lg text-gray text-sm hover:bg-primary hover:text-white hover:border-primary transition duration-300">Follow</button>
            </div>
          </div>
          <ProfileTabNavigation />
        </section>
    </main>
  )
}