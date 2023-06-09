import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ModeIcon from "@mui/icons-material/Mode";
//  <PermContactCalendarIcon />;
import style from "./infoCard.module.css";
const InfoCard = ({ cardHeader, cardHeaderIcon, onClick, children }) => {
  return (
    <div className={style["info-card-container"]}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <header className={style["card-header"]}>
              <div>
                {cardHeaderIcon}
                <span>{cardHeader}</span>
              </div>
              <div>
                <ModeIcon onClick={onClick} style={{ color: " #c11f29" }} />
              </div>
            </header>
          </Typography>
          {children}
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default InfoCard;
