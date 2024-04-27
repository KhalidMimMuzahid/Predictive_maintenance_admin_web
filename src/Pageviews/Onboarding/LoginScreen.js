import { makeStyles } from "@mui/styles";
import SliderImage1 from "../../Assets/Onboarding/slider1.svg";
import SliderImage2 from "../../Assets/Onboarding/slider2.svg";
import SliderImage3 from "../../Assets/Onboarding/slider3.svg";
import SliderImage4 from "../../Assets/Onboarding/slider4.svg";
import SliderImage5 from "../../Assets/Onboarding/slider5.svg";
import ShowaFullBlackLogo from "../../Assets/Onboarding/showa_full_black_logo.png";
import {
  Button,
  Container,
  Grid,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { loginUser, setUser } from "../../features/authentication/authSlice";
import { useDispatch } from "react-redux";

const usesStyles = makeStyles((theme) => ({
  sliderContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "#D5DCED",
    padding: theme.spacing(2),
  },
  loginFormContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100vh",
    width: "100%",
    padding: theme.spacing(2),
  },
  formHolder: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm") && theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md") && theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  logoContainer: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.up("sm") && theme.breakpoints.down("md")]: {
      width: "120px",
    },
    [theme.breakpoints.up("md") && theme.breakpoints.down("lg")]: {
      width: "150px",
    },
  },
  logo: {
    width: "100%",
  },
  titleTxet: {
    color: "#231F20",
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "start",
  },
  welcomeTxet: {
    color: "#121212",
    fontSize: "24px",
    fontWeight: "700",
  },
  input: {
    width: "100%",
  },
  spacer: {
    width: "15px",
    height: "15px",
  },
  spacerSmall: {
    width: "5px",
    height: "5px",
  },
}));

const fadeImages = [
  {
    url: SliderImage1,
    caption: "Data Analysis",
    subtitle: "Analysis business data",
  },
  {
    url: SliderImage2,
    caption: "AI  Decision",
    subtitle: "Effortless automation, smarter living",
  },
  {
    url: SliderImage3,
    caption: "Monitor Business",
    subtitle: "Always monitor your system",
  },
  {
    url: SliderImage4,
    caption: "Business Growth",
    subtitle: "Check your business growth",
  },
  {
    url: SliderImage5,
    caption: "Connection",
    subtitle: "Stay connected, Stay happy",
  },
];

