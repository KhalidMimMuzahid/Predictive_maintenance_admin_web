import { makeStyles } from "@mui/styles";
import Profile from './Pageviews/profile';
import Users from './Pageviews/users';
import Notification from './Pageviews/notification';
import Password from './Pageviews/password';
import PersonalInfo from './Pageviews/pers_info';
import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { Add } from "@mui/icons-material";

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
        padding: theme.spacing(2),
        backgroundColor: "white",
    },
    menuHolder: {
        display: "flex",
    }
}));

const SettingsScreen = () => {

    const [profile, setProfile] = useState(true);
    const [user, setUser] = useState(false);
    const [notification, setNotification] = useState(false);
    const [password, setPassword] = useState(false);
    const [persInfo, setPersInfo] = useState(false);
    
    const classes = useStyle();
    
    return (
        <div className={classes.holder}>
            
            <div>
                <div className={classes.title}>Settings</div>
                <div className={classes.spacerSmall}></div>
                <div style={{display: "flex"}}> 
                    <div style={{color: "black"}} className={classes.subtitle}>Dashboard / </div>
                    <div style={{color: "#24459c"}} className={classes.subtitle}>Settings</div>
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

                    <Button size="small" startIcon={<Add />} style={{backgroundColor: "white", color: "#5A5C73"}} variant="contained">
                        Add User
                    </Button>

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
    );
}

export default SettingsScreen;