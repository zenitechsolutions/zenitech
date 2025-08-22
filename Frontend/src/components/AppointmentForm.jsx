import React, { useState } from "react";
import {
  CheckCircle,
  SendHorizonal,
  AlertTriangle,
} from "lucide-react";

const generateTimeOptions = () => {
  const times = [];
  for (let h = 1; h <= 12; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h.toString().padStart(2, "0");
      const minute = m.toString().padStart(2, "0");
      times.push(`${hour}:${minute} AM`);
      times.push(`${hour}:${minute} PM`);
    }
  }
  return times.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    city: "",
    country: "",
    companyContact: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
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
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/appointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit appointment request.");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        designation: "",
        city: "",
        country: "",
        companyContact: "",
        preferredDate: "",
        preferredTime: "",
        reason: "",
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
            Book Your Consultation
          </h2>
          <p className="text-blue-100 text-lg">
            Schedule a personalized session with our cybersecurity experts
          </p>
        </div>

        {/* Form Section */}
        <div className="p-6 md:p-10">
          {submitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg flex items-center">
              <CheckCircle className="text-green-500 mr-4 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Appointment Scheduled!</h3>
                <p className="text-green-700">
                  Thanks for your interest. Our team will contact you shortly to confirm your appointment.
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
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
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
                  name="companyName"
                  placeholder="Company / Institute"
                  value={formData.companyName}
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
                  placeholder="e.g. IT Manager"
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

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Company Contact</label>
                <input
                  type="text"
                  name="companyContact"
                  placeholder="Company website or contact email"
                  value={formData.companyContact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                >
                  <option value="">Select a time</option>
                  {generateTimeOptions()}
                </select>
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="block text-sm font-medium text-gray-700">What would you like to discuss?</label>
                <textarea
                  name="reason"
                  placeholder="Please describe your specific concerns or areas you'd like to discuss..."
                  value={formData.reason}
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
                  <span>{isSubmitting ? "Submitting..." : "Schedule Consultation"}</span>
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

export default AppointmentForm;
