import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import { Typography } from "@mui/material";
import DashboardScreen from "./Dashboard/dashboard_screen";
import VendorScreen from "./Vendor/vendor_screen";
import CustomerScreen from "./Customer/customer_screen";
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


const HomeScreen = () => {

    const isSidebarOpen = useSelector((state) => state.openSidebar);
    const currentTab = useSelector((state) => state.changeAppTab);
    const dispatch = useDispatch();

    return (
        <>
            <Sidebar />
            <div className={`container ${!isSidebarOpen ? "inactive" : ""}`}>
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