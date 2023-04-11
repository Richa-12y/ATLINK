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
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CardFormDetails from "./CardFormDetails";
const Info = () => {
  const [companiesDetails, setCompaniesDetails] = useState(
    JSON.parse(localStorage.getItem("company")) ?? []
  );

  React.useEffect(() => {
    setCompaniesDetails([
      {
        id: 1,
        name: "sales Team",
        email: [
          "kricha00@gmail.com",
          "kricha111@gmail.com",
          "kricha00@gmail.com",
          "kricha111@gmail.com",
          "kricha00@gmail.com",
          "kricha111@gmail.com",
        ],
        contact: ["124667", "2533788"],
        address: [],
      },
      {
        id: 2,
        name: "marketing Team",
        email: [
          "kricha00@gmail.com",
          "kricha111@gmail.com",
          "kricha00@gmail.com",
          "kricha111@gmail.com",
          "kricha00@gmail.com",
          "kricha111@gmail.com",
        ],
        contact: ["124667", "2533788"],
        address: [],
      },
    ]);
    localStorage.setItem("company", JSON.stringify(companiesDetails));
  }, []);

  const [cardDetailsList, setCardDetailsList] = useState("");

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
      type: "contact",

      component: (
        <div className="emialForm">
          <div>
            <EmailIcon />
          </div>
          <div>
            <div>
              {[
                companiesDetails[0]?.email[0],
                companiesDetails[0]?.email[1],
              ].map((el, i) => {
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
              {[
                companiesDetails[0]?.contact[0],
                companiesDetails[0]?.contact[1],
              ].map((el, index) => {
                return (
                  <span>
                    {el}
                    {index === 0 && "/"}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="email-length">+{companiesDetails.length - 1}</div>
        </div>
      ),
    },

    {
      heading: "Address",
      icone: <EditLocationIcon />,
      type: "address",
      component: (
        <div className="address-conatiner">
          <span>{address?.floorNumber},</span>
          <span>{address?.area},</span>
          <span>{address?.landmark},</span>
          <br />
          <span>{address?.Town},</span>
          <span>{address?.pincode},</span>

          <span>{address?.City}</span>
        </div>
      ),
    },
    {
      heading: "Houre of operation",
      icone: <BusinessCenterIcon />,
      type: "houre of operation",
      component: <>Monday To Friday -9:00AM To 6:00PM</>,
    },
    {
      heading: "Social Media",
      icone: <ShareIcon />,
      type: "social media",
      component: (
        <div className="social-icon">
          <div>
            <LanguageIcon />
            <p> website</p>
          </div>
          <div>
            <InstagramIcon />
            <p>Instagram</p>
          </div>
          <div>
            <FacebookIcon />
            <p>Facebook</p>
          </div>
          <div>
            <TwitterIcon />
            <p>Twitter</p>
          </div>
        </div>
      ),
    },
    {
      heading: "Statement",
      icone: <FormatQuoteIcon />,
      type: "statement",
      component: (
        <div className="emialForm">
          <div>You think we ink it</div>
          <div className="email-length">+1</div>
        </div>
      ),
    },
  ];
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (value) => {
    setOpen(value);
  };
  const getCardClickOpetion = (value) => {
    console.log("hello");
    setCardDetailsList(value);
    setOpen(true);
  };
  const getFromBasedOnType = () => {
    switch (cardDetailsList.type) {
      case "contact":
        return (
          <CardFormDetails
            companiesDetails={companiesDetails}
            setCompaniesDetails={setCompaniesDetails}
          />
        );
      case "address":
        return <h1>Hello address</h1>;
      case "houre of operation":
        return <h1>Hello houre of operation</h1>;
      case "social media":
        return <h1>Hello social media</h1>;

      default:
        return <h1>statement</h1>;
    }
  };
  return (
    <div className="infoContainer">
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <div className="drawer-conatiner">
            <KeyboardBackspaceIcon />
            <div>
              <h3>{cardDetailsList?.heading}</h3>
            </div>
          </div>
          {getFromBasedOnType()}
        </SwipeableDrawer>
      </React.Fragment>
      {cardDetails.map((el, index) => {
        return (
          <div className="card-container">
            <InfoCard
              cardHeader={el?.heading}
              cardHeaderIcon={el?.icone}
              onClick={() => getCardClickOpetion(el)}
            >
              <Typography>{el?.component}</Typography>
            </InfoCard>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
