import React from "react";
import "./info.css";
import InfoCard from "../../../components/infoCard/InfoCard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import EmailIcon from "@mui/icons-material/Email";
import { Typography } from "@mui/material";
import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShareIcon from "@mui/icons-material/Share";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Info = () => {
  const [emailist, setEmailList] = useState([
    "kricha00@gmail.com",
    "kricha111@gmail.com",
    "kricha00@gmai1l.com",
    "krich1a111@gmail.com",
  ]);

  const [contact, setContact] = useState(["124667", "2533788"]);
  const [address, setAddress] = useState({
    floorNumber: "C-1/135",
    area: "GIDC ",
    landmark: "makarpur",
    Town: "Vadodara",
    City: "Gujarat",
    pincode: "390010",
  });
  const cardDetails = [
    {
      heading: "Contact",
      icone: <PermContactCalendarIcon />,

      component: (
        <div className="emialForm">
          <div>
            <EmailIcon />
          </div>
          <div>
            <div>
              {[emailist[0], emailist[1]].map((el, i) => {
                return (
                  <>
                    <div>
                      {el}
                      {i === 0 && "/"}
                    </div>
                  </>
                );
              })}
            </div>

            <div className="contact-card-container">
              <div>
                <LocalPhoneIcon />
              </div>
              {[contact[0], contact[1]].map((el, index) => {
                return (
                  <span>
                    {el}
                    {index === 0 && "/"}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="email-length">+{emailist.length - 2}</div>
        </div>
      ),
    },

    {
      heading: "Address",
      icone: <EditLocationIcon />,
      component: (
        <div className="address-conatiner">
          <span>{address.floorNumber},</span>
          <span>{address.area},</span>
          <span>{address.landmark},</span>
          <br />
          <span>{address.Town},</span>
          <span>{address.pincode},</span>

          <span>{address.City}</span>
        </div>
      ),
    },
    {
      heading: "Houre of operation",
      icone: <BusinessCenterIcon />,
      component: <>Monday To Friday -9:00AM To 6:00PM</>,
    },
    {
      heading: "Social Media",
      icone: <ShareIcon />,
      component: (
        <div className="social-icon">
          <LanguageIcon />
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      ),
    },
    {
      heading: "Statement",
      icone: <FormatQuoteIcon />,
      component: (
        <div className="emialForm">
          <div>You think we ink it</div>
          <div className="email-length">+1</div>
        </div>
      ),
    },
  ];
  return (
    <div className="infoContainer">
      {cardDetails.map((el, index) => {
        return (
          <div className="card-container">
            <InfoCard cardHeader={el.heading} cardHeaderIcon={el.icone}>
              <Typography>{el.component}</Typography>
            </InfoCard>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
