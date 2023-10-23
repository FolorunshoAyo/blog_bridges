import LatestPosts from '@/components/LatestPosts/LatestPosts'
import PageDetails from '@/components/PageDetails/PageDetails'
import React from 'react'
import { minifiedPostData } from '../../../data'

type Props = {}

export default function Explore({}: Props) {
  return (
    <>
        <PageDetails pageName='Explore' pageDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos molestiae recusandae sapiente expedita autem porro praesentium vel amet veritatis!' />
        {/* Blog content goes here*/}
        <div className='flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start'>
            <div className='col-span-12 lg:col-span-8'>

            </div>
            <div className='col-span-12 lg:col-span-4 flex flex-col gap-5 justify-center order-last lg:order-none'>
                <LatestPosts latestPosts={minifiedPostData}/>
                {/* Categpry here */}
            </div>
        </div>
    </> 
  )
}