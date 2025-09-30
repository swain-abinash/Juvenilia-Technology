import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

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
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
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

// Component for Contact Information (compact, aligned cards)
const ContactInfo: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your services. Can we discuss my project requirements?";
    const phoneNumber = "+91 9437010139";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919437010139', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:support@juveniliatechnology.com?subject=Project Inquiry', '_self');
  };

  return (
    <div className="space-y-8">
      {/* Primary contact actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <motion.button
          type="button"
          className="h-full w-full flex flex-col items-start text-left p-6 bg-gray-800 rounded-xl shadow-lg focus:outline-none"
          whileHover={{ y: -4 }}
          onClick={handleWhatsAppClick}
        >
          <WhatsAppIcon />
          <h3 className="text-base md:text-lg font-semibold text-green-500 mt-4">WhatsApp</h3>
          <p className="text-sm text-gray-300 mt-1">Quick Chat</p>
          <span className="text-xs text-green-400 mt-2">Tap to message</span>
        </motion.button>

        <motion.button
          type="button"
          className="h-full w-full flex flex-col items-start text-left p-6 bg-gray-800 rounded-xl shadow-lg focus:outline-none"
          whileHover={{ y: -4 }}
          onClick={handleCallClick}
        >
          <PhoneIcon />
          <h3 className="text-base md:text-lg font-semibold text-orange-500 mt-4">Phone</h3>
          <p className="text-sm text-gray-300 mt-1">+91 9437010139</p>
          <span className="text-xs text-orange-400 mt-2">Tap to call</span>
        </motion.button>

        <motion.button
          type="button"
          className="h-full w-full flex flex-col items-start text-left p-6 bg-gray-800 rounded-xl shadow-lg focus:outline-none"
          whileHover={{ y: -4 }}
          onClick={handleEmailClick}
        >
          <MailIcon />
          <h3 className="text-base md:text-lg font-semibold text-orange-500 mt-4">Email</h3>
          <p className="text-sm text-gray-300 mt-1">support@juveniliatechnology.com</p>
          <span className="text-xs text-orange-400 mt-2">Tap to email</span>
        </motion.button>
      </div>

      {/* Offices and hours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="h-full p-6 bg-gray-800 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <LocationIcon />
            <h3 className="text-base md:text-lg font-semibold text-orange-500">Our Offices</h3>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <p className="font-semibold text-white">Bhubaneswar Office</p>
              <p className="mt-1">Plot No – A/54, Saheed Nagar</p>
              <p>Opp. Side of DDCE Utkal University</p>
              <p>Bhubaneswar - 751004</p>
            </div>
            <div>
              <p className="font-semibold text-white">Cuttack Office</p>
              <p className="mt-1">Plot No-1344, Mahanadi Bihar</p>
              <p>Cuttack-753004</p>
            </div>
          </div>
        </div>

        <div className="h-full p-6 bg-gray-800 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <ClockIcon />
            <h3 className="text-base md:text-lg font-semibold text-orange-500">Working Hours</h3>
          </div>
          <div className="mt-4 text-sm text-gray-300">
            <p>Monday to Saturday</p>
            <p className="mt-1">7:00 AM – 7:00 PM (IST)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Contact Form
const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^[0-9+\-\s()]+$/, 'Phone number is not valid').required('Phone number is required'),
    company: Yup.string(),
    projectType: Yup.string().required('Please select a project type'),
    budget: Yup.string(),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className="p-8 bg-gray-800 rounded-xl shadow-lg text-left">
      <h2 className="text-3xl font-bold text-white mb-2">Fill out the form below</h2>
      <p className="text-gray-300 mb-6">Our team will get back to you within 24 hours.</p>
      <Formik
        initialValues={{ 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          projectType: '', 
          budget: '', 
          subject: '', 
          message: '' 
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // In a real application, you would handle form submission here
          console.log(values);
          setTimeout(() => {
            setIsSubmitted(true);
            resetForm();
            setSubmitting(false);
            setTimeout(() => setIsSubmitted(false), 5000);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg"
              >
                <p className="text-green-400 text-center font-semibold">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
            
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 text-left">Full Name *</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 text-left">Email Address *</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1 text-left">Phone Number *</label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1 text-left">Company Name</label>
                <Field
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
                <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-1 text-left">Project Type *</label>
                <Field
                  as="select"
                  name="projectType"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="software-development">Software Development</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="projectType" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-1">Budget Range</label>
                <Field
                  as="select"
                  name="budget"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under ₹10,000</option>
                  <option value="10k-50k">₹10,000 - ₹50,000</option>
                  <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                  <option value="1lakh-5lakh">₹1,00,000 - ₹5,00,000</option>
                  <option value="above-5lakh">Above ₹5,00,000</option>
                </Field>
                <ErrorMessage name="budget" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1 text-left">Subject *</label>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Brief description of your inquiry"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1 text-left">Message *</label>
                <Field
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project requirements, goals, and any specific needs..."
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-bold bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Start Your Journey with Us'}
                </button>
              </div>
            </Form>
          </>
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
