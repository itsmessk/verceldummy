import "./css/ConsultationForm.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaCircleCheck } from "react-icons/fa6";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: ""
  });

  const [errors, setErrors] = useState({});  // State to track form field errors
  const [successMessage, setSuccessMessage] = useState("");  // Success message state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.services) formErrors.services = "Please select a service.";
    if (!formData.message) formErrors.message = "Message is required.";

    setErrors(formErrors);

    // Return true if no errors
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Define email parameters for EmailJS
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        selected_service: formData.services,
        message: formData.message,
      };

      // Send email using EmailJS
      emailjs.send(
        "service_3y1f5jd",
        "template_ogyhrzo",
        emailParams,
        "9PyRiP4Q1TaToDueT"
      )
        .then((response) => {
          if (response.status === 200) {
            // Display success message
            setSuccessMessage("Your request has been submitted successfully!");

            // Clear input fields
            setFormData({
              name: "",
              email: "",
              phone: "",
              services: "",
              message: ""
            });

            // Hide the success message after 5 seconds
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000);
          }
        })
        .catch((err) => {
          console.error("Failed to send email. Error:", err);
          alert("An error occurred while submitting your request. Please try again.");
        });
    }
  };

  return (
    <div className="consultation-section">
      <div className="consultation-container">
        <h1 className="form-title">Get A Quick Consultation</h1>
        <p className="form-desc">
          Are you looking for a solution to a confusing security issue? Ask our customer service team for assistance right away.
        </p>

        {/* Success message display */}
        <div className="center-container">
        {successMessage && <p className="success-message"><FaCircleCheck /> {successMessage}</p>}
        </div>

        <form onSubmit={handleSubmit} className="consultation-form">
          <div className="form-row">
            <div className="form-left">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-right">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
                <select
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Services</option>
                  <option value="Managed Security Services">Managed Security Services</option>
                  <option value="Vulnerability Assessment / Penetration testing">Vulnerability Assessment / Penetration testing</option>
                  <option value="Cloud Security">Cloud Security</option>
                  <option value="Infrastructure Security Assessment">Infrastructure Security Assessment</option>
                  <option value="Mobile Security Assessment">Mobile Security Assessment</option>
                  <option value="Auditing">Auditing</option>
                  <option value="Security Incident, Event Management and Threat Intelligence">Security Incident, Event Management and Threat Intelligence</option>
                  <option value="Email Protection System">Email Protection System</option>
                  <option value="Application Security">Application Security</option>
                </select>
                {errors.services && <p className="error-message">{errors.services}</p>}
              </div>
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Enter message*"
            required
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
          <button type="submit" className="submit-button">Submit the Request</button>
        </form>
      </div>
    </div>
  );
}
