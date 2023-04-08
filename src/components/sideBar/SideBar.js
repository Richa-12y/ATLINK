import React from "react";
import { Logo } from "../../lib";
import DashboardIcon from "@mui/icons-material/Dashboard";
import style from "./sidebar.module.css";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Groups2Icon from "@mui/icons-material/Groups2";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CategoryIcon from "@mui/icons-material/Category";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import PaymentsIcon from "@mui/icons-material/Payments";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [activeButton, setActiveButton] = React.useState(null);
  const buttonList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      to: "dashboard",
    },
    {
      text: "Orders",
      icon: <ViewInArIcon />,
      to: "orders",
    },
    {
      text: "Team Members",
      icon: <Groups2Icon />,
      to: "teammembers",
    },
    {
      text: "Partner",
      icon: <HandshakeIcon />,
      to: "partner",
    },
    {
      text: "ProductListing",
      icon: <CategoryIcon />,
      to: "productlisting",
    },
    {
      text: "Award & Honours",
      icon: <EmojiEventsIcon />,
      to: "award",
    },
    {
      text: "About Us",
      icon: <SmsFailedIcon />,
      to: "aboutus",
    },
    {
      text: "Payment info",
      icon: <PaymentsIcon />,
      to: "paymentinfo",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (buttonValue, index) => {
    setActiveButton(index);
    navigate(`/${buttonValue.to}`);
  };

  return (
    <div className={`${style["left-sidebar"]} box-shadow `}>
      <div>
        <div>
          <Logo />
        </div>
        <div className={style["sidebar-button-container"]}>
          {buttonList.map((el, i) => {
            return (
              <button
                className={`${style["button"]} ${
                  activeButton === i && style["active-button"]
                }`}
                key={el.text + i}
                onClick={() => handleClick(el, i)}
              >
                {el.icon}
                <span>{el.text}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <div className={` ${style["sidebar-footer"]} box-shadow  `}>
          <div>
            <ContactSupportIcon />
          </div>
          <strong>Need Help?</strong>
          <p>Our support team is a your disposal</p>
          <button className={style["button-for-sidebar"]}>Get help</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
