import { makeStyles } from "@mui/styles";

import dashboard_icon from "../Assets/Component/dashboard_icon.svg";
import vendor_icon from "../Assets/Component/vendor_icon.svg";
import customer_icon from "../Assets/Component/customers_icon.svg";
import chat_icon from "../Assets/Component/chat_icon.svg";
import feed_icon from "../Assets/Component/feed_icon.svg";
import reservation_icon from "../Assets/Component/reservation_icon.svg";
import iot_icon from "../Assets/Component/iot_icon.svg";
import wallet_icon from "../Assets/Component/wallet_icon.svg";
import team_icon from "../Assets/Component/team_icon.svg";
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
import sensor_connected_icon from "../Assets/Component/sensor_connected_icon.svg";
import sensor_not_connected_icon from "../Assets/Component/sensor_not_connected_icon.svg";

import invoice_icon from "../Assets/Component/invoice_icon.svg";
import project_icon from "../Assets/Component/project_icon.svg";
import data_export_icon from "../Assets/Component/data_export_icon.svg";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "@mui/icons-material";

import logo_small from "../Assets/Component/logo_small.svg";
import logo_full from "../Assets/Component/logo_full.svg";
import SidebarItem from "./SIdebarItem";
import { Typography } from "@mui/material";

const generalRoutes = [
  {
    name: "Dashboard",
    path: "/",
    icon: <img src={dashboard_icon} />,
  },
  {
    name: "Service Provider",
    path: "/service-provider",
    icon: <img src={vendor_icon} />,
  },
  {
    name: "Customer",
    path: "/customer",
    icon: <img src={customer_icon} />,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: <img src={chat_icon} />,
  },
  {
    name: "Feed",
    path: "/feed",
    icon: <img src={feed_icon} />,
  },
  {
    name: "Reservation",
    path: "/reservation/connected/all",
    icon: <img src={reservation_icon} />,
    children: [
      {
        name: "Sensor Connected",
        path: "/reservation/connected/all",
        icon: <img src={sensor_connected_icon} />,
        children: [
          {
            name: "All Reservation Request",
            path: "/reservation/connected/all",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "On Demand Request",
            path: "/reservation/connected/on-demand",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 1 Week Request",
            path: "/reservation/connected/within-one-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 2 Week Request",
            path: "/reservation/connected/within-two-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Schedule Time Request",
            path: "/reservation/connected/schedule-time",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Accepted Request",
            path: "/reservation/connected/accepted",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Ongoing Maintenance",
            path: "/reservation/connected/ongoing",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Reschedule Request",
            path: "/reservation/connected/reschedule",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Completed Request",
            path: "/reservation/connected/completed",
            icon: <img src={bids_sub_icon} />,
          },
        ],
      },
      {
        name: "Sensor Non-Connected",
        path: "/reservation/non-connected/all",
        icon: <img src={sensor_not_connected_icon} />,
        children: [
          {
            name: "All Reservation Request",
            path: "/reservation/non-connected/all",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "On Demand Request",
            path: "/reservation/non-connected/on-demand",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 1 Week Request",
            path: "/reservation/non-connected/within-one-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 2 Week Request",
            path: "/reservation/non-connected/within-two-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Schedule Time Request",
            path: "/reservation/non-connected/schedule-time",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Accepted Request",
            path: "/reservation/non-connected/accepted",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Ongoing Maintenance",
            path: "/reservation/non-connected/ongoing",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Reschedule Request",
            path: "/reservation/non-connected/reschedule",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Completed Request",
            path: "/reservation/non-connected/completed",
            icon: <img src={bids_sub_icon} />,
          },
        ],
      },
    ],
  },
  {
    name: "Res Group",
    path: "/res-group/all-group",
    icon: <img src={iot_icon} />,
    children: [
      {
        name: "All Group",
        path: "/res-group/all-group",
        icon: <img src={bids_sub_icon} />,
      },
      {
        name: "Bids Closed Group",
        path: "/res-group/bids-closed-group",
        icon: <img src={bids_sub_icon} />,
      },
      {
        name: "Assigned To Company",
        path: "/res-group/assigned-to-company",
        icon: <img src={bids_sub_icon} />,
      },
      {
        name: "Assigned To Branch ",
        path: "/res-group/assigned-to-branch",
        icon: <img src={bids_sub_icon} />,
      },
      {
        name: "Assigned To Team ",
        path: "/res-group/assigned-to-team",
        icon: <img src={bids_sub_icon} />,
      },
    ],
  },
  {
    name: "IOT",
    path: "/iot",
    icon: <img src={iot_icon} />,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <img src={wallet_icon} />,
    children: [
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
    ],
  },
  {
    name: "Team",
    path: "/team",
    icon: <img src={team_icon} />,
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: <img src={invoice_icon} />,
  },
  {
    name: "Project",
    path: "/project",
    icon: <img src={project_icon} />,
  },
  {
    name: "Data Export",
    path: "/data-export",
    icon: <img src={data_export_icon} />,
  },
];

