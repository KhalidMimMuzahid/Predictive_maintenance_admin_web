import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Topbar from "./Components/Topbar";

import LoginScreen from "./Pageviews/Onboarding/LoginScreen";

import DashboardScreen from "./Pageviews/Home/Dashboard/dashboard_screen";
import ServiceProviderScreen from "./Pageviews/Home/ServiceProvider/service_provider_screen";
import CustomerScreen from "./Pageviews/Home/Customer/customer_screen";
import FeedScreen from "./Pageviews/Home/Feed/feed_screen";
import IotScreen from "./Pageviews/Home/IoT/iot_screen";
import WalletScreen from "./Pageviews/Home/Wallet/wallet_screen";
import TeamScreen from "./Pageviews/Home/Team/team_screen";
import InvoiceScreen from "./Pageviews/Home/Invoice/invoice_screen";
import ProjectScreen from "./Pageviews/Home/Project/project_screen";
import DataExportScreen from "./Pageviews/Home/DataExport/data_export_screen";

import MarketplaceScreen from "./Pageviews/Home/Marketplace/marketplace_screen";
import InventoryScreen from "./Pageviews/Home/Inventory/inventory_screen";
import NotificationScreen from "./Pageviews/Home/Notifications/notification_screen";
import HelpAIScreen from "./Pageviews/Home/HelpAI/help_ai_screen";
import OffersScreen from "./Pageviews/Home/Offers/offers_screen";
import PackagesScreen from "./Pageviews/Home/Packages/packages_screen";
import SettingsScreen from "./Pageviews/Home/Settings/settings_screen";
import CollapsibleSidebar from "./Components/CollapsibleSIdebar";
import FAQ from "./Pageviews/Home/HelpAI/pageviews/faq";
import LearningResources from "./Pageviews/Home/HelpAI/pageviews/learning_resources";
import AllTransaction from "./Pageviews/Home/Wallet/pageviews/all_transaction";
import WithdrawRequest from "./Pageviews/Home/Wallet/pageviews/withdraw_request";
import WalletCustomerDetails from "./Pageviews/Home/Wallet/wallet_customer_details";
import ControlPanelCustomer from "./Pageviews/Home/ControlPanel/pageviews/control_panel_customer_screen";
import ControlPanelMachine from "./Pageviews/Home/ControlPanel/pageviews/control_panel_machine_screen";
import ControlPanelInventory from "./Pageviews/Home/ControlPanel/pageviews/control_panel_inventory_screen";
import ControlPanelIot from "./Pageviews/Home/ControlPanel/pageviews/control_panel_iot_screen";
import ControlPanelReservationRequest from "./Pageviews/Home/ControlPanel/pageviews/control_panel_reservation_request_screen";
import ControlPanelShop from "./Pageviews/Home/ControlPanel/pageviews/control_panel_shop_screen";
import ControlPanelVendor from "./Pageviews/Home/ControlPanel/pageviews/control_panel_vendor_screen";
import ControlPanelWallet from "./Pageviews/Home/ControlPanel/pageviews/control_panel_wallet_screen";
import ReportScreen from "./Pageviews/Home/Reports/reports_screen";
import CustomerDetails from "./Pageviews/Home/Customer/customerDetails/CustomerDetails";
import Default from "./Pageviews/Home/Customer/pages/Default";
import Details from "./Pageviews/Home/Customer/customerDetails/rightSection/body/details/Details";
import PersonalInfo from "./Pageviews/Home/Customer/customerDetails/rightSection/body/details/body/personalInfo/PersonalInfo";
import Address from "./Pageviews/Home/Customer/customerDetails/rightSection/body/details/body/address/Address";
import Wallet from "./Pageviews/Home/Customer/customerDetails/rightSection/body/details/body/wallet/Wallet";
import MachineStatus from "./Pageviews/Home/Customer/customerDetails/rightSection/body/machineStatus/MachineStatus";
import Invoice from "./Pageviews/Home/Customer/customerDetails/rightSection/body/invoice/Invoice";
import Request from "./Pageviews/Home/Customer/customerDetails/rightSection/body/request/Request";
import ServiceProviderPageDefault from "./Pageviews/Home/ServiceProvider/pages/ServiceProviderPageDefault";
import ServiceProviderDetails from "./Pageviews/Home/ServiceProvider/serviceProviderDetails/ServiceProviderDetails";
import ServiceProviderRequest from "./Pageviews/Home/ServiceProvider/serviceProviderDetails/rightSection/body/request/ServiceProviderRequest";
import Revenue from "./Pageviews/Home/ServiceProvider/serviceProviderDetails/rightSection/body/revenue/Revenue";
import Team from "./Pageviews/Home/ServiceProvider/serviceProviderDetails/rightSection/body/team/Team";
import Schedule from "./Pageviews/Home/ServiceProvider/serviceProviderDetails/rightSection/body/schedule/Schedule";
import Settings from "./Pageviews/Home/ServiceProvider/serviceProviderDetails/rightSection/body/settings/Settings";
import { setUser, toggleLoading } from "./features/authentication/authSlice";

