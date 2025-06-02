import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef } from 'react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzrzdaq");
  const formRef = useRef(null);
  
  useEffect(() => {
    if (state.succeeded) {
      alert("🎉 Your form has been submitted successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  return (
    <div id="contactPage" className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Let's Connect 🤝</h1>
          <h2 className="contact-subtitle">Write us</h2>
        </div>
        
        <div className="contact-content">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Name" 
                required 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="form-input"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                required 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Message" 
                rows="5" 
                required 
                className="form-textarea"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          
          <div className="contact-info-section">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-description">
              Ready to chat anytime — and even more ready to join your team! Let's connect.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="info-label">Address:</span>
                <span className="info-value">House No 5-0, Liaquatabad Karachi Central</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">+923178386880</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">alihuzaifa2112006@gmail.com</span> {/* Fixed email */}
              </div>
              <div className="info-item">
                <span className="info-label">Website:</span>
                <span className="info-value">Its All About Huzaifa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;