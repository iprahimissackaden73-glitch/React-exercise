
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    skills: [],
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSkills = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    console.log("Registration Data:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Fill in your information to register.</p>

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select country</option>
            <option value="Somalia">Somalia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div className="form-group">
          <label>Select Your Skills</label>

          <div className="checkbox-group">
            {["HTML", "CSS", "JavaScript", "React", "Python"].map(
              (skill) => (
                <label key={skill} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleSkills}
                  />
                  {skill}
                </label>
              )
            )}
          </div>
        </div>

        <div className="terms">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            I accept the Terms and Conditions
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default App;
