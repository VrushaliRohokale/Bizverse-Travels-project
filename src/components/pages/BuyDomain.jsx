import React, { useState } from 'react';

function BuyDomain() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    repeatEmail: '',
    phone: '',
    company: '',
    website: '',
    priceOffer: '',
    comment: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.email !== formData.repeatEmail) {
      newErrors.repeatEmail = 'Emails do not match';
    }

    if (!formData.priceOffer.trim()) newErrors.priceOffer = 'Price offer is required';

    if (!formData.comment.trim()) newErrors.comment = 'Comment is required';

    if (!formData.consent) newErrors.consent = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        repeatEmail: '',
        phone: '',
        company: '',
        website: '',
        priceOffer: '',
        comment: '',
        consent: false,
      });

      // Clear errors
      setErrors({});
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white text-center">
          <h2>Buy Domain</h2>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                E-Mail Address
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="repeatEmail" className="form-label">
                Repeat E-Mail Address
              </label>
              <input
                type="email"
                className={`form-control ${errors.repeatEmail ? 'is-invalid' : ''}`}
                id="repeatEmail"
                name="repeatEmail"
                value={formData.repeatEmail}
                onChange={handleChange}
              />
              {errors.repeatEmail && <div className="invalid-feedback">{errors.repeatEmail}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone (Optional)
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Company (Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="website" className="form-label">
                Website (Optional)
              </label>
              <input
                type="url"
                className="form-control"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="priceOffer" className="form-label">
                Price Offer
              </label>
              <input
                type="number"
                className={`form-control ${errors.priceOffer ? 'is-invalid' : ''}`}
                id="priceOffer"
                name="priceOffer"
                value={formData.priceOffer}
                onChange={handleChange}
              />
              {errors.priceOffer && <div className="invalid-feedback">{errors.priceOffer}</div>}
            </div>
            <div className="col-12">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
                id="comment"
                name="comment"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
              {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className={`form-check-input ${errors.consent ? 'is-invalid' : ''}`}
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="consent">
                  I consent to having this website store and process my submitted information in order to deliver my inquiry.
                </label>
                {errors.consent && <div className="invalid-feedback">{errors.consent}</div>}
              </div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BuyDomain;
