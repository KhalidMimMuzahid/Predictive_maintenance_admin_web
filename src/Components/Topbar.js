import { ClassNames } from "@emotion/react";
import { Cancel, ChatOutlined, Edit, MailOutline, NotificationsOutlined, Person, PowerSettingsNewOutlined, Search, SentimentSatisfied, Settings, SettingsApplications, ShoppingCart, Dehaze, CancelOutlined, Close } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Divider, IconButton, InputAdornment, Menu, MenuItem, SwipeableDrawer, TextField, Toolbar, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact1 from "../Assets/Component/contact1.jpg";
import Contact2 from "../Assets/Component/contact2.jpg";
import Contact3 from "../Assets/Component/contact3.jpg";
import Contact4 from "../Assets/Component/contact4.jpg";
import Contact5 from "../Assets/Component/contact5.jpg";
import Contact6 from "../Assets/Component/contact6.jpg";
import UserImage from "../Assets/Component/user_image.jfif";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import Drawer from "./Drawer";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { setCurrentUser } from "../Redux/actions";


const useStyle = makeStyles((theme)=> ({
    toolbar: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputHolder: {
        display: "flex",
        width: "50%",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    input: {
        width: "100%",
        backgroundColor: "#F1F4FB",
    },
    smallSearchInputHolder: {
        display: "flex",
        width: "70%",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    drawerHolder: {
        display: "flex",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    searchBarProxy: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        }
    },
    options: {
        display: "flex",
        alignItems: "center",
        color: "black"
    },
    searchButtonHolder: {
        display: "none",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        }
    },
    optionsIcons: {
        paddingLeft: "15px",
        cursor: "pointer",
    },
    menuIcon: {
        color: "#5E6399",
        marginRight: "15px",
        padding: "7px",
        borderRadius: "3px",
        cursor: "pointer",
        backgroundColor: "#F1F4FB"
    },
    linkText: {
        fontSize: "24px",
        textDecoration: "none",
        color: "#313E6A",
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1)
    },

}));

const Topbar = () => {

    const classes = useStyle();

    const [searchText, setSearchText] = useState("");
    const [smallSearchOpen, setSmallSearchOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [anchorNotificationEl, setAnchorNotificationEl] = useState(null);
    const openNotificationEl = Boolean(anchorNotificationEl);
    const handleNotificationClick = (event) => {
        setAnchorNotificationEl(event.currentTarget);
    };
    const handleNotificationClose = () => {
        setAnchorNotificationEl(null);
    };




    const [anchorMessageEl, setAnchorMessageEl] = useState(null);
    const openMessageEl = Boolean(anchorMessageEl);
    const handleMessageClick = (event) => {
        setAnchorMessageEl(event.currentTarget);
    };
    const handleMessageClose = () => {
        setAnchorMessageEl(null);
    };


    const isSidebarOpen = useSelector((state) => state.openSidebar);
    const dispatch = useDispatch();


    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return; 
        }

        setState({ ...state, [anchor]: open });
    };


    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar className={classes.toolbar}>

                <div className={classes.drawerHolder}>

                    <div>
                        <Fragment key="left">
                            <div 
                                className={classes.menuIcon}
                                onClick={toggleDrawer("left", true)}
                            > <Dehaze /> </div>
                            <SwipeableDrawer
                                anchor="left"
                                open={state["left"]}
                                onClose={toggleDrawer("left", false)}
                                onOpen={toggleDrawer("left", true)}
                            >
                                <Drawer />
                            </SwipeableDrawer>
                        </Fragment>
                    </div>

                </div>                

                <div className={classes.inputHolder}>

                    <TextField
                        size="small"
                        placeholder="Search..."
                        className={classes.input}
                        value={searchText}
                        onChange={(e)=> setSearchText(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                            endAdornment: <InputAdornment position="end">
                                <IconButton onClick={()=>{setSearchText(""); setSmallSearchOpen(false);}}><Cancel /></IconButton>
                            </InputAdornment>,
                        }} 
                    />
                </div>


                {
                    !smallSearchOpen && 
                    <div className={classes.options}>
                        <div className={classes.searchButtonHolder} >
                            <Search onClick={() => setSmallSearchOpen(true)} />
                        </div>


                        {/* message holder */}
                        <div className={classes.optionsIcons}>

                            <Badge badgeContent={4} color="secondary" className={classes.badge} onClick={handleMessageClick}>
                                <ChatOutlined color="#5D6396" className={classes.badgeIcon} />
                            </Badge>

                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorMessageEl}
                                open={openMessageEl}
                                onClose={handleMessageClose}
                            >

                                <MessageTab
                                    imgSrc={Contact1} name="Jack Right" onClick={handleMessageClose}
                                />

                                <Divider />

                                <MessageTab
                                    imgSrc={Contact2} name="Robert Fox" onClick={handleMessageClose}
                                />

                                <Divider />

                                <MessageTab
                                    imgSrc={Contact3} name="Cody Fisher" onClick={handleMessageClose}
                                />

                                <Divider />

                                <MessageTab
                                    imgSrc={Contact4} name="Jerome Bell" onClick={handleMessageClose}
                                />

                                <Divider />

                                <MessageTab
                                    imgSrc={Contact5} name="Kristin Watson" onClick={handleMessageClose}
                                />

                                <Divider />

                                <div className={classes.seeMoreText}>
                                    <Typography>See More</Typography>
                                </div>

                            </StyledMenu>

                        </div>


                        {/* notification holder */}
                        <div className={classes.optionsIcons}>
                            <Badge badgeContent={2} color="secondary" className={classes.badge}>
                                <NotificationsOutlined color="#5D6396" className={classes.badgeIcon} onClick={handleNotificationClick} />
                            </Badge>


                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorNotificationEl}
                                open={openNotificationEl}
                                onClose={handleNotificationClose}
                            >

                                <NotificationTab
                                    imgSrc={Contact1} name="Jack Right" onClick={handleNotificationClose}
                                />

                                <Divider />

                                <NotificationTab
                                    imgSrc={Contact2} name="Robert Fox" onClick={handleNotificationClose}
                                />

                                <Divider />

                                <NotificationTab
                                    imgSrc={Contact3} name="Cody Fisher" onClick={handleNotificationClose}
                                />

                                <Divider />

                                <NotificationTab
                                    imgSrc={Contact4} name="Jerome Bell" onClick={handleNotificationClose}
                                />

                                <Divider />

                                <NotificationTab
                                    imgSrc={Contact5} name="Kristin Watson" onClick={handleNotificationClose}
                                />

                                <Divider />

                                <NotificationTab
                                    imgSrc={Contact6} name="Kristin Watson" onClick={handleNotificationClose}
                                />

                                <Divider />

                                <div className={classes.seeMoreText}>
                                    <Typography>See More</Typography>
                                </div>

                            </StyledMenu>

                        </div>


                        {/* user info holder */}
                        <AdminInfoHolder />

                    </div>
                }

                {
                    smallSearchOpen && 
                    <div className={classes.smallSearchInputHolder}>
                        <TextField
                            size="small"
                            placeholder="Search..."
                            className={classes.input}
                            value={searchText}
                            onChange={(e)=> setSearchText(e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={()=>{setSearchText(""); setSmallSearchOpen(false)}}><Cancel /></IconButton>
                                </InputAdornment>,
                            }} 
                        />
                    </div>
                }


            </Toolbar>
        </AppBar>
    );
}


