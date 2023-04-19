import { AppBar, Avatar, Badge, Divider, InputAdornment, InputBase, Menu, MenuItem, styled, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact1 from "../Assets/Component/contact1.jpg";
import Contact2 from "../Assets/Component/contact2.jpg";
import Contact3 from "../Assets/Component/contact3.jpg";
import Contact4 from "../Assets/Component/contact4.jpg";
import Contact5 from "../Assets/Component/contact5.jpg";
import Contact6 from "../Assets/Component/contact6.jpg";
import UserImage from "../Assets/Component/user_image.jfif";
import { Cancel, ChatOutlined, Edit, MailOutline, NotificationsOutlined, Person, PowerSettingsNewOutlined, Search, SentimentSatisfied, Settings, SettingsApplications, ShoppingCart } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";




const usesStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
    },

    icons: {
        display: "flex",
        alignItems: "center",
    },
    badge: {
        marginRight: theme.spacing(2),
        cursor: "Pointer",
    },

    cancel: {
        color: "grey",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        display: "block",
        cursor: "Pointer",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },


    searchBarHolder: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    input: {
        width: "100%",  
    },
    searchButton: {
        display: "flex",
        [theme.breakpoints.up("xs")]: {
            display: "none",
        }
    },
    searchProxy: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
        }
    },

    badgeIcon: {
        color: "#5D6396",
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
        padding: theme.spacing(2)
    },
    spacer: {
        height: "15px",
        width: "15px",
    },
    spacerSmall: {
        height: "5px",
        width: "5px",
    },
    notificationContainer: {
        padding: theme.spacing(1),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
    },
    notificationTab: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    notificationAvatar: {
        maxWidth: "100%"
    },
    seeMoreText: {
        display: "flex",
        justifyContent: "center",
        color: "#24459c",
        fontSize: "15px",
        padding: theme.spacing(1),
    },

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




const Navbar = () => {
    const [searchText, setSearchText] = useState("");

    const [open, setOpen] = useState(false);
    const classes = usesStyles({open});


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



    return <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>


            <div className={classes.searchBarHolder}>
                
                <TextField 
                    variant="outlined" 
                    placeholder="Search..." 
                    size="small"  
                    onChange={(e) => setSearchText(e.target.value)} 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{<Search />}</InputAdornment>,
                        endAdornment: <InputAdornment position="end">
                            {<Cancel onClick={()=>setSearchText("")} style={{cursor: "pointer"}}/>}
                        </InputAdornment>,
                    }}
                    className={classes.input}
                />

            </div>

            <div className={classes.searchProxy}></div>
            

                <div className={classes.icons}>

                    <Search className={classes.searchButton} onClick={() => setOpen(true)} />

                    <div>

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


                    <div>
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

                    <div>

                        <Avatar alt="Avatar image" style={{ cursor: "pointer" }} onClick={handleClick} src={ UserImage } />

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
                                <Typography style={{ color: "#424E79", fontSize: "24px", fontWeight: "600" }}>Dipankar Paul</Typography>
                                <Typography style={{ color: "#313E6A", fontSize: "18px" }}>Super Admin</Typography>
                            </div>

                            <Divider />

                            <div className={classes.spacer}></div>

                            <Link
                                exact
                                to="/admin/settings"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            handleClose();
                                        }
                                    }
                                >
                                    <Person style={{ color: "#313E6A" }} />
                                    Profile
                                </MenuItem>
                            </Link>
                            <Link
                                exact
                                to="/admin/settings"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            handleClose();
                                        }
                                    }
                                >
                                    <Settings style={{ color: "#313E6A" }} />
                                    Settings
                                </MenuItem>
                            </Link>
                            <Link
                                exact
                                to="/admin/chat"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            handleClose();
                                        }
                                    }
                                >
                                    <MailOutline style={{ color: "#313E6A" }} />
                                    Messages
                                </MenuItem>
                            </Link>

                            <Link
                                exact
                                to="/admin/dashboard"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            window.userType = "admin";
                                            handleClose();
                                        }
                                    }
                                >
                                    <SettingsApplications style={{ color: "#313E6A" }} />
                                    Switch as Admin
                                </MenuItem>
                            </Link>

                            <Link
                                exact
                                to="/vendor/dashboard"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            window.userType = "vendor";
                                            handleClose();
                                        }
                                    }
                                >
                                    <ShoppingCart style={{ color: "#313E6A" }} />
                                    Switch as Vendor
                                </MenuItem>
                            </Link>

                            <Link
                                exact
                                to="/user/dashboard"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            window.userType = "user";
                                            handleClose();
                                        }
                                    }
                                >
                                    <SentimentSatisfied style={{ color: "#313E6A" }} />
                                    Switch as User
                                </MenuItem>
                            </Link>

                            <Link
                                exact
                                to="/admin/settings"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            handleClose();
                                        }
                                    }
                                >
                                    <Edit style={{ color: "#313E6A" }} />
                                    Change Password
                                </MenuItem>
                            </Link>
                            <Link
                                exact
                                to="/"
                                className={classes.linkText}
                            >
                                <MenuItem
                                    onClick={
                                        () => {
                                            handleClose();
                                        }
                                    }
                                >
                                    <PowerSettingsNewOutlined style={{ color: "#313E6A"}} />
                                    Sign Out
                                </MenuItem>
                            </Link>
                        </StyledMenu>
                    </div>
                </div>


        </Toolbar>
    </AppBar>;
};


const NotificationTab = (props) => {
    const classes = usesStyles();
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
    const classes = usesStyles();
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


export default Navbar;