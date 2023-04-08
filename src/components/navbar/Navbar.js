import React from "react";
import style from "./navbar.module.css";
import { Logo } from "../../lib";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Avatar } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  return (
    <div className={`${style["navbar"]} box-shadow`}>
      <div className={style["navbar-leftsidebar-conatiner"]}>
        <Logo />
        <div>
          <Paper
            component="form"
            sx={{
              p: "0px 4px",
              display: "flex",
              alignItems: "center",
              width: 500,
            }}
          >
            <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ p: "0px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search..." }}
            />
          </Paper>
        </div>
      </div>
      <div>
        <Button variant="contained" startIcon={<ShoppingCartCheckoutIcon />}>
          Checkout(200)
        </Button>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <div>
            <div>User admin </div>
            <div>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
