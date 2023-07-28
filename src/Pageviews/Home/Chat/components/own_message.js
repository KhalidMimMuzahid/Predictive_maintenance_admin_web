import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    ownMsgContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "end",
        marginBottom: "10px",
    },
    ownMsg: {
        padding: "10px",
        maxWidth: "65%",
        backgroundColor: "#E9EBFA",
        color: "#787878",
    }
}));

const OwnMessage = (props) => {

    const classes = useStyle();

    return (
        <div className={classes.ownMsgContainer}>
            <div className={classes.ownMsg}>
                {props.message.messageText}
            </div>
        </div>
    );
}


export default OwnMessage;