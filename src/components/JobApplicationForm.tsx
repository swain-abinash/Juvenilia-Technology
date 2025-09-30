import React, { useState } from "react";

interface JobApplicationFormProps {
  jobTitle: string;
  onSuccess: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files) {
      setForm((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Log all form data
    console.log('Job Application Data:', {
      jobTitle,
      name: form.name,
      email: form.email,
      phone: form.phone,
      resume: form.resume ? form.resume.name : null,
    });
    setTimeout(() => {
      setSubmitting(false);
      onSuccess();
    }, 1000); // Simulate API call
  };

  return (
    <form className="space-y-5 p-6 bg-black rounded-xl shadow-lg max-w-md mx-auto border border-orange-500" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">Job Title</label>
        <input
          type="text"
          value={jobTitle}
          readOnly
          className="w-full border border-orange-400 rounded px-3 py-2 bg-gray-900 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-orange-400 rounded px-3 py-2 bg-gray-900 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-orange-400 rounded px-3 py-2 bg-gray-900 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border border-orange-400 rounded px-3 py-2 bg-gray-900 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">Resume (any format)</label>
        <input
          type="file"
          name="resume"
          accept="*"
          onChange={handleChange}
          required
          className="w-full text-orange-200 file:bg-orange-500 file:text-white file:rounded file:px-3 file:py-1 file:border-0 file:mr-3 bg-gray-900 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-2 rounded-lg font-bold hover:from-orange-600 hover:to-orange-800 transition"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default JobApplicationForm;
