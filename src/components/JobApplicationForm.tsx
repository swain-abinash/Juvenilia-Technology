import React, { useState } from "react";

interface JobApplicationFormProps {
  jobTitle: string;
  onSuccess: () => void;
  onClose: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  jobTitle,
  onSuccess,
  onClose,
}) => {
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

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setSubmitting(true);

//   try {
//     const body = new FormData();
//     body.append("formType", "jobapply");
//     body.append("jobTitle", jobTitle);
//     body.append("name", form.name);
//     body.append("email", form.email);
//     body.append("phone", form.phone);

//     // ✅ Append file directly (any type)
//     if (form.resume) {
//       body.append("resume", form.resume, form.resume.name);
//     }

//     const res = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       body,
//     });

//     const text = await res.text();
//     console.log("Raw response:", text);

//     let result;
//     try {
//       result = JSON.parse(text);
//     } catch {
//       throw new Error("Server did not return valid JSON: " + text);
//     }

//     if (result.result === "success") {
//       // alert("Application Submitted!");
//       setForm({ name: "", email: "", phone: "", resume: null });
//       onSuccess();
//     } else {
//       alert("Error: " + result.error);
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong!");
//   } finally {
//     setSubmitting(false);
//   }
// };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setSubmitting(true);

//   try {
//     let resumeBase64 = "";
//     let resumeName = "";

//     if (form.resume) {
//       resumeName = form.resume.name;
//       const reader = new FileReader();
//       resumeBase64 = await new Promise<string>((resolve, reject) => {
//         reader.onload = () => {
//           const result = reader.result as string;
//           resolve(result.split(",")[1]); // only Base64 part
//         };
//         reader.onerror = reject;
//         reader.readAsDataURL(form.resume);
//       });
//     }

//     const body = new FormData();
//     body.append("formType", "jobapply");
//     body.append("jobTitle", jobTitle);
//     body.append("name", form.name);
//     body.append("email", form.email);
//     body.append("phone", form.phone);
//     if (resumeBase64 && resumeName) {
//       body.append("resumeBase64", resumeBase64);
//       body.append("resumeName", resumeName);
//     }

//     const res = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, { method: "POST", body });
//     const result = await res.json();

//     if (result.result === "success") {
//       alert("Application Submitted!");
//       setForm({ name: "", email: "", phone: "", resume: null });
//       onSuccess();
//     } else {
//       alert("Error: " + result.error);
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong!");
//   } finally {
//     setSubmitting(false);
//   }
// };





const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    let resumeBase64 = "";
    let resumeName = "";
    let resumeType = ""; // <-- declare resumeType here

    if (form.resume) {
      resumeName = form.resume.name;
      resumeType = form.resume.type; // get MIME type of the file

      const reader = new FileReader();
      resumeBase64 = await new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1]); // only Base64 part
        };
        reader.onerror = reject;
        reader.readAsDataURL(form.resume);
      });
    }

    const body = new FormData();
    body.append("formType", "jobapply");
    body.append("jobTitle", jobTitle);
    body.append("name", form.name);
    body.append("email", form.email);
    body.append("phone", form.phone);

    if (resumeBase64 && resumeName && resumeType) {
      body.append("resumeBase64", resumeBase64);
      body.append("resumeName", resumeName);
      body.append("resumeType", resumeType); // send MIME type to Apps Script
    }

    const res = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
      method: "POST",
      body,
    });

    const result = await res.json();
    console.log("Server response:", result);

    if (result.result === "success") {
      setForm({ name: "", email: "", phone: "", resume: null });
      onSuccess();
    } else {
      alert("Error: " + result.error);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  } finally {
    setSubmitting(false);
  }
};



  return (
    <form
      className="space-y-5 p-6 bg-black rounded-xl shadow-lg max-w-md mx-auto border border-orange-500 relative"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="formType" value="jobapply" />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 text-orange-400 hover:text-orange-600 text-lg font-bold px-2 py-1 rounded focus:outline-none"
        aria-label="Close form"
      >
        ×
      </button>

      <div>
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">
          Job Title
        </label>
        <input
          type="text"
          value={jobTitle}
          readOnly
          className="w-full border border-orange-400 rounded px-3 py-2 bg-gray-900 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">
          Name
        </label>
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
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">
          Email
        </label>
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
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">
          Phone
        </label>
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
        <label className="block text-sm font-semibold text-left text-orange-400 mb-1">
          Resume (any format)
        </label>
        <input
  type="file"
  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" // allow all docs + images
  onChange={(e) =>
    setForm({ ...form, resume: e.target.files ? e.target.files[0] : null })
  }
/>

        {/* <input
          type="file"
          name="resume"
          accept="*"
          onChange={handleChange}
          required
          className="w-full text-orange-200 file:bg-orange-500 file:text-white file:rounded file:px-3 file:py-1 file:border-0 file:mr-3 bg-gray-900 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        /> */}
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
