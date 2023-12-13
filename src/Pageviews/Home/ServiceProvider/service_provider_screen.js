import { Add, Download, MoreVert, Upload } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Component } from "react";
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
    smallMenuHolder: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
}));


const ServiceProviderScreen = () => {
    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.holder}>
                

                <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>Vendor</div>
                        <div className={classes.spacerSmall}></div>
                        <div style={{display: "flex"}}> 
                            <div style={{color: "black"}} className={classes.subtitle}>Dashboard / </div>
                            <div style={{color: "#24459c"}} className={classes.subtitle}>Vendor</div>
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
                <div className={classes.spacerSmall}></div>
                <div className={classes.spacerSmall}></div>
                
                <div className={classes.tableHolder}>
            
                    service provider list

                </div>

            </div>

    );
}

export default ServiceProviderScreen;


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


// class VendorTable extends Component {

//     state = {
//         vendors: [],
//     }


//     componentDidMount = () => {
//         this.getVendors();
//     }


//     getVendors() {
//         fetch('https://api.showaapp.com/admin/vendor/get-all-vendor', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 this.setState({ vendors: data });
//             });
//     }


//     displayVendors = (vendors) => {

//         if (vendors.length === 0)
//             return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//                 <h3>No vendor in the server</h3>
//             </div>;



//         return vendors.map((vendor, index) => (
//             <VendorTab
//                 key={index}
//                 email={vendor.email}
//             />
//         ));

//     };


//     render () {
//         return <div style={{ overflow: "auto" }}>
//             {this.displayVendors(this.state.vendors)}
//         </div>;
//     };

// }


// const VendorTab = (props) => {
//     const classes = useStyle();

//     return (
//         <div>
//             {props.email}
//         </div>
//     );

// }