const LoginScreen = () => {
  const dispatch = useDispatch();
  const classes = usesStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const [loginFormOpen, setLoginFormOpen] = useState(true);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotPasswordInstrOpen, setForgotPasswordInstrOpen] = useState(false);

  function Login() {
    if (email === "") {
      alert("Please provide an email address to login");
      return;
    }
    if (password === "") {
      alert("Please provide your password to login");
      return;
    }

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //     alert("Successfully logged in");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //     return;
    //   });

    dispatch(loginUser({ email, password }))
      .then((result) => {
        console.log(result);
        if (result?.payload?.uid) {
          fetch(
            `http://localhost:5000/api/v2/user/sign-in?uid=${result?.payload?.uid}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data?.success) {
                setUser(data?.data?.user);
                localStorage.setItem(
                  "user-token",
                  JSON.stringify(data?.data?.token)
                );
                alert(data?.message);
              } else {
                alert("Login Unsuccessful");
                return;
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        return;
      });
  }

  function SendResetInstruction() {
    if (forgotPasswordEmail === "") {
      alert("Please provide an email address to login");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setForgotPasswordInstrOpen(true);
        setForgotPasswordOpen(false);
        setLoginFormOpen(false);
      })
      .catch((error) => {
        alert(error);
        return;
      });
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={5} md={5} lg={4}>
        <Container className={classes.sliderContainer}>
          <div className={classes.logoContainer}>
            <img src={ShowaFullBlackLogo} className={classes.logo} />
          </div>
          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>

          <Fade arrows={false} indicators={true} duration={2000}>
            {fadeImages.map((fadeImage, index) => (
              <div
                className="each-fade"
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "60vh",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="image-container">
                  <img src={fadeImage.url} style={{ width: "90%" }} />
                </div>
                <div className={classes.spacer}></div>
                <div className={classes.spacer}></div>
                <Typography
                  style={{
                    fontSize: "22px",
                    color: "#24459c",
                    fontWeight: "600",
                  }}
                >
                  {fadeImage.caption}
                </Typography>
                <div className={classes.spacerSmall}></div>
                <Typography
                  style={{
                    fontSize: "18px",
                    color: "#24459c",
                    textAlign: "center",
                  }}
                >
                  {fadeImage.subtitle}
                </Typography>
              </div>
            ))}
          </Fade>
        </Container>
      </Grid>

      <Grid item sm={7} md={7} lg={8} className={classes.loginFormContainer}>
        {loginFormOpen && LoginForm()}

        {forgotPasswordOpen && ForgotPasswordForm()}

        {forgotPasswordInstrOpen && ForgotPasswordInstruction()}
      </Grid>
    </Grid>
  );

  function LoginForm() {
    return (
      <div className={classes.formHolder}>
        <div className={classes.welcomeTxet}>Welcome Back!</div>
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <div className={classes.titleTxet}>Username or Email Address</div>
        <div className={classes.spacerSmall}></div>

        <TextField
          variant="outlined"
          placeholder="Email or Username"
          size="small"
          className={classes.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className={classes.spacer}></div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={classes.titleTxet}>Password</div>
          <div
            style={{
              color: "#24459c",
              fontSize: "22",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => {
              setForgotPasswordInstrOpen(false);
              setForgotPasswordOpen(true);
              setLoginFormOpen(false);
            }}
          >
            Forgot Password?
          </div>
        </div>
        <div className={classes.spacerSmall}></div>

        <TextField
          type="password"
          variant="outlined"
          placeholder="Password"
          size="small"
          className={classes.input}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <Button
          variant="contained"
          style={{ backgroundColor: "#24459c", padding: "5px 40px" }}
          onClick={Login}
        >
          Sign In
        </Button>
      </div>
    );
  }

  function ForgotPasswordForm() {
    return (
      <div className={classes.formHolder}>
        <div className={classes.welcomeTxet}>Forgot Password</div>
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <div style={{ color: "black", fontSize: "20", fontWeight: "400" }}>
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </div>

        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <div style={{ color: "black", fontSize: "20", fontWeight: "400" }}>
          For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </div>

        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <div className={classes.titleTxet}>Email Address</div>
        <div className={classes.spacerSmall}></div>

        <TextField
          variant="outlined"
          placeholder="Email Address"
          size="small"
          className={classes.input}
          value={forgotPasswordEmail}
          onChange={(e) => {
            setForgotPasswordEmail(e.target.value);
          }}
        />
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <Button
          variant="contained"
          style={{ backgroundColor: "#24459c", padding: "5px 40px" }}
          onClick={SendResetInstruction}
        >
          Send Reset Instructions
        </Button>
      </div>
    );
  }

  function ForgotPasswordInstruction() {
    return (
      <div className={classes.formHolder}>
        <div className={classes.welcomeTxet}>Forgot Password?</div>
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <div style={{ color: "black", fontSize: "20", fontWeight: "400" }}>
          If this {forgotPasswordEmail} email address was used to create an
          account, instructions to reset your password will be sent to you.
          Please check your email.
        </div>

        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <Button
          variant="contained"
          style={{ backgroundColor: "#24459c", padding: "5px 40px" }}
          onClick={() => {
            setForgotPasswordInstrOpen(false);
            setForgotPasswordOpen(false);
            setLoginFormOpen(true);
          }}
        >
          Sign In
        </Button>
      </div>
    );
  }
};

export default LoginScreen;
