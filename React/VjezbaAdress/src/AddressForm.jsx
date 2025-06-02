import { useState } from 'react';

export default function AddressForm() {
  const [formData, setFormData] = useState({
    firstName: 'dino',
    lastName: 'duvnjak',
    email: 'dino@ctk.ri'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${formData.firstName} ${formData.lastName} - ${formData.email}`);
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>
        Hello {formData.firstName} {formData.lastName}
      </h2>
      <p style={styles.email}>{formData.email}</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
const styles = {
  wrapper: {
    backgroundColor: '#4ba3a8',
    width: '300px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    marginBottom: '10px',
    fontSize: '24px'
  },
  email: {
    marginBottom: '20px',
    fontSize: '14px',
    color: '#dff6f7'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#80cdd1',
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: '#4ba3a8',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};