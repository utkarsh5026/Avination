import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function SignupForm() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle signup form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <TextField
        label="Phone"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={phone}
        onChange={handlePhoneChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Signup
      </Button>
    </form>
  );
}

export default SignupForm;
