"use client"
import Link from "next/link";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset validation errors for the field being edited
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Partial<FormData> = {};

    // Name validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Name validation
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
      isValid = false;
    }

    // Email validation
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Submit the form or handle your form submission logic here
      console.log(formData);
    }
  };

  // Helper function to validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  return (
    <section className="container mx-auto py-10 px-4 md:my-10">
      <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-bold">Get in Touch</h2>  
      <p className="text-sm md:text-base mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div className="my-10 flex flex-col md:flex-row items-center gap-5">
        <div className="border border-base-content/10 rounded-xl p-6 font-work w-full">
          <h6 className="text-base-content font-semibold text-2xl">Address</h6>
          <p className="mt-4 text-lg text-base-content/70">1328 Oak Ridge Drive, Saint Louis, <br /> Missouri - 63102</p>
        </div>
        <div className="border border-base-content/10 rounded-xl p-6 font-work w-full">
          <h6 className="text-base-content font-semibold text-2xl">Contact</h6>
          <p className="mt-4 text-lg text-base-content/70">313-332-8662 <br/> info@jstemplate.net</p>
        </div>
      </div>
      <div className="bg-gray-light rounded-xl p-8 md:p-12">
        <h2 className="text-xl md:text-2xl leading-6 font-bold text-base-content mb-8">Leave a Message</h2>
        <form  onSubmit={handleSubmit}>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-5 mb-4">
            <div className="w-full">
              <input className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40" type="text" placeholder="Your Name" name="name"  value={formData.name}
                onChange={handleChange} />
              {errors.name && (
                <p className="text-red text-sm mt-2">{errors.name}</p>
              )}
            </div>
            <div className="w-full">
              <input className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40" type="email" placeholder="Your Email" name="email" value={formData.email}
                onChange={handleChange}/>
              {errors.email && (
                <p className="text-red text-sm mt-2">{errors.email}</p>
              )}
            </div>
          </div>
          
          <input className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40" type="tell" placeholder="Phone number" name="phone" value={formData.phone}
              onChange={handleChange} />
          {errors.phone && (
            <p className="text-red text-sm mt-2">{errors.phone}</p>
          )}    
          <textarea className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10 px-3 md:px-4 py-2.5 md:py-3 placeholder:text-sm md:placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40 h-36 mt-4" placeholder="Write your message..." name="message" value={formData.message}
              onChange={handleChange}></textarea>
          {errors.message && (
            <p className="text-red text-sm mt-2">{errors.message}</p>
          )}
          <p className="text-sm md:text-base text-base-content text-opacity-70 mt-2">We care about your data in our <Link className="font-medium text-primary hover:underline transition hover:text-opacity-80 duration-300 ease-in-out ml-1" href="/">Privacy Policy</Link></p>
          <button type="submit" className="capitalize rounded-md bg-primary text-white text-sm md:text-base font-medium px-5 py-3.5 mt-6 hover:bg-opacity-80 transition duration-300 ease-in-out">Send Message</button>
        </form>
      </div>
    </section>
  );
};

