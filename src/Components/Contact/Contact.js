import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Contact.css";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div className="form">
      <TextField
        className="label"
        required
        label="Your Name"
        defaultValue="Your Name"
      />
      <br />
      <br />
      <TextField className="label" required label="Your Message" maxRows={4} />
      <br />
      <br />
      <Button variant="contained">Send</Button>
    </div>
  );
};

export default Contact;
