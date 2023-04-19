import { makeStyles } from "@mui/styles";
import SliderImage1 from "../../Assets/Onboarding/slider1.svg";
import SliderImage2 from "../../Assets/Onboarding/slider2.svg";
import SliderImage3 from "../../Assets/Onboarding/slider3.svg";
import SliderImage4 from "../../Assets/Onboarding/slider4.svg";
import SliderImage5 from "../../Assets/Onboarding/slider5.svg";
import ShowaFullBlackLogo from "../../Assets/Onboarding/showa_full_black_logo.png";
import { Button, Container, Grid, Slide, TextField, Typography } from "@mui/material";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState } from "react";
import {auth} from "../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth"

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
        textAlign: "start"
    },
    welcomeTxet: {
        color: "#121212",
        fontSize: "24px",
        fontWeight: "700"
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
        url: SliderImage1 ,
        caption: 'Showa Super Dashboard',
        subtitle: 'Nec nihil affert partiendo ne, quo no iisque etiam tacimates sed conceptam.'
    },
    {
        url: SliderImage2,
        caption: 'Showa Super Dashboard',
        subtitle: 'Nec nihil affert partiendo ne, quo no iisque etiam tacimates sed conceptam.'
    },
    {
        url: SliderImage3,
        caption: 'Showa Super Dashboard',
        subtitle: 'Nec nihil affert partiendo ne, quo no iisque etiam tacimates sed conceptam.'
    },
    {
        url: SliderImage4,
        caption: 'Showa Super Dashboard',
        subtitle: 'Nec nihil affert partiendo ne, quo no iisque etiam tacimates sed conceptam.'
    },
    {
        url: SliderImage5,
        caption: 'Showa Super Dashboard',
        subtitle: 'Nec nihil affert partiendo ne, quo no iisque etiam tacimates sed conceptam.'
    },
];


const LoginScreen = () => {

    const classes = usesStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function Login (){
        if(email===""){
            alert("Please provide an email address to login");
            return;
        }
        if(password===""){
            alert("Please provide your password to login");
            return;
        }
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            alert("Successfully logged in"); 
        }).catch((error)=> {
            alert(error);
            return;
        })
    
    }
    

    return (
        
        <Grid container spacing={0}>

            <Grid item xs={12} sm={5} md={5} lg={4}>
                
                <Container  className={classes.sliderContainer}>


                    <div className={classes.logoContainer}>
                        <img src={ShowaFullBlackLogo} className={classes.logo}/>
                    </div>
                    <div className={classes.spacer}></div>
                    <div className={classes.spacer}></div>


                    <Fade arrows={false} indicators={true} duration={2000}>
                        {fadeImages.map((fadeImage, index) => (
                                <div className="each-fade" key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "60vh", justifyContent: "space-evenly" }}>
                                    <div className="image-container">
                                        <img src={fadeImage.url} style={{width: "90%"}} />
                                    </div>
                                    <div className={classes.spacer}></div>
                                    <div className={classes.spacer}></div>
                                    <Typography style={{ fontSize: "22px", color: "#24459c", fontWeight: "600" }}>{fadeImage.caption}</Typography>
                                    <div className={classes.spacerSmall}></div>
                                    <Typography style={{ fontSize: "18px", color: "#24459c", textAlign: "center" }}>{fadeImage.subtitle}</Typography>
                                </div>
                        ))}
                    </Fade>

                </Container>


            </Grid>

            <Grid item sm={7} md={7} lg={8} className={classes.loginFormContainer}>
                
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
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <div className={classes.spacer}></div>


                    <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                        <div className={classes.titleTxet}>Password</div>
                        <div style={{color: "#24459c", fontSize: "22", fontWeight: "600", cursor: "pointer"}}>
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
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <div className={classes.spacer}></div>
                    <div className={classes.spacer}></div>


                    <Button variant="contained" style={{backgroundColor: "#24459c", padding: "5px 40px"}} onClick={Login}>Sign In</Button>


                </div>

            </Grid>

        </Grid>
        
    );
}


export default LoginScreen;