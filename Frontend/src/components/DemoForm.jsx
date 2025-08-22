import React, { useState } from "react";
import { CheckCircle, SendHorizonal, AlertTriangle } from "lucide-react";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    organization: "",
    designation: "",
    city: "",
    country: "",
    demoRequirement: "",
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
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit demo request.");
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
        demoRequirement: "",
      });

      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Schedule Your Personalized Demo
          </h2>
          <p className="text-blue-100 text-lg">
            Tell us about your needs and our experts will tailor a demonstration just for you
          </p>
        </div>

        {/* Form Section */}
        <div className="p-6 md:p-10">
          {submitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg flex items-center">
              <CheckCircle className="text-green-500 mr-4 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Request Submitted!</h3>
                <p className="text-green-700">
                  Thanks for your interest. Our team will contact you shortly to schedule your demo.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {error && (
                <div className="md:col-span-2 bg-red-50 border-l-4 border-red-500 p-4 rounded flex items-center mb-4">
                  <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="+91 9876543210"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Organization</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Company / Institute"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <input
                  type="text"
                  name="designation"
                  placeholder="e.g. Product Manager"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="block text-sm font-medium text-gray-700">What are you looking for in the demo?</label>
                <textarea
                  name="demoRequirement"
                  placeholder="Please describe your specific requirements or areas of interest..."
                  value={formData.demoRequirement}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium px-8 py-3 rounded-lg flex items-center space-x-2 hover:from-blue-700 hover:to-indigo-800 transition duration-300 shadow-lg ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <span>{isSubmitting ? "Submitting..." : "Submit Request"}</span>
                  {!isSubmitting && <SendHorizonal size={18} />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoForm;