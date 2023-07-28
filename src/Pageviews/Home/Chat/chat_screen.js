import { ContactPhone, ContactPhoneOutlined, ContactsOutlined, Message, MessageOutlined, Search, Send } from "@mui/icons-material";
import { Avatar, Container, Grid, IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Component, useState } from "react";
import Searched from "./components/searched";
import Contact from "./components/contact";
import Messaged from "./components/message";
import Contacted from "./components/contact";
import IndlChatTab from "./components/indl_chat_tab";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../../../firebase";

const useStyle = makeStyles((theme) => ({
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
    },
    buttonHolder: {
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
    indlChatHolder: {
        display: "flex",
        flexDirection: "column",
        height: "65vh",
        backgroundColor: "white",
    },
    chatHolder: {
        padding: theme.spacing(2),
        overflow: "scroll",
        flex: "1 1 auto"
    },
    contactHolder: {
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        height: "65vh",
        backgroundColor: "white",
    },
    activeMenu: {
        display: "flex",
        height: "35px",
        width: "35px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#24459C",
        color: "white",
        borderRadius: "50%",
        cursor: "pointer",
    },
    inactiveMenu: {
        display: "flex",
        height: "35px",
        width: "35px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "#24459c",
        borderRadius: "50%",
        cursor: "pointer",
        border: "1px solid #D3DFEA"
    },
    spacer: {
        height: "15px",
        width: "15px",
    },
    spacerSmall: {
        height: "5px",
        width: "5px",
    },

}));



const ChatScreen = () => {

    const classes = useStyle();

    const [lastMessage, setLastMessage] = useState(true);
    const [contact, setContact] = useState(false);

    const [searchText, setSearchText] = useState("");

    return (
        <div className={classes.holder}>
                

            <div className={classes.topHolder}>
                <div>
                    <div className={classes.title}>Chat</div>
                    <div className={classes.spacerSmall}></div>
                    <div style={{display: "flex"}}> 
                        <div style={{color: "black"}} className={classes.subtitle}>Dashboard / </div>
                        <div style={{color: "#24459c"}} className={classes.subtitle}>Chat</div>
                    </div>
                </div>

                {/* <div className={classes.buttonHolder}>
                    <Button style={{backgroundColor: "white", color: "black"}} startIcon={<Upload />}>Import</Button>
                    <div className={classes.spacerSmall} />
                    <Button style={{backgroundColor: "white", color: "black"}} startIcon={<Download />}>Export</Button>
                    <div className={classes.spacerSmall} />
                    <Button style={{backgroundColor: "#24459c", color: "white"}}>Add Customer</Button>
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
                                handleClose();
                            }}
                        >
                            <Upload style={{ color: "#313E6A" }} />
                            <div className={classes.spacerSmall} />
                            Import
                        </MenuItem>


                        <MenuItem
                            onClick={() => {
                                handleClose();
                            }}
                        >
                            <Download style={{ color: "#313E6A" }} />
                            <div className={classes.spacerSmall} />
                            Export
                        </MenuItem>


                        <MenuItem
                            onClick={() => {
                                handleClose();
                            }}
                        >
                            <Add style={{ color: "#313E6A" }} />
                            <div className={classes.spacerSmall} />
                            Add Customer
                        </MenuItem>
                        
                    </StyledMenu>


                </div> */}

            </div>
            <div className={classes.spacer}></div>
            <div className={classes.spacer}></div>
            
            <div>
        


                <Grid container spacing={2}>

                    <Grid item xs={3} sm={3} md={4} lg={4}>

                        <div className={classes.contactHolder}>
                            <div style={{ display: "flex", padding: "16px 20px", alignItems: "center" }}>

                                <TextField
                                    placeholder="Search"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <Search />
                                            </>
                                        )
                                    }}
                                    onChange={(e)=>{
                                        setSearchText(e.target.value);
                                    }}
                                />

                                <div className={classes.spacerSmall}></div>

                                <div className={lastMessage ? classes.activeMenu : classes.inactiveMenu} onClick={() => { setContact(false); setLastMessage(true) }} >
                                    <MessageOutlined color={lastMessage ? "white" : "#24459c"} />
                                </div>

                                <div className={classes.spacerSmall}></div>

                                <div className={contact ? classes.activeMenu : classes.inactiveMenu} onClick={() => { setContact(true); setLastMessage(false) }}>
                                    <ContactsOutlined color={contact ? "white" : "#24459c"} />
                                </div>

                            </div>

                            {
                                searchText !== "" ? <Searched text={searchText} /> : contact ? <Contacted /> : <Messaged />                       
                            }


                        </div>

                    </Grid>
                    
                    <Grid item xs={9} sm={9} md={8} lg={8}>

                        <div className={classes.indlChatHolder}>

                            <div style={{padding: "10", borderBottom: "5px solid #E9EBFA" }}>
                                <UserInfoTab />
                            </div>

                            <div className={classes.chatHolder}>
                                <IndlChatTab />
                            </div>

                            <TextFieldContainer />

                        </div>


                    </Grid>

                </Grid>

            </div>

        </div>
    );
}

export default ChatScreen;


const UserInfoTab = () => {

    const classes = useStyle();
    const user = useSelector((state) => state.setChatUser);
    const userType = useSelector((state) => state.setChatUserType);

    if(user === null) {
        return (
            <div></div>
        );
    } else {

        var name = userType == "Admin" ? user.name : user.lastNameAlphabet + ", " + user.firstNameAlphabet;
        var photoAddress = userType == "Admin" ? user.adminImageAddress : user.photoAddress;
        
        return (
            <div style={{padding: "10px", display: "flex", alignItems: "center"}}>

                <Avatar src={photoAddress} />
            
                <div style={{width: "10px"}} />

                <div>
                    {name}
                </div>

            </div>
        );
    }

}


const TextFieldContainer = () => {

    
    const [msgText, setMsgText] = useState("");

    const thisUser = useSelector((state) => state.setCurrentUser);
    const otherUser = useSelector((state) => state.setChatUser);
    

    const sendMsg = () => {
        
        let messageText = msgText;
        let sourceId= thisUser.uniqueNumberId;
        let targetId= otherUser.uniqueNumberId;
        let msgDateTime= Date.now().toString();

        fetch('https://api.showaapp.com/admin/chat/add-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messageText, sourceId, targetId, msgDateTime
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMsgText("");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    if(otherUser === null || thisUser === null) {
        return (
            <div></div>
        );
    } else {
        
        return (
            <Container style={{display: "flex", width: "100%", alignItems: "center", padding: "10px 16px", borderTop: "5px solid #E9EBFA"}}>

                <TextField 
                    size="small"
                    placeholder="Type your message..."
                    fullWidth
                    variant="standard"
                    value={msgText}
                    onChange={(e)=> {
                        setMsgText(e.target.value);
                    }}
                    InputProps={{
                        disableUnderline: true,
                    }}
                />
                <div style={{width: "15px"}} />

                <Send 
                    style={{cursor: "pointer"}}
                    onClick={()=>{
                        if(msgText != "") {
                            sendMsg();
                        }
                    }}
                />

            </Container>
        );
    }

}