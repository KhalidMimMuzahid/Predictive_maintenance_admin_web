import { makeStyles } from "@mui/styles";

import dashboard_icon from "../Assets/Component/dashboard_icon.svg";
import vendor_icon from "../Assets/Component/vendor_icon.svg";
import customer_icon from "../Assets/Component/customers_icon.svg";
import chat_icon from "../Assets/Component/chat_icon.svg";
import reservation_icon from "../Assets/Component/reservation_icon.svg";
import iot_icon from "../Assets/Component/iot_icon.svg";
import wallet_icon from "../Assets/Component/wallet_icon.svg";
import shop_icon from "../Assets/Component/shop_icon.svg";
import inventory_icon from "../Assets/Component/inventory_icon.svg";
import bids_icon from "../Assets/Component/bids_icon.svg";
import notification_icon from "../Assets/Component/notification_icon.svg";
import help_ai_icon from "../Assets/Component/help_ai_icon.svg";
import offers_icon from "../Assets/Component/offers_icon.svg";
import packages_icon from "../Assets/Component/packages_icon.svg";
import settings_icon from "../Assets/Component/settings_icon.svg";
import bids_sub_icon from "../Assets/Component/sub_icon.svg";
import control_panel_icon from "../Assets/Component/control_panel_icon.svg";
import reports_icon from "../Assets/Component/reports_icon.svg";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CollapsibleSidebarSubmenu from "./CollapsibleSidebarSubmenu";
import { Menu } from "@mui/icons-material";

import logo_small from "../Assets/Component/logo_small.svg";
import logo_full from "../Assets/Component/logo_full.svg";


const routes = [
    {
        name: "Dashboard",
        path: "/",
        icon: <img src={dashboard_icon} />
    },
    {
        name: "Vendors",
        path: "/vendors",
        icon: <img src={vendor_icon} />
    },
    {
        name: "Customer",
        path: "/customer",
        icon: <img src={customer_icon} />
    },
    {
        name: "Chat",
        path: "/chat",
        icon: <img src={chat_icon} />
    },
    {
        name: "Reservation",
        path: "/reservation",
        icon: <img src={reservation_icon} />,
        subRoutes: [
            {
                name: "All Reservation Request",
                path: "/reservation/all",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "On Demand Request",
                path: "/reservation/ondemand",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Accepted Requested",
                path: "/reservation/accepted",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Ongoing Maintanance",
                path: "/reservation/ongoing",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Completed Request",
                path: "/reservation/completed",
                icon: <img src={bids_sub_icon} />,
            },
        ]
    },
    {
        name: "IOT",
        path: "/iot",
        icon: <img src={iot_icon} />
    },
    {
        name: "Wallet",
        path: "/wallet",
        icon: <img src={wallet_icon} />,
        subRoutes: [
            {
                name: "All Transaction",
                path: "/wallet/alltransaction",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Withdarw Request",
                path: "/wallet/withdrawrequest",
                icon: <img src={bids_sub_icon} />,
            },
        ]
    },
    {
        name: "Shop",
        path: "/shop",
        icon: <img src={shop_icon} />
    },
    {
        name: "Inventory",
        path: "/inventory",
        icon: <img src={inventory_icon} />
    },
    {
        name: "Bids",
        path: "/bids",
        icon: <img src={bids_icon} />,
        subRoutes: [
            {
                name: "All Schedule Bidding",
                path: "/bids/all",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "On Demand Bidding",
                path: "/bids/ondemand",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Within 1 Week Bidding",
                path: "/bids/oneweek",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Within 2 Week Bidding",
                path: "/bids/twoweek",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Schedule Time Bidding",
                path: "/bids/scheduletime",
                icon: <img src={bids_sub_icon} />,
            },
        ]
    },
    {
        name: "Notifications",
        path: "/notifications",
        icon: <img src={notification_icon} />
    },
    {
        name: "Help AI",
        path: "/helpai",
        icon: <img src={help_ai_icon} />,
        subRoutes: [
            {
                name: "FAQ",
                path: "/help/faq",
                icon: <img src={bids_sub_icon} />,
            },
            {
                name: "Learning Resources",
                path: "/help/learningresources",
                icon: <img src={bids_sub_icon} />,
            },
        ]
    },
    {
        name: "Offers",
        path: "/offers",
        icon: <img src={offers_icon} />
    },
    {
        name: "Packages",
        path: "/packages",
        icon: <img src={packages_icon} />
    },
    {
        name: "Reports",
        path: "/reports",
        icon: <img src={reports_icon} />
    },
    {
        name: "Control Panel",
        path: "/control_panel",
        icon: <img src={control_panel_icon} />,
        subRoutes: [
          {
            name: "Reservation Request",
            path: "/control_panel/reservation_request",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Customer",
            path: "/control_panel/customer",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Vendor",
            path: "/control_panel/vendor",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "IoT",
            path: "/control_panel/IoT",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Wallet",
            path: "/control_panel/wallet",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Shop",
            path: "/control_panel/shop",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Inventory",
            path: "/control_panel/inventory",
            icon: <img src={bids_sub_icon} />,
          },
        ]
    },
    {
        name: "Settings",
        path: "/settings",
        icon: <img src={settings_icon} />
    }

  ];
  



const CollapsibleSidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
      hidden: {
        width: 0,
        padding: 0,
        transition: {
          duration: 0.2,
        },
      },
      show: {
        width: "140px",
        padding: "5px 15px",
        transition: {
          duration: 0.2,
        },
      },
    };
  
    const showAnimation = {
      hidden: {
        width: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
      show: {
        opacity: 1,
        width: "auto",
        transition: {
          duration: 0.5,
        },
      },
    };
  
    return (
      <>
        <div className="main-container">
          <motion.div
            animate={{
              width: isOpen ? "260px" : "45px",
  
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    <img src={logo_full} />
                  </motion.h1>
                )}
              </AnimatePresence>
  
              <div className="bars">
                {
                  !isOpen ? (
                    <div className="logo">
                      <img src={logo_small} onClick={toggle} />
                    </div>
                  ) : (
                    <Menu onClick={toggle} />
                  )
                }
                
              </div>
            </div>
            <section className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <CollapsibleSidebarSubmenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }
  
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
  
          <main>{children}</main>
        </div>
      </>
    );
  };
  
  export default CollapsibleSidebar;
  