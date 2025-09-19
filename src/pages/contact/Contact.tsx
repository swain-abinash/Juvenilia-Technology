import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// The following are inline SVG icons for a single-file app
// They are used to represent the contact information.
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2h-1.64a2 2 0 0 1-1.82-1.39l-2-6a2 2 0 0 1 1.76-2.73 1.99 1.99 0 0 1 .49-.12l4-1a2 2 0 0 1 1.48 2.05z"></path><path d="M12.9 8.28a2 2 0 0 1 2.83 0l2.5 2.5a2 2 0 0 1 0 2.83l-5 5a2 2 0 0 1-2.83 0l-2.5-2.5a2 2 0 0 1 0-2.83z"></path></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

// Component for the Headline and Intro
const ContactHero: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        Let’s Build Something Great Together
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        Have a project in mind or need expert IT solutions? We’d love to hear from you. Get in touch with our team today, and let’s explore how we can help your business grow.
      </p>
    </div>
  );
};

// Component for Contact Information
const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <LocationIcon />
        <h3 className="text-lg font-semibold text-orange-500 mt-4">Office Address</h3>
        <p className="text-gray-300 mt-2">
          Juvenilia Technologies Pvt Ltd, [Your City, State, Country]
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <PhoneIcon />
        <h3 className="text-lg font-semibold text-orange-500 mt-4">Phone</h3>
        <p className="text-gray-300 mt-2">+91-XXXXXXXXXX</p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <MailIcon />
        <h3 className="text-lg font-semibold text-orange-500 mt-4">Email</h3>
        <p className="text-gray-300 mt-2">contact@juvenilia.com</p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <ClockIcon />
        <h3 className="text-lg font-semibold text-orange-500 mt-4">Working Hours</h3>
        <p className="text-300 mt-2">Mon–Fri, 9:00 AM – 6:00 PM (IST)</p>
      </div>
    </div>
  );
};

// Component for the Contact Form
const ContactForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Phone number is not valid').required('Phone number is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className="p-8 bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-2">Fill out the form below</h2>
      <p className="text-gray-300 mb-6">Our team will get back to you within 24 hours.</p>
      <Formik
        initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // In a real application, you would handle form submission here
          console.log(values);
          setTimeout(() => {
            alert('Form submitted successfully!');
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
              <Field
                type="text"
                name="phone"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
              <Field
                type="text"
                name="subject"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <Field
                as="textarea"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-bold bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Main Contact Page Component
const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <ContactHero />
        </div>
        <div className="space-y-16">
          <ContactInfo />
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
