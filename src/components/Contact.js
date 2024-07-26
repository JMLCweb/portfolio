import React, { useState } from "react";
import { Typography, TextField, Button, Container } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mjvnyovw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.warn("Error, not sending Form Data:", response.statusText);
    }
  };

  return (
    <Container className="container" maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Innovate. Sustain. Thrive.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Send a message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Submit
        </Button>
      </form>
      {formSubmitted && (
        <Typography variant="h6" gutterBottom>
          Thank you for contact me.
        </Typography>
      )}
    </Container>
  );
};

export default Contact;