// connected
import AllReservation from "./Pageviews/Home/Reservation/Connected/AllReservation/AllReservation";
import OnDemand from "./Pageviews/Home/Reservation/Connected/OnDemand/OnDemand";
import WithinOneWeek from "./Pageviews/Home/Reservation/Connected/WithinOneWeek/WithinOneWeek";
import WithinTwoWeek from "./Pageviews/Home/Reservation/Connected/WithinTwoWeek/WithinTwoWeek";
import AcceptedRequest from "./Pageviews/Home/Reservation/Connected/AcceptedRequest/AcceptedRequest";
import ScheduleTime from "./Pageviews/Home/Reservation/Connected/ScheduleTime/ScheduleTime";
import OnGoing from "./Pageviews/Home/Reservation/Connected/OnGoing/OnGoing";
import ReSchedule from "./Pageviews/Home/Reservation/Connected/ReShedule/ReSchedule";
import Completed from "./Pageviews/Home/Reservation/Connected/Completed/Completed";

// non connected
import AllReservationNonConnected from "./Pageviews/Home/Reservation/NonConnected/AllReservation/AllReservation";
import OnDemandNonConnected from "./Pageviews/Home/Reservation/NonConnected/OnDemand/OnDemand";
import WithinOneWeekNonConnected from "./Pageviews/Home/Reservation/NonConnected/WithinOneWeek/WithinOneWeek";
import WithinTwoWeekNonConnected from "./Pageviews/Home/Reservation/NonConnected/WithinTwoWeek/WithinTwoWeek";
import AcceptedRequestNonConnected from "./Pageviews/Home/Reservation/NonConnected/AcceptedRequest/AcceptedRequest";
import ScheduleTimeNonConnected from "./Pageviews/Home/Reservation/NonConnected/ScheduleTime/ScheduleTime";
import OnGoingNonConnected from "./Pageviews/Home/Reservation/NonConnected/OnGoing/OnGoing";
import ReScheduleNonConnected from "./Pageviews/Home/Reservation/NonConnected/ReShedule/ReSchedule";
import CompletedNonConnected from "./Pageviews/Home/Reservation/NonConnected/Completed/Completed";
import Footer from "./Utils/Footer";
import ReservationScreen from "./Pageviews/Home/Reservation/ReservationScreen";
import { ToastContainer } from "react-toastify";
import DeleteAccountScreen from "./Pageviews/DeleteAccount/DeleteAccountScreen";
import ChatScreen from "./Pageviews/Home/Chat/ChatScreen";
import BidsScreen from "./Pageviews/Home/Bids/BidsScreen";
import BidsConnectedAllGroup from "./Pageviews/Home/Bids/Connected/AllGroup/BidsConnectedAllGroup";
import BidsConnectedPending from "./Pageviews/Home/Bids/Connected/Pending/BidsConnectedPending";
import BidsConnectedClosedGroup from "./Pageviews/Home/Bids/Connected/BidClosedGroup/BidsConnectedClosedGroup";
import BidsConnectedAssignedToCompany from "./Pageviews/Home/Bids/Connected/AssignedToCompany/BidsConnectedAssignedToCompany";
import BidsConnectedOngoing from "./Pageviews/Home/Bids/Connected/Ongoing/BidsConnectedOngoing";
import BidsConnectedComplete from "./Pageviews/Home/Bids/Connected/Completed/BidsConnectedComplete";
import BidsNonConnectedAllGroup from "./Pageviews/Home/Bids/NonConnected/AllGroup/BidsNonConnectedAllGroup";
import BidsNonConnectedPending from "./Pageviews/Home/Bids/NonConnected/Pending/BidsNonConnectedPending";
import BidsNonConnectedClosedGroup from "./Pageviews/Home/Bids/NonConnected/BidClosedGroup/BidsNonConnectedClosedGroup";
import BidsNonConnectedAssignedToCompany from "./Pageviews/Home/Bids/NonConnected/AssignedToCompany/BidsNonConnectedAssignedToCompany";
import BidsNonConnectedOngoing from "./Pageviews/Home/Bids/NonConnected/Ongoing/BidsNonConnectedOngoing";
import BidsNonConnectedComplete from "./Pageviews/Home/Bids/NonConnected/Completed/BidsNonConnectedComplete";