const productRoutes = [
  {
    name: "Marketplace",
    path: "/marketplace",
    icon: <img src={shop_icon} />,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: <img src={inventory_icon} />,
  },
  {
    name: "Bids",
    path: "/bids/connected/all",
    icon: <img src={bids_icon} />,
    children: [
      {
        name: "Sensor Connected",
        path: "/bids/connected/all",
        icon: <img src={sensor_connected_icon} />,
        children: [
          {
            name: "All Reservation Request",
            path: "/bids/connected/all",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "On Demand Request",
            path: "/bids/connected/on-demand",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 1 Week Request",
            path: "/bids/connected/within-one-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 2 Week Request",
            path: "/bids/connected/within-two-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Schedule Time Request",
            path: "/bids/connected/schedule-time",
            icon: <img src={bids_sub_icon} />,
          },
        ],
      },
      {
        name: "Sensor Non-Connected",
        path: "/bids/non-connected/all",
        icon: <img src={sensor_not_connected_icon} />,
        children: [
          {
            name: "All Reservation Request",
            path: "/bids/non-connected/all",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "On Demand Request",
            path: "/bids/non-connected/on-demand",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 1 Week Request",
            path: "/bids/non-connected/within-one-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Within 2 Week Request",
            path: "/bids/non-connected/within-two-week",
            icon: <img src={bids_sub_icon} />,
          },
          {
            name: "Schedule Time Request",
            path: "/bids/non-connected/schedule-time",
            icon: <img src={bids_sub_icon} />,
          },
        ],
      },
    ],
  },
];

const settingsRoutes = [
  {
    name: "Notifications",
    path: "/notifications",
    icon: <img src={notification_icon} />,
  },
  {
    name: "Help AI",
    path: "/helpai",
    icon: <img src={help_ai_icon} />,
    children: [
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
    ],
  },
  {
    name: "Offers",
    path: "/offers",
    icon: <img src={offers_icon} />,
  },
  {
    name: "Packages",
    path: "/packages",
    icon: <img src={packages_icon} />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <img src={reports_icon} />,
  },
  {
    name: "Control Panel",
    path: "/control_panel/reservation_request",
    icon: <img src={control_panel_icon} />,
    children: [
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
        name: "Machine",
        path: "/control_panel/machine",
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
    ],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <img src={settings_icon} />,
  },
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
            width: isOpen ? "300px" : "45px",

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
              {!isOpen ? (
                <div className="logo">
                  <img src={logo_small} onClick={toggle} />
                </div>
              ) : (
                <Menu onClick={toggle} />
              )}
            </div>
          </div>

          {isOpen && (
            <Typography
              style={{
                color: "#6B7280",
                fontSize: "14px",
                marginLeft: "16px",
                marginTop: "24px",
              }}
            >
              General
            </Typography>
          )}
          <section className="routes">
            {generalRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                route={route}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showAnimation={showAnimation}
              />
            ))}
          </section>

          {isOpen && (
            <Typography
              style={{
                color: "#6B7280",
                fontSize: "14px",
                marginLeft: "16px",
                marginTop: "24px",
              }}
            >
              Products
            </Typography>
          )}
          <section className="routes">
            {productRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                route={route}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showAnimation={showAnimation}
              />
            ))}
          </section>

          {isOpen && (
            <Typography
              style={{
                color: "#6B7280",
                fontSize: "14px",
                marginLeft: "16px",
                marginTop: "24px",
              }}
            >
              Settings
            </Typography>
          )}
          <section className="routes">
            {settingsRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                route={route}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showAnimation={showAnimation}
              />
            ))}
          </section>
          <div style={{ height: "24px" }} />
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default CollapsibleSidebar;
