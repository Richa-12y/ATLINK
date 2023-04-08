import React from "react";
import "./about.css";
import { PageWrapper } from "../../components";
import CompanyDesc from "../../components/compneyDes/CompanyDesc";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Info from "./info/Info";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const About = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <PageWrapper pageTilte={"About us"}>
      <section className="about-page-container">
        <CompanyDesc />
        <footer>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              style={{ textTransform: "capitalize" }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                style={{ textTransform: "capitalize" }}
                label="Info"
                {...a11yProps(0)}
              />
              <Tab
                style={{ textTransform: "capitalize" }}
                label="FAQ"
                {...a11yProps(1)}
              />
              <Tab
                style={{ textTransform: "capitalize" }}
                label="Complianemnt & Feedback"
                {...a11yProps(2)}
              />
              <Tab
                style={{ textTransform: "capitalize" }}
                label="Privecy Policy"
                {...a11yProps(3)}
              />
              <Tab
                style={{ textTransform: "capitalize" }}
                label="Terms & Conditions"
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Info />
          </TabPanel>
          <TabPanel value={value} index={1}>
            FAQ
          </TabPanel>
          <TabPanel value={value} index={2}>
            Complianemnt & Feedback
          </TabPanel>
          <TabPanel value={value} index={3}>
            Privecy Policy
          </TabPanel>
          <TabPanel value={value} index={4}>
            Terms & Conditions
          </TabPanel>
        </footer>
      </section>
    </PageWrapper>
  );
};

export default About;