const theme = createTheme();

const useStyle = makeStyles((theme) => ({
  leftbar: {
    display: "flex",
    // [theme.breakpoints.down("sm")]: {
    //     display: "none",
    // },
  },
  container: {
    marginLeft: "250px",
    boxSizing: "borderBox",
    backgroundColor: "#e4e4e4",
    // [theme.breakpoints.down("sm")]: {
    //     marginLeft: "0px"            ,
    // },
  },

  inactiveContainer: {
    marginLeft: "60px",
    boxSizing: "borderBox",
    backgroundColor: "#e4e4e4",
    // [theme.breakpoints.down("sm")]: {
    //     marginLeft: "0px"          ,
    // },
  },
}));

function App() {
  const [authUser, setAuthUser] = useState(null);

  const classes = useStyle();

  const isSidebarOpen = useSelector((state) => state.openSidebar);

  // OnAuthStateChanged
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch(
          `${process.env.REACT_APP_BASE_URL}/user/sign-in?uid=${user?.uid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data?.success) {
              dispatch(setUser(data?.data?.user));
              localStorage.setItem(
                "user-token",
                JSON.stringify(data?.data?.token)
              );
            }
          });
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          justifyContent: "center",
          margin: "0px auto",
        }}
      >
        <BrowserRouter>
          {authUser ? (
            <>
              <CollapsibleSidebar>
                <Topbar />

                <Routes>
                  <Route path="/" element={<DashboardScreen />} />
                  <Route path="/dashboard" element={<DashboardScreen />} />

                  {/* service provider start */}

                  <Route
                    path="/service-provider"
                    element={<ServiceProviderScreen />}
                  >
                    <Route
                      path="/service-provider"
                      element={<ServiceProviderPageDefault />}
                    />
                    <Route
                      path="/service-provider/:_id"
                      element={<ServiceProviderDetails />}
                    >
                      {/* start  */}
                      <Route
                        path="/service-provider/:_id"
                        // element={<ServiceProviderRequest />}
                      >
                        <Route
                          path="/service-provider/:_id/request"
                          element={<ServiceProviderRequest />}
                        />
                        <Route
                          path="/service-provider/:_id/revenue"
                          element={<Revenue />}
                        />
                        <Route
                          path="/service-provider/:_id/team"
                          element={<Team />}
                        />
                        <Route
                          path="/service-provider/:_id/schedule"
                          element={<Schedule />}
                        />
                        <Route
                          path="/service-provider/:_id/setting"
                          element={<Settings />}
                        />
                      </Route>
                      {/* end  */}
                      <Route
                        path="/service-provider/:_id/machine-status"
                        element={<MachineStatus />}
                      />
                      <Route
                        path="/service-provider/:_id/invoice"
                        element={<Invoice />}
                      />
                      <Route
                        path="/service-provider/:_id/request"
                        element={<Request />}
                      />
                    </Route>
                  </Route>
                  {/* service provider end */}
                  {/* customer screen start  */}
                  <Route path="/customer" element={<CustomerScreen />}>
                    <Route path="/customer" element={<Default />} />
                    <Route path="/customer/:_id" element={<CustomerDetails />}>
                      {/* start  */}
                      <Route
                        path="/customer/:_id/details"
                        element={<Details />}
                      >
                        <Route
                          path="/customer/:_id/details"
                          element={<PersonalInfo />}
                        />
                        <Route
                          path="/customer/:_id/details/personal-info"
                          element={<PersonalInfo />}
                        />
                        <Route
                          path="/customer/:_id/details/address"
                          element={<Address />}
                        />
                        <Route
                          path="/customer/:_id/details/wallet"
                          element={<Wallet />}
                        />
                      </Route>
                      {/* end  */}
                      <Route
                        path="/customer/:_id/machine-status"
                        element={<MachineStatus />}
                      />
                      <Route
                        path="/customer/:_id/invoice"
                        element={<Invoice />}
                      />
                      <Route
                        path="/customer/:_id/request"
                        element={<Request />}
                      />
                    </Route>
                  </Route>

                  {/* customer screen end  */}
                  {/* Chat Screen Start */}
                  <Route path="/chat" element={<ChatScreen />} />
                  {/* Chat Screen End */}
                  <Route path="/feed" element={<FeedScreen />} />

                  {/* Reservation Screen */}
                  <Route path="/reservation" element={<ReservationScreen />} />
                  <Route
                    path="/reservation/connected/all"
                    element={<AllReservation />}
                  />
                  <Route
                    path="/reservation/connected/on-demand"
                    element={<OnDemand />}
                  />

                  <Route
                    path="/reservation/connected/within-one-week"
                    element={<WithinOneWeek />}
                  />
                  <Route
                    path="/reservation/connected/within-two-week"
                    element={<WithinTwoWeek />}
                  />
                  <Route
                    path="/reservation/connected/schedule-time"
                    element={<ScheduleTime />}
                  />
                  <Route
                    path="/reservation/connected/accepted"
                    element={<AcceptedRequest />}
                  />
                  <Route
                    path="/reservation/connected/ongoing"
                    element={<OnGoing />}
                  />
                  <Route
                    path="/reservation/connected/reschedule"
                    element={<ReSchedule />}
                  />
                  <Route
                    path="/reservation/connected/completed"
                    element={<Completed />}
                  />

                  {/* non connected  */}
                  <Route
                    path="/reservation/non-connected/all"
                    element={<AllReservationNonConnected />}
                  />
                  <Route
                    path="/reservation/non-connected/on-demand"
                    element={<OnDemandNonConnected />}
                  />

                  <Route
                    path="/reservation/non-connected/within-one-week"
                    element={<WithinOneWeekNonConnected />}
                  />
                  <Route
                    path="/reservation/non-connected/within-two-week"
                    element={<WithinTwoWeekNonConnected />}
                  />
                  <Route
                    path="/reservation/non-connected/schedule-time"
                    element={<ScheduleTimeNonConnected />}
                  />
                  <Route
                    path="/reservation/non-connected/accepted"
                    element={<AcceptedRequestNonConnected />}
                  />
                  <Route
                    path="/reservation/non-connected/ongoing"
                    element={<OnGoingNonConnected />}
                  />
                  <Route
                    path="/reservation/non-connected/reschedule"
                    element={<ReScheduleNonConnected />}
                  />
                  <Route
                    path="/reservation/non-connected/completed"
                    element={<CompletedNonConnected />}
                  />
                  {/* 
                 
        

                  <Route
                    path="/reservation/non-connected/all"
                    element={<NonConnectedAllReservation />}
                  />
                  <Route
                    path="/reservation/non-connected/on-demand"
                    element={<NonConnectedOnDemandReservation />}
                  />
                  <Route
                    path="/reservation/non-connected/within-one-week"
                    element={<NonConnectedWithinOneWeekReservation />}
                  />
                  <Route
                    path="/reservation/non-connected/within-two-week"
                    element={<NonConnectedWithinTwoWeekReservation />}
                  />
                  <Route
                    path="/reservation/non-connected/schedule-time"
                    element={<NonConnectedScheduleTimeReservation />}
                  />
                  <Route
                    path="/reservation/non-connected/accepted"
                    element={<NonConnectedAcceptedReservation />}
                  />
                  <Route
                    path="/reservation/non-connected/ongoing"
                    element={<NonConnectedOngoingMaintenance />}
                  />
                  <Route
                    path="/reservation/non-connected/reschedule"
                    element={<NonConnectedRescheduledRequest />}
                  />
                  <Route
                    path="/reservation/non-connected/completed"
                    element={<NonConnectedCompletedReservation />}
                  />


 */}

                  <Route path="/iot" element={<IotScreen />} />
                  <Route path="/wallet" element={<WalletScreen />} />

                  <Route
                    path="/wallet/customer"
                    element={<WalletCustomerDetails />}
                  />
                  <Route
                    path="/wallet/alltransaction"
                    element={<AllTransaction />}
                  />
                  <Route
                    path="/wallet/withdrawrequest"
                    element={<WithdrawRequest />}
                  />

                  <Route path="/team" element={<TeamScreen />} />
                  <Route path="/invoice" element={<InvoiceScreen />} />
                  <Route path="/project" element={<ProjectScreen />} />
                  <Route path="/data-export" element={<DataExportScreen />} />

                  <Route path="/marketplace" element={<MarketplaceScreen />} />
                  <Route path="/inventory" element={<InventoryScreen />} />

                  {/* Bids Start */}

                  <Route path="/bids" element={<BidsScreen />} />
                  <Route
                    path="/bids/connected/all-group"
                    element={<BidsConnectedAllGroup />}
                  />
                  <Route
                    path="/bids/connected/pending"
                    element={<BidsConnectedPending />}
                  />
                  <Route
                    path="/bids/connected/bid-closed-group"
                    element={<BidsConnectedClosedGroup />}
                  />
                  <Route
                    path="/bids/connected/assigned-to-company"
                    element={<BidsConnectedAssignedToCompany />}
                  />
                  <Route
                    path="/bids/connected/ongoing"
                    element={<BidsConnectedOngoing />}
                  />
                  <Route
                    path="/bids/connected/completed"
                    element={<BidsConnectedComplete />}
                  />

                  <Route
                    path="/bids/non-connected/all-group"
                    element={<BidsNonConnectedAllGroup />}
                  />
                  <Route
                    path="/bids/non-connected/pending"
                    element={<BidsNonConnectedPending />}
                  />
                  <Route
                    path="/bids/non-connected/bid-closed-group"
                    element={<BidsNonConnectedClosedGroup />}
                  />
                  <Route
                    path="/bids/non-connected/assigned-to-company"
                    element={<BidsNonConnectedAssignedToCompany />}
                  />
                  <Route
                    path="/bids/non-connected/ongoing"
                    element={<BidsNonConnectedOngoing />}
                  />
                  <Route
                    path="/bids/non-connected/completed"
                    element={<BidsNonConnectedComplete />}
                  />
                  {/* <Route
                    path="/bids/connected/canceled"
                    element={<ConnectedScheduleTimeBids />}
                  /> */}

                  {/* <Route
                    path="/bids/non-connected/all"
                    element={<NonConnectedAllBids />}
                  />
                  <Route
                    path="/bids/non-connected/on-demand"
                    element={<NonConnectedOnDemandBids />}
                  />
                  <Route
                    path="/bids/non-connected/within-one-week"
                    element={<NonConnectedWithinOneWeekBids />}
                  />
                  <Route
                    path="/bids/non-connected/within-two-week"
                    element={<NonConnectedWithinTwoWeekBids />}
                  />
                  <Route
                    path="/bids/non-connected/schedule-time"
                    element={<NonConnectedScheduleTimeBids />}
                  /> */}

                  {/* Bids End */}

                  <Route
                    path="/notifications"
                    element={<NotificationScreen />}
                  />
                  <Route path="/help/faq" element={<FAQ />} />
                  <Route
                    path="/help/learningresources"
                    element={<LearningResources />}
                  />
                  <Route path="/offers" element={<OffersScreen />} />
                  <Route path="/packages" element={<PackagesScreen />} />
                  <Route path="/reports" element={<ReportScreen />} />
                  <Route
                    path="/control_panel/reservation_request"
                    element={<ControlPanelReservationRequest />}
                  />
                  <Route
                    path="/control_panel/customer"
                    element={<ControlPanelCustomer />}
                  />
                  <Route
                    path="/control_panel/machine"
                    element={<ControlPanelMachine />}
                  />
                  <Route
                    path="/control_panel/vendor"
                    element={<ControlPanelVendor />}
                  />
                  <Route
                    path="/control_panel/IoT"
                    element={<ControlPanelIot />}
                  />
                  <Route
                    path="/control_panel/wallet"
                    element={<ControlPanelWallet />}
                  />
                  <Route
                    path="/control_panel/shop"
                    element={<ControlPanelShop />}
                  />
                  <Route
                    path="/control_panel/inventory"
                    element={<ControlPanelInventory />}
                  />
                  <Route path="/settings" element={<SettingsScreen />} />
                </Routes>
              </CollapsibleSidebar>

              {/* <div className={classes.leftbar}>
                    <Sidebar />
                </div>

                <div className={isSidebarOpen ? classes.container : classes.inactiveContainer}>

                  <Topbar />

                  <Routes>
                    <Route path="/" element={<DashboardScreen />} />
                    <Route path="/dashboard" element={<DashboardScreen />} />
                    <Route path="/vendor" element={<VendorScreen />} />
                    <Route path="/customer" element={<CustomerScreen />} />
                    <Route path="/chat" element={<ChatScreen />} />
                    <Route path="/reservation" element={<ReservationScreen />} />
                    <Route path="/iot" element={<IotScreen />} />
                    <Route path="/wallet" element={<WalletScreen />} />
                    <Route path="/shop" element={<ShopScreen />} />
                    <Route path="/intentory" element={<InventoryScreen />} />
                    <Route path="/bids" element={<BidsScreen />} />
                    <Route path="/notifications" element={<NotificationScreen />} />
                    <Route path="/helpai" element={<HelpAIScreen />} />
                    <Route path="/offers" element={<OffersScreen />} />
                    <Route path="/packages" element={<PackagesScreen />} />
                    <Route path="/settings" element={<SettingsScreen />} />
                  </Routes>

                </div> */}
            </>
          ) : (
            <Routes>
              <Route path="/" element={<LoginScreen />} />
              <Route path="/deleteAccount" element={<DeleteAccountScreen />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </ThemeProvider>
  );
}

export default App;
