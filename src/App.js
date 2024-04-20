import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import Topbar from "./Components/Topbar";

import LoginScreen from "./Pageviews/Onboarding/LoginScreen";

import DashboardScreen from "./Pageviews/Home/Dashboard/dashboard_screen";
import ServiceProviderScreen from "./Pageviews/Home/ServiceProvider/service_provider_screen";
import CustomerScreen from "./Pageviews/Home/Customer/customer_screen";
import ChatScreen from "./Pageviews/Home/Chat/chat_screen";
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

import ConnectedAllReservation from "./Pageviews/Home/Reservation/connected/connected_all_reservation";
import ConnectedOnDemandReservation from "./Pageviews/Home/Reservation/connected/connected_on_demand_reservation";
import ConnectedWithinOneWeekReservation from "./Pageviews/Home/Reservation/connected/connected_within_one_week_request";
import ConnectedWithinTwoWeekReservation from "./Pageviews/Home/Reservation/connected/connected_within_two_week_request";
import ConnectedScheduleTimeReservation from "./Pageviews/Home/Reservation/connected/connected_schedule_time_request";
import ConnectedAcceptedReservation from "./Pageviews/Home/Reservation/connected/connected_accepted_request";
import ConnectedOngoingMaintenance from "./Pageviews/Home/Reservation/connected/connected_ongoing_maintenance";
import ConnectedRescheduledRequest from "./Pageviews/Home/Reservation/connected/connected_reschedule_request";
import ConnectedCompletedReservation from "./Pageviews/Home/Reservation/connected/connected_completed_request";

import NonConnectedAllReservation from "./Pageviews/Home/Reservation/non-connected/non_connected_all_reservation";
import NonConnectedOnDemandReservation from "./Pageviews/Home/Reservation/non-connected/non_connected_on_demand_reservation";
import NonConnectedWithinOneWeekReservation from "./Pageviews/Home/Reservation/non-connected/non_connected_within_one_week_request";
import NonConnectedWithinTwoWeekReservation from "./Pageviews/Home/Reservation/non-connected/non_connected_within_two_week_request";
import NonConnectedScheduleTimeReservation from "./Pageviews/Home/Reservation/non-connected/non_connected_schedule_time_request";
import NonConnectedAcceptedReservation from "./Pageviews/Home/Reservation/non-connected/non_connected_accepted_request";
import NonConnectedOngoingMaintenance from "./Pageviews/Home/Reservation/non-connected/non_connected_ongoing_maintenance";
import NonConnectedRescheduledRequest from "./Pageviews/Home/Reservation/non-connected/non_connected_reschedule_request";
import NonConnectedCompletedReservation from "./Pageviews/Home/Reservation/non-connected/non_connected_completed_request";

import ConnectedAllBids from "./Pageviews/Home/Bids/connected/connected_all_bids";
import ConnectedOnDemandBids from "./Pageviews/Home/Bids/connected/connected_on_demand_bids";
import ConnectedWithinOneWeekBids from "./Pageviews/Home/Bids/connected/connected_within_one_week_bids";
import ConnectedWithinTwoWeekBids from "./Pageviews/Home/Bids/connected/connected_within_two_week_bids";
import ConnectedScheduleTimeBids from "./Pageviews/Home/Bids/connected/connected_schedule_time_bids";

