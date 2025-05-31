import React, { useState } from "react";
import {
  CheckCircle,
  SendHorizonal,
  AlertTriangle,
  User,
  Phone,
  Mail,
  Building,
  Briefcase,
  MapPin,
  Globe,
  MessageSquare
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    organization: "",
    designation: "",
    city: "",
    country: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit contact request.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        organization: "",
        designation: "",
        city: "",
        country: "",
        message: ""
      });

      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { label: "Full Name", name: "name", icon: <User />, type: "text", placeholder: "John Doe" },
    { label: "Mobile Number", name: "mobile", icon: <Phone />, type: "tel", placeholder: "+91 9876543210" },
    { label: "Email ID", name: "email", icon: <Mail />, type: "email", placeholder: "email@example.com" },
    { label: "Organization Name", name: "organization", icon: <Building />, type: "text", placeholder: "Company / Institute" },
    { label: "Designation", name: "designation", icon: <Briefcase />, type: "text", placeholder: "Software Engineer" },
    { label: "City", name: "city", icon: <MapPin />, type: "text", placeholder: "City" },
    { label: "Country", name: "country", icon: <Globe />, type: "text", placeholder: "Country" }
  ];

  return (
    <div className="flex justify-center items-start min-h-screen p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 sm:py-8 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Contact Our Team</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Fill in your details and we'll get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6 md:p-10">
          {submitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 rounded-lg flex items-start sm:items-center gap-4">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1 sm:mt-0" size={28} />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-800">Message Sent!</h3>
                <p className="text-green-700 text-sm sm:text-base">
                  Thank you for reaching out. We'll contact you soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {error && (
                <div className="sm:col-span-2 bg-red-50 border-l-4 border-red-500 p-4 rounded flex items-start sm:items-center gap-3">
                  <AlertTriangle className="text-red-500 flex-shrink-0 mt-1 sm:mt-0" size={20} />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {fields.map((field, idx) => (
                <div key={idx} className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm sm:text-base"
                    />
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2 space-y-1">
                <label className="block text-sm font-medium text-gray-700">Requirement Details</label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <MessageSquare size={20} />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your requirements here..."
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white rounded-lg shadow-md transition duration-300 ${
                    isSubmitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <SendHorizonal size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
