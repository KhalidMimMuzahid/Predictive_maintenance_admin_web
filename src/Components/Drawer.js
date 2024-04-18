import "./Sidebar.css";
import React from "react";
import logo_full from "../Assets/Component/logo_full.svg";
import dashboard_icon from "../Assets/Component/dashboard_icon.svg";
import vendor_icon from "../Assets/Component/vendor_icon.svg";
import customer_icon from "../Assets/Component/customers_icon.svg";
import reservation_icon from "../Assets/Component/reservation_icon.svg";
import request_icon from "../Assets/Component/request_icon.svg";
import iot_icon from "../Assets/Component/iot_icon.svg";
import wallet_icon from "../Assets/Component/wallet_icon.svg";
import shop_icon from "../Assets/Component/shop_icon.svg";
import inventory_icon from "../Assets/Component/inventory_icon.svg";
import bids_icon from "../Assets/Component/bids_icon.svg";
import notification_icon from "../Assets/Component/notification_icon.svg";
import offers_icon from "../Assets/Component/offers_icon.svg";
import packages_icon from "../Assets/Component/packages_icon.svg";
import settings_icon from "../Assets/Component/settings_icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserImage from "../Assets/Component/user_image.jfif";
import { useDispatch, useSelector } from "react-redux";

const Drawer = (props) => {
  const isSidebarOpen = useSelector((state) => state.openSidebar);

  return (
    <div className={`side-menu`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo_full} alt="webscript" />
        </div>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {isSidebarOpen ? (
            <li>
              <div className="menu-category">General</div>
            </li>
          ) : null}

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("dashboard"));
            }}
          >
            <div
              className={`menu-item ${false === "dashboard" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img src={dashboard_icon} alt="Dashboard icon" />
              </div>
              <span>Dashboard</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("vendor"));
            }}
          >
            <div className={false === "vendor" ? "active" : ""}>
              <div
                className={`menu-item ${false === "vendor" ? "active" : ""}`}
              >
                <div className="menu-icon">
                  <img src={vendor_icon} alt="Dashboard icon" />
                </div>
                <span>Vendor</span>
              </div>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("customer"));
            }}
          >
            <div
              className={`menu-item ${false === "customer" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img src={customer_icon} alt="Dashboard icon" />
              </div>
              <span>Customers</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("reservation"));
            }}
          >
            <div
              className={`menu-item ${false === "reservation" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img src={reservation_icon} alt="Dashboard icon" />
              </div>
              <span>Reservation</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("request"));
            }}
          >
            <div className={`menu-item ${false === "request" ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={request_icon} alt="Dashboard icon" />
              </div>
              <span>Request</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("iot"));
            }}
          >
            <div className={`menu-item ${false === "iot" ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={iot_icon} alt="IoT icon" />
              </div>
              <span>IoT</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("wallet"));
            }}
          >
            <div className={`menu-item ${false === "wallet" ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={wallet_icon} alt="Wallet icon" />
              </div>
              <span>Wallet</span>
            </div>
          </li>

          {isSidebarOpen ? (
            <li>
              <div className="menu-category">Products</div>
            </li>
          ) : null}

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("shop"));
            }}
          >
            <div className={`menu-item ${false === "shop" ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={shop_icon} alt="Shop icon" />
              </div>
              <span>Shop</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("inventory"));
            }}
          >
            <div
              className={`menu-item ${false === "inventory" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img src={inventory_icon} alt="Inventory icon" />
              </div>
              <span>Inventory</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("bids"));
            }}
          >
            <div className={`menu-item ${false === "bids" ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={bids_icon} alt="Bids icon" />
              </div>
              <span>Bids</span>
            </div>
          </li>

          {isSidebarOpen ? (
            <li>
              <div className="menu-category">Settings</div>
            </li>
          ) : null}

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("notification"));
            }}
          >
            <div
              className={`menu-item ${
                false === "notification" ? "active" : ""
              }`}
            >
              <div className="menu-icon">
                <img src={notification_icon} alt="Notification icon" />
              </div>
              <span>Notifications</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("offers"));
            }}
          >
            <div className={`menu-item ${false === "offers" ? "active" : ""}`}>
              <div className="menu-icon">
                <img src={offers_icon} alt="Offers icon" />
              </div>
              <span>Offers</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("packages"));
            }}
          >
            <div
              className={`menu-item ${false === "packages" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img src={packages_icon} alt="Packages icon" />
              </div>
              <span>Packages</span>
            </div>
          </li>

          <li
            onClick={(e) => {
              // dispatch(openSidebar(true));
              // dispatch(changeAppTab("settings"));
            }}
          >
            <div
              className={`menu-item ${false === "settings" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img src={settings_icon} alt="Settings icon" />
              </div>
              <span>Settings</span>
            </div>
          </li>

          <div className="bottom-spacer"></div>
        </ul>
      </div>

      {/* <div className="side-menu-footer">
                <div className="avatar">
                    <img src={UserImage} alt="user" />
                </div>
                <div className="user-info">
                    <h5>Dipankar Paul</h5>
                    <p>Super Admin</p>
                </div>
            </div> */}
    </div>
  );
};

export default Drawer;
