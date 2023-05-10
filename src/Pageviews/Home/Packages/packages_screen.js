import { Add, ArrowDropDown, MoreVert } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useState } from "react";

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
    tableHolder: {
        width: "100%",
        backgroundColor: "white",
    },

}))

const PackagesScreen = () => {


    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const classes = useStyle();

    return (
        <div className={classes.holder}>
            
            <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>Packages</div>
                    </div>

                    <div className={classes.buttonHolder}>
                        <Button style={{backgroundColor: "#24459c", color: "white"}}>Create New Package</Button>
                        <div className={classes.spacerSmall} />
                        <Button style={{backgroundColor: "white", color: "black"}} endIcon={<ArrowDropDown />}>All Packages</Button>
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
                                <Add style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                Create New Package
                            </MenuItem>


                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                <ArrowDropDown style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                All Packages
                            </MenuItem>
                            
                        </StyledMenu>


                    </div>

            </div>
            <div className={classes.spacerSmall}></div>
            <div className={classes.spacerSmall}></div>


            <div className={classes.tableHolder}>
                yearly packages
            </div>
            <div className={classes.spacerSmall}></div>
            <div className={classes.spacerSmall}></div>

            <div className={classes.tableHolder}>
                monthly packages
            </div>

        </div>
    );
}

export default PackagesScreen;



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
