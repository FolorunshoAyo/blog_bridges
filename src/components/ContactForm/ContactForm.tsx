"use client"
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
      <div className="p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg lg:w-3/4 p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border border-gray rounded focus:outline-none focus:border-blue-400 ${
                errors.name ? "border-red" : ""
              }`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border border-gray rounded focus:outline-none focus:border-blue-400 ${
                errors.email ? "border-red" : ""
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-2 border border-gray rounded focus:outline-none focus:border-blue-400 ${
                errors.message ? "border-red" : ""
              }`}
              rows={5}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary bg-opacity-50 text-white py-2 px-4 rounded hover:bg-opacity-80 focus:outline-none transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

