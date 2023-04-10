import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthScreen() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          {showLogin ? <LoginForm /> : <SignupForm />}
          <button onClick={handleToggle}>
            {showLogin
              ? "Don't have an account? Sign up here"
              : "Already have an account? Login here"}
          </button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            backgroundImage: "url(path/to/graphic.jpg)",
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          {/* Graphic Goes Here */}
        </div>
      </Grid>
    </Grid>
  );
}
