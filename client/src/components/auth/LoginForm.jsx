import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function LoginForm() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
