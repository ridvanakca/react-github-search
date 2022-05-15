import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../../api";
import Spinner from "../../components/Spinner";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  function updateError(showError, errorMessage = "") {
    setShowError(showError);
    setErrorMessage(errorMessage);
  }

  async function handleSignUpClick() {
    updateError(false);

    setLoading(true);
    try {
      await API.users.signIn(email, password);
      navigate("/repositories");
    } catch (error) {
      updateError(true, error.message);
    }

    setLoading(false);
  }

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant='outlined' value={email} onChange={(event) => setEmail(event.target.value)} required fullWidth id='email' label='Email Address' name='email' autoComplete='email' />
            </Grid>
            <Grid item xs={12}>
              <TextField variant='outlined' value={password} onChange={(event) => setPassword(event.target.value)} required fullWidth name='password' label='Password' type='password' id='password' autoComplete='current-password' />
            </Grid>
          </Grid>

          {showError && (
            <Alert sx={{ marginTop: "1rem" }} severity='error'>
              {errorMessage}
            </Alert>
          )}

          <Button disabled={loading} onClick={handleSignUpClick} fullWidth variant='contained' color='primary' className={classes.submit}>
            Sign In
            {loading && <Spinner />}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/signup'>Don't have an account? Sign Up!</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
