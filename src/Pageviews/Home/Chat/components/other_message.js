import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    otherMsgContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "end",
        marginBottom: "10px",
    },
    otherMsg: {
        padding: "10px",
        maxWidth: "65%",
        backgroundColor: "#E9EBFA",
        color: "#787878",
    }
}));

const OtherMessage = (props) => {

    const classes = useStyle();

    return (
        <div className={classes.otherMsgContainer}>
            <div className={classes.otherMsg}>
                {props.message.messageText}
            </div>
        </div>
    );
}


export default OtherMessage;