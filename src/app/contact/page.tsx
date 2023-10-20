import ContactForm from '@/components/ContactForm/ContactForm'
import Header from '@/components/Header/Header'
import PageDetails from '@/components/PageDetails/PageDetails'
import React from 'react'

export default function Contact() {
  return (
    <>
       <PageDetails pageName='Contact' pageDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos molestiae recusandae sapiente expedita autem porro praesentium vel amet veritatis!' />
       <ContactForm />
    </>
  )
}