import NonConnectedAllBids from "./Pageviews/Home/Bids/non_connected/non_connected_all_bids";
import NonConnectedOnDemandBids from "./Pageviews/Home/Bids/non_connected/non_connected_on_demand_bids";
import NonConnectedWithinOneWeekBids from "./Pageviews/Home/Bids/non_connected/non_connected_within_one_week_bids";
import NonConnectedWithinTwoWeekBids from "./Pageviews/Home/Bids/non_connected/non_connected_within_two_week_bids";
import NonConnectedScheduleTimeBids from "./Pageviews/Home/Bids/non_connected/non_connected_schedule_time_bids";
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
          `http://localhost:5000/api/v2/user/showa-user/sign-in?uid=${user?.uid}`,
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
              dispatch(setUser(data?.data));
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
      <div className="App">
        <BrowserRouter>
          {authUser ? (
            <>
              <CollapsibleSidebar>
                <Topbar />

                <Routes>
                  <Route path="/" element={<DashboardScreen />} />
                  <Route path="/dashboard" element={<DashboardScreen />} />

                  {/* service provider startssss */}

                  <Route
                    path="/service-provider"
                    element={<ServiceProviderScreen />}
                  >
                    <Route
                      path="/service-provider"
                      element={<ServiceProviderPageDefault />}
                    />
                    <Route
                      path="/service-provider/:uid"
                      element={<ServiceProviderDetails />}
                    >
                      {/* start  */}
                      <Route
                        path="/service-provider/:uid"
                        // element={<ServiceProviderRequest />}
                      >
                        <Route
                          path="/service-provider/:uid/request"
                          element={<ServiceProviderRequest />}
                        />
                        <Route
                          path="/service-provider/:uid/revenue"
                          element={<Revenue />}
                        />
                        <Route
                          path="/service-provider/:uid/team"
                          element={<Team />}
                        />
                        <Route
                          path="/service-provider/:uid/schedule"
                          element={<Schedule />}
                        />
                        <Route
                          path="/service-provider/:uid/setting"
                          element={<Settings />}
                        />
                      </Route>
                      {/* end  */}
                      <Route
                        path="/service-provider/:uid/machine-status"
                        element={<MachineStatus />}
                      />
                      <Route
                        path="/service-provider/:uid/invoice"
                        element={<Invoice />}
                      />
                      <Route
                        path="/service-provider/:uid/request"
                        element={<Request />}
                      />
                    </Route>
                  </Route>
                  {/* service provider end */}
                  {/* customer screen start  */}
                  <Route path="/customer" element={<CustomerScreen />}>
                    <Route path="/customer" element={<Default />} />
                    <Route path="/customer/:uid" element={<CustomerDetails />}>
                      {/* start  */}
                      <Route
                        path="/customer/:uid/details"
                        element={<Details />}
                      >
                        <Route
                          path="/customer/:uid/details"
                          element={<PersonalInfo />}
                        />
                        <Route
                          path="/customer/:uid/details/personal-info"
                          element={<PersonalInfo />}
                        />
                        <Route
                          path="/customer/:uid/details/address"
                          element={<Address />}
                        />
                        <Route
                          path="/customer/:uid/details/wallet"
                          element={<Wallet />}
                        />
                      </Route>
                      {/* end  */}
                      <Route
                        path="/customer/:uid/machine-status"
                        element={<MachineStatus />}
                      />
                      <Route
                        path="/customer/:uid/invoice"
                        element={<Invoice />}
                      />
                      <Route
                        path="/customer/:uid/request"
                        element={<Request />}
                      />
                    </Route>
                  </Route>

                  {/* customer screen end  */}
                  <Route path="/chat" element={<ChatScreen />} />
                  <Route path="/feed" element={<FeedScreen />} />

                  <Route
                    path="/reservation/connected/all"
                    element={<ConnectedAllReservation />}
                  />
                  <Route
                    path="/reservation/connected/on-demand"
                    element={<ConnectedOnDemandReservation />}
                  />
                  <Route
                    path="/reservation/connected/within-one-week"
                    element={<ConnectedWithinOneWeekReservation />}
                  />
                  <Route
                    path="/reservation/connected/within-two-week"
                    element={<ConnectedWithinTwoWeekReservation />}
                  />
                  <Route
                    path="/reservation/connected/schedule-time"
                    element={<ConnectedScheduleTimeReservation />}
                  />
                  <Route
                    path="/reservation/connected/accepted"
                    element={<ConnectedAcceptedReservation />}
                  />
                  <Route
                    path="/reservation/connected/ongoing"
                    element={<ConnectedOngoingMaintenance />}
                  />
                  <Route
                    path="/reservation/connected/reschedule"
                    element={<ConnectedRescheduledRequest />}
                  />
                  <Route
                    path="/reservation/connected/completed"
                    element={<ConnectedCompletedReservation />}
                  />

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

                  <Route
                    path="/bids/connected/all"
                    element={<ConnectedAllBids />}
                  />
                  <Route
                    path="/bids/connected/on-demand"
                    element={<ConnectedOnDemandBids />}
                  />
                  <Route
                    path="/bids/connected/within-one-week"
                    element={<ConnectedWithinOneWeekBids />}
                  />
                  <Route
                    path="/bids/connected/within-two-week"
                    element={<ConnectedWithinTwoWeekBids />}
                  />
                  <Route
                    path="/bids/connected/schedule-time"
                    element={<ConnectedScheduleTimeBids />}
                  />

                  <Route
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
                  />

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
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