export default Topbar;


const NotificationTab = (props) => {
    const classes = useStyle();
    return <>
        <div className={classes.notificationContainer}>


            <div className={classes.notificationTab}>
                <div style={{ width: "45px", height: "45px", borderRadius: "50%", display: "inline-block", overflow: "hidden" }}>
                    <img src={props.imgSrc} className={classes.notificationAvatar} />
                </div>

                <div className={classes.spacer}></div>


                <div style={{ fontSize: "14px" }}>
                    <div style={{ display: "flex" }}>
                        <Typography style={{ color: "#24459c" }}>{props.name}</Typography>
                        <div className={classes.spacerSmall}></div>
                        <Typography style={{ color: "#787878" }}>Create new request</Typography>
                    </div>
                    <Typography style={{ color: "#cdcdcd" }}>1 minute ago</Typography>
                </div>

                <div className={classes.spacer}></div>

            </div>


            <i class="bi bi-three-dots-vertical"></i>

        </div>
    </>;
}


const MessageTab = (props) => {
    const classes = useStyle();
    return <Link
        exact
        to="/chat"
        className={classes.linkText}
    >
        <div className={classes.notificationContainer}>


            <div className={classes.notificationTab}>
                <div style={{ width: "45px", height: "45px", borderRadius: "50%", display: "inline-block", overflow: "hidden" }}>
                    <img src={props.imgSrc} className={classes.notificationAvatar} />
                </div>

                <div className={classes.spacer}></div>


                <div style={{ fontSize: "14px" }}>
                    <Typography style={{ color: "#24459c" }}>{props.name}</Typography>
                    <Typography style={{ color: "#65748B" }}>All the best your work was awesome</Typography>
                    <Typography style={{ color: "#cdcdcd" }}>1 minute ago</Typography>
                </div>

                <div className={classes.spacer}></div>

            </div>

        </div>
    </Link>;
}



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


const AdminInfoHolder = () => {

    const classes = useStyle();

    const [admin, setAdmin] = useState(null);
    const [uid, setUid] = useState("");

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setUid(auth.currentUser.uid);
        getAdmin();
    })

    const dispatch = useDispatch();

    const handleLogout = () => {               
        signOut(auth).then(() => {
            // navigat("/");
            window.location.href = "/";
            alert("Signed out successfully");
        }).catch((error) => {
            alert("Error: " + error);
        });
    }


    function getAdmin () {
        if(uid!="") {
            let url = "https://api.showaapp.com/admin/settings/find-admin-with-id/" + uid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setCurrentUser(data));
                    setAdmin(data); 
            });
        }
    }

    function displayAdmin () {
        if (admin == null)
            return <div className={classes.spacerSmall} />;

        return <div className={classes.optionsIcons}>

            <Avatar alt="Avatar image" style={{ cursor: "pointer" }} onClick={handleClick} src={admin.adminImageAddress} />

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={openEl}
                onClose={handleClose}
            >


                <div className={classes.infoContainer}>
                    <Typography style={{ color: "#424E79", fontSize: "24px", fontWeight: "600" }}>{admin.name}</Typography>
                    <Typography style={{ color: "#313E6A", fontSize: "18px" }}>{admin.accessLevel}</Typography>
                </div>

                <Divider />

                <div className={classes.spacer}></div>


                <Link
                    exact
                    to="/"
                    className={classes.linkText}
                >
                    <MenuItem
                        onClick={
                            () => {
                                handleClose();
                                handleLogout();
                            }
                        }
                    >
                        <PowerSettingsNewOutlined style={{ color: "#313E6A"}} />
                        Sign Out
                    </MenuItem>
                </Link>

            </StyledMenu>

        </div>;
    };


    return (
        <div>{displayAdmin()}</div>
    );
}