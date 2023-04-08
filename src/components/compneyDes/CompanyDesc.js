import React from "react";
import style from "./companyDesc.module.css";
import { Logo } from "../../lib";

import VerifiedIcon from "@mui/icons-material/Verified";
import { useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
const CompanyDesc = () => {
  const onChangeDesc = (e) => {
    localStorage.setItem("desc", JSON.stringify(e.target.innerHTML));
  };
  const [isContentEditable, setIsContentEditable] = useState(false);
  return (
    <>
      {" "}
      <div>
        <div className={style["about-desc"]}>
          <div>
            <Logo width={50} height={50} />
          </div>
          <div>
            <div className={style["company-name"]}>
              <div>
                <strong>A.T.Link</strong>
              </div>
              <div className={style["company-name-text"]}>
                <span>
                  <VerifiedIcon style={{ color: "#bababa" }} />
                </span>
                <span className={style["company-name-text-desc"]}>
                  Verify Company
                </span>
              </div>
            </div>
            <div>Digital link </div>
          </div>
        </div>
        <div className={style["desc-container-edit"]}>
          <p
            contentEditable={isContentEditable}
            className={isContentEditable && style["edit-with-border"]}
            dangerouslySetInnerHTML={{
              __html:
                localStorage.getItem("desc") !== "undefined"
                  ? JSON.parse(localStorage.getItem("desc"))
                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
            }}
            onInput={(e) => onChangeDesc(e)}
          ></p>
          {!isContentEditable ? (
            <span onClick={() => setIsContentEditable(true)}>
              <ModeIcon style={{ color: " #c11f29" }} />
            </span>
          ) : (
            <span onClick={() => setIsContentEditable(false)}>
              <FileDownloadDoneIcon style={{ color: "green" }} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyDesc;
