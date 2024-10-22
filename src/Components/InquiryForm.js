import React, { useState } from 'react';
import './css/InquiryForm.css'; // Import the separated CSS

const InquiryForm = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Notify user about form submission
        alert('Form submitted successfully!');

        // Handle form submission logic (e.g., sending data to the server)
        console.log('Form submitted:', formData);

        // Close the modal after submission
        closeModal();
    };

    return (
        <div className="overlay">
            <div className="form-container">
                {/* Close button */}
                <button className="close-button" onClick={closeModal}>X</button>
                <h2>Get Started with your Inquiry</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Service</option>
                        <option value="Managed Security Services">Managed Security Services</option>
                        <option value="Vulnerability Assessment / Penetration Testing">Vulnerability Assessment / Penetration Testing</option>
                        <option value="Cloud Security">Cloud Security</option>
                        <option value="Infrastructure Security Assessment">Infrastructure Security Assessment</option>
                        <option value="Mobile Security Assessment">Mobile Security Assessment</option>
                        <option value="Auditing">Auditing</option>
                        <option value="Wireless Security Assessment">Wireless Security Assessment</option>
                        <option value="Security Incident, Event Management & Threat Intelligence">
                            Security Incident, Event Management & Threat Intelligence
                        </option>
                        <option value="Email Protection System">Email Protection System</option>
                        <option value="Application Security Assessment">Application Security Assessment</option>
                    </select>

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Message*"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default InquiryForm;
