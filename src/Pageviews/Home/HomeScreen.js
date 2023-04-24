import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import { Typography } from "@mui/material";
import DashboardScreen from "./Dashboard/dashboard_screen";
import VendorScreen from "./Vendor/vendor_screen";
import CustomerScreen from "./Customer/customer_screen";
import CustomerDetailsScreen from "./Customer/customer_details_screen";
import ReservationScreen from "./Reservation/reservation_screen";
import RequestScreen from "./Request/request_screen";
import IotScreen from "./IoT/iot_screen";
import WalletScreen from "./Wallet/wallet_screen";
import ShopScreen from "./Shop/shop_screen";
import InventoryScreen from "./Inventory/inventory_screen";
import BidsScreen from "./Bids/bids_screen";
import NotificationsScreen from "./Notifications/notification_screen";
import OffersScreen from "./Offers/offers_screen";
import PackagesScreen from "./Packages/packages_screen";
import SettingsScreen from "./Settings/settings_screen";
import WalletCustomerDetails from "./Wallet/wallet_customer_details";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    leftbar: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    container: {
        marginLeft: "250px",
        boxSizing: "borderBox",
        backgroundColor: "#e4e4e4",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0px",
        },
    },
      
    inactiveContainer: {
        marginLeft: "60px",
        boxSizing: "borderBox",
        backgroundColor: "#e4e4e4",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0px",
        },
    }
}));

const HomeScreen = () => {

    const isSidebarOpen = useSelector((state) => state.openSidebar);
    const currentTab = useSelector((state) => state.changeAppTab);
    const dispatch = useDispatch();

    const classes = useStyle();

    return (
        <>
            <div className={classes.leftbar}>
                <Sidebar />
            </div>
            {/* <div className={`container ${!isSidebarOpen ? "inactive" : ""}`}> */}
            <div className={isSidebarOpen ? classes.container : classes.inactiveContainer}>
                <Topbar />

                {
                    currentTab === "dashboard" && <DashboardScreen />
                }
                {
                    currentTab === "vendor" && <VendorScreen />
                }
                {
                    currentTab === "customer" && <CustomerScreen />
                }
                {
                    currentTab === "customer_details" && <CustomerDetailsScreen />
                }
                {
                    currentTab === "reservation" && <ReservationScreen />
                }
                {
                    currentTab === "request" && <RequestScreen />
                }
                {
                    currentTab === "iot" && <IotScreen />
                }
                {
                    currentTab === "wallet" && <WalletScreen />
                }
                {
                    currentTab === "wallet_customer_details" && <WalletCustomerDetails />
                }
                {
                    currentTab === "shop" && <ShopScreen />
                }
                {
                    currentTab === "inventory" && <InventoryScreen />
                }
                {
                    currentTab === "bids" && <BidsScreen />
                }
                {
                    currentTab === "notification" && <NotificationsScreen />
                }
                {
                    currentTab === "offers" && <OffersScreen />
                }
                {
                    currentTab === "packages" && <PackagesScreen />
                }
                {
                    currentTab === "settings" && <SettingsScreen />
                }
            
            </div>
        </>
    );
}

export default HomeScreen;