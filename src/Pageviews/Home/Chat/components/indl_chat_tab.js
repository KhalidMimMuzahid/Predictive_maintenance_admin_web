import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../../../firebase";
import OtherMessage from "./other_message";
import OwnMessage from "./own_message";

const useStyle = makeStyles((theme) => ({
    noContactSelectedContainer: {
        width: "100%", 
        height: "100%", 
        alignItems: "center", 
        justifyContent: "center", 
        fontSize: "32px", 
        textAlign: "center", 
        fontWeight: "700", 
        color: "#787878"
    }
}))

const IndlChatTab = () => {

    const classes = useStyle();
    const userType = useSelector((state) => state.setChatUserType);

    const otherUser = useSelector((state) => state.setChatUser);
    const thisUser = useSelector((state) => state.setCurrentUser);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getIndlMsgs();
    })

    function getIndlMsgs() {

        if(thisUser != null && otherUser != null) {
            var url = "https://api.showaapp.com/admin/chat/get-indl-messages/" + thisUser.uniqueNumberId + "/" + otherUser.uniqueNumberId;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setMessages(data["messages"]);
                });
        }

    }


    function displayMsg () {

        if(thisUser == null || otherUser == null || messages.length == 0){
            return <div className={classes.noContactSelectedContainer}>
                Please wait to be connectd to socket server
            </div>
        }

        return <div>
            {
                messages.map((message, index) => {
                    if(message.sourceId == thisUser.uniqueNumberId) {
                        return <OwnMessage message = {message}/>
                    } else {
                        return <OtherMessage message = {message}/>
                    }
                })
            }

        </div>;


    }

    if(otherUser === null) {
        return (
            <div className={classes.noContactSelectedContainer}>
                Please select an user to chat
            </div>
        );
    } else if (thisUser === null) {
        return (
            <div className={classes.noContactSelectedContainer}>Please wait</div>
        );
    } else {

        return (
            <div>{displayMsg()}</div>
        );
    }


}

export default IndlChatTab;