import AboutUsContent from '@/components/AboutUsContent/AboutUsContent'
import PageDetails from '@/components/PageDetails/PageDetails'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <>
        <PageDetails pageName='About Us' pageDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos molestiae recusandae sapiente expedita autem porro praesentium vel amet veritatis!'/>
        <AboutUsContent />
    </>
  )
}