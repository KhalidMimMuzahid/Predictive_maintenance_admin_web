import { makeStyles, styled } from "@mui/styles";
import Profile from './Pageviews/profile';
import Users from './Pageviews/users';
import Notification from './Pageviews/notification';
import Password from './Pageviews/password';
import PersonalInfo from './Pageviews/pers_info';
import { Box, Button, Container, Divider, FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Add, Close, MoreVert } from "@mui/icons-material";
import {auth} from "../../../firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import axios from "axios";


const useStyle = makeStyles((theme)=> ({
    holder: {
        padding: theme.spacing(2),
    },
    title: {
        color: "black", 
        fontWeight: "700",
        fontSize: 24
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 14
    },
    spacerSmall: {
        width: "10px",
        height: "10px",
    },
    topHolder: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tableHolder: {
        width: "100%",
        backgroundColor: "white",
        padding: theme.spacing(2),
        borderRadius: "5px",
    },
    buttonHolder: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    menuHolder: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    smallMenuHolder: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    activeMenuTab: {
        backgroundColor: "#EEEFF4",
        borderRadius: "7px",
        color: "#5A5C73",
        fontSize: "18",
        fontWeight: "600",
        padding: "10px 15px",
        cursor: "pointer",
    },
    inactiveMenuTab: {
        backgroundColor: "white",
        borderRadius: "7px",
        color: "#5A5C73",
        fontSize: "18",
        fontWeight: "600",
        padding: "10px 15px",
        cursor: "pointer",
    },
    tabHolder: {
        backgroundColor: "white",
        padding: theme.spacing(2),
    },
    addUserButton: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    
    addUserContainer: {
        padding: theme.spacing(2),
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        overflow: "auto",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        width: "90%",
        height: "90vh",
        overflowY: "scroll",
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vw",
        }
    },
    input: {
        width: "100%",
        backgroundColor: "white",
    },
    saveButton: {
        backgroundColor: "#24459c",
        padding: "10px 35px",
        color: "white",
        cursor: "pointer",
        borderRadius: "25px",
        fontSize: "14px"
    },
    cancelButton: {
        backgroundColor: "#F6F6F6",
        padding: "10px 35px",
        color: "#959596",
        cursor: "pointer",
        borderRadius: "25px",
        fontSize: "14px"
    }
}));



const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
        },
    },
}));



const SettingsScreen = () => {

    const [profile, setProfile] = useState(true);
    const [user, setUser] = useState(false);
    const [notification, setNotification] = useState(false);
    const [password, setPassword] = useState(false);
    const [persInfo, setPersInfo] = useState(false);
    
    const classes = useStyle();


    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [open, setOpen] = useState(false);
    
    const [newUser, setNewUser] = useState(
        {
            name: '',
            email: '',
            phone: '',
            accessLevel: '',
            password: '',
            imageAddress: '',
        }
    );

    const handlePhoto = (e) => {
        setNewUser({ ...newUser, photo: e.target.files[0] });
    }

    const handleSubmit = () => {

        if(newUser.email===""){
            alert("Please provide an email address to continue");
            return;
        }
        if(newUser.password===""){
            alert("Please provide your password to continue");
            return;
        }
        if(newUser.name===""){
            alert("Please provide a name to continue");
            return;
        }
        if(newUser.phone===""){
            alert("Please provide a phone number to continue");
            return;
        }
        if(newUser.accessLevel===""){
            alert("Please select an access level to continue");
            return;
        }

        createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((userCredential) => {

            const formData = new FormData();
            formData.append('uid', userCredential.user.uid);
            formData.append('AdminImage', newUser.photo);
            formData.append('name', newUser.name);
            formData.append('phone', newUser.phone);
            formData.append('email', newUser.email);
            formData.append('accessLevel', newUser.accessLevel);
    
            axios.post('https://api.showaapp.com/admin/settings/add-new-admin', formData)
                .then(res => {
                    console.log(res);
                    setOpen(false);
                    setNewUser({ name: "", phone: "", email: "", accessLevel: "", imageAddress: "", password: "" });
                    alert("Admin added successfully");
                })
                .catch(err => {
                    console.log(err);
                    alert("Error : " + err);
                });

        }).catch((error)=> {
            alert("Error : " + error);
            return;
        })


    }


    return (
        <>

            <Modal open={open}>

                <Container className={classes.addUserContainer}>

                    <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ color: "white" }} ><Close /></div>
                        <Typography style={{ fontSize: "24px", fontWeight: "700", }}>Add New User</Typography>
                        <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setOpen(false); }}><Close /></div>
                    </div>

                    <div>

                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />

                    </div>

                    <div>
        
                        <Grid container spacing={2}>

                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div>
                                    <Typography style={{color: "#5A6872", fontSize: "18", fontWeight: "600"}}>User Fullname</Typography>
                                    <Typography style={{color: "#69677C", fontSize: "16", fontWeight: "500"}}>User can update there own name</Typography>
                                </div>
                            </Grid>

                            <Grid item xs={8} sm={8} md={8} lg={8}>
                                <TextField
                                    className={classes.input}
                                    size="small" 
                                    placeholder="Dipankar Paul"
                                    onChange={(e)=>{setNewUser({ ...newUser, name: e.target.value })}}
                                />
                            </Grid>

                        </Grid>
                        <div className={classes.spacerSmall} />
        
                        <Grid container spacing={2}>

                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div>
                                    <Typography style={{color: "#5A6872", fontSize: "18", fontWeight: "600"}}>Phone</Typography>
                                    <Typography style={{color: "#69677C", fontSize: "16", fontWeight: "500"}}>User can change the phone number</Typography>
                                </div>
                            </Grid>

                            <Grid item xs={8} sm={8} md={8} lg={8}>
                                <TextField
                                    className={classes.input}
                                    size="small" 
                                    placeholder="+81 75 484 5029"
                                    onChange={(e)=>{setNewUser({ ...newUser, phone: e.target.value })}}
                                />
                            </Grid>

                        </Grid>
                        <div className={classes.spacerSmall} />

                        <Grid container spacing={2}>

                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div>
                                    <Typography style={{color: "#5A6872", fontSize: "18", fontWeight: "600"}}>Email</Typography>
                                    <Typography style={{color: "#69677C", fontSize: "16", fontWeight: "500"}}>User will login with this email</Typography>
                                </div>
                            </Grid>

                            <Grid item xs={8} sm={8} md={8} lg={8}>
                                <TextField
                                    className={classes.input}
                                    size="small" 
                                    placeholder="dipankarpaul@showa.app"
                                    onChange={(e)=>{setNewUser({ ...newUser, email: e.target.value })}}
                                />
                            </Grid>

                        </Grid>
                        <div className={classes.spacerSmall} />

                        <Grid container spacing={2}>

                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div>
                                    <Typography style={{color: "#5A6872", fontSize: "18", fontWeight: "600"}}>Password</Typography>
                                    <Typography style={{color: "#69677C", fontSize: "16", fontWeight: "500"}}>User will login with this password</Typography>
                                </div>
                            </Grid>

                            <Grid item xs={8} sm={8} md={8} lg={8}>
                                <TextField
                                    className={classes.input}
                                    type="password"
                                    size="small" 
                                    placeholder="Password"
                                    onChange={(e)=>{setNewUser({ ...newUser, password: e.target.value })}}
                                />
                            </Grid>

                        </Grid>
                        <div className={classes.spacerSmall} />

                        <Grid container spacing={2}>

                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div>
                                    <Typography style={{color: "#5A6872", fontSize: "18", fontWeight: "600"}}>Access Level</Typography>
                                    <Typography style={{color: "#69677C", fontSize: "16", fontWeight: "500"}}>User Access level</Typography>
                                </div>
                            </Grid>

                            <Grid item xs={8} sm={8} md={8} lg={8}>
                                <FormControl fullWidth>
                                    <TextField
                                        select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={newUser.accessLevel}
                                        label="Select Access Level"
                                        size="small"
                                        onChange={(e)=>{setNewUser({ ...newUser, accessLevel: e.target.value })}}
                                    >
                                        <MenuItem value="Super Admin">Super Admin</MenuItem>
                                        <MenuItem value="Account Manager">Account Manager</MenuItem>
                                        <MenuItem value="Engineering Manager">Engineering Manager</MenuItem>
                                        <MenuItem value="Service Eng. Manager">Service Eng. Manager</MenuItem>
                                        <MenuItem value="Vendor Manager">Vendor Manager</MenuItem>
                                    </TextField>
                                </FormControl>
                            </Grid>

                        </Grid>
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />

                        <div>
                            <input
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                name="photo"
                                onChange={handlePhoto}
                            />
                        </div>

                    </div>
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setOpen(false);
                            }}
                        >
                            Cancel
                        </div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                handleSubmit();
                            }}
                        >
                            Save
                        </div>
                    </div>

                </Container>

            </Modal>

            <div className={classes.holder}>

                
                <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>Settings</div>
                        <div className={classes.spacerSmall}></div>
                        <div style={{display: "flex"}}> 
                            <div style={{color: "black"}} className={classes.subtitle}>Dashboard / </div>
                            <div style={{color: "#24459c"}} className={classes.subtitle}>Settings</div>
                        </div>
                    </div>

                    <div className={classes.smallMenuHolder}>
                            <IconButton onClick={handleClick}><MoreVert /></IconButton>

                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={openEl}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    onClick={() => {
                                        setProfile(true);
                                        setUser(false);
                                        setNotification(false);
                                        setPassword(false);
                                        setPersInfo(false);
                                        handleClose();
                                    }}
                                >
                                    <div className={profile ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Profile & Branding</div>
                                </MenuItem>


                                <MenuItem
                                    onClick={() => {
                                        setProfile(false);
                                        setUser(true);
                                        setNotification(false);
                                        setPassword(false);
                                        setPersInfo(false);
                                        handleClose();
                                    }}
                                >
                                    <div className={user ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>User</div>
                                </MenuItem>


                                <MenuItem
                                    onClick={() => {
                                        setProfile(false);
                                        setUser(false);
                                        setNotification(true);
                                        setPassword(false);
                                        setPersInfo(false);
                                        handleClose();
                                    }}
                                >
                                    <div className={notification ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Notification</div>
                                </MenuItem>
                                


                                <MenuItem
                                    onClick={() => {
                                        setProfile(false);
                                        setUser(false);
                                        setNotification(false);
                                        setPassword(true);
                                        setPersInfo(false);
                                        handleClose();
                                    }}
                                >
                                    <div className={password ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Password</div>
                                </MenuItem>


                                <MenuItem
                                    onClick={() => {
                                        setProfile(false);
                                        setUser(false);
                                        setNotification(false);
                                        setPassword(false);
                                        setPersInfo(true);
                                        handleClose();
                                    }}
                                >
                                    <div className={persInfo ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Personal Info</div>
                                </MenuItem>

                                <Divider />

                                <MenuItem
                                    onClick={() => {
                                        setOpen(true);
                                        handleClose();
                                    }}
                                >
                                    <Add />
                                    <div className={classes.inactiveMenuTab} style={{width: "100%"}}>Add User</div>
                                </MenuItem>

                            </StyledMenu>


                    </div>


                </div>

                <div className={classes.spacerSmall}></div>
                <div className={classes.spacerSmall}></div>
                
                <div className={classes.tabHolder}>
                    
                    <div className={classes.title}>Account Settings</div>
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                    

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    
                        <div className={classes.menuHolder}>

                            <div 
                                className={profile ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setProfile(true);
                                    setUser(false);
                                    setPassword(false);
                                    setNotification(false);
                                    setPersInfo(false);
                                }}
                            >
                                Profile & Branding
                            </div>

                            <div 
                                className={user ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setProfile(false);
                                    setUser(true);
                                    setPassword(false);
                                    setNotification(false);
                                    setPersInfo(false);
                                }}
                            >
                                Users
                            </div>

                            <div 
                                className={notification ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setProfile(false);
                                    setUser(false);
                                    setPassword(false);
                                    setNotification(true);
                                    setPersInfo(false);
                                }}
                            >
                                Notification
                            </div>

                            <div 
                                className={password ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setProfile(false);
                                    setUser(false);
                                    setPassword(true);
                                    setNotification(false);
                                    setPersInfo(false);
                                }}
                            >
                                Password
                            </div>

                            <div 
                                className={persInfo ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setProfile(false);
                                    setUser(false);
                                    setPassword(false);
                                    setNotification(false);
                                    setPersInfo(true);
                                }}
                            >
                                Personal Info
                            </div>

                        </div>

                        <div className={classes.addUserButton}>
                            <Button 
                                size="small" 
                                startIcon={<Add />} 
                                style={{backgroundColor: "white", color: "#5A5C73"}} variant="contained" className={classes.addUserButton}
                                onClick={()=>{
                                    setOpen(true);
                                }}
                            >
                                Add User
                            </Button>
                        </div>

                    </div>


                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    {
                        profile && <Profile />
                    }
                    {
                        user && <Users />
                    }
                    {
                        notification && <Notification />
                    }
                    {
                        password && <Password />
                    }
                    {
                        persInfo && <PersonalInfo />
                    }

                </div>

            </div>

        </>
    );
}

export default SettingsScreen;