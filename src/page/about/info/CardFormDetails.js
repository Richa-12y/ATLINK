import React from "react";
import InfoCard from "../../../components/infoCard/InfoCard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useState } from "react";
// import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AllInbox } from "@mui/icons-material";

const CardFormDetails = ({ companiesDetails, setCompaniesDetails }) => {
  //   console.log(cardDetailsList);
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [selectDetails, setSelectDetails] = useState(undefined);

  const getEditButton = (value) => {
    setIsFromOpen(true);
    setSelectDetails(value);
  };
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [addNewContact, setAddNewContact] = useState({
    email: [],
    contact: [],
  });
  const addEmailToInputField = () => {
    setAddNewContact((p) => {
      return { ...p, email: [...p.email, email] };
    });
    setEmail("");
  };
  // console.log(addNewContact);
  const addContactToInputField = () => {
    setAddNewContact((p) => {
      return { ...p, contact: [...p.contact, contact] };
    });
    setContact("");
  };
  console.log(addNewContact);
  const handleSaveData = () => {
    let allData = JSON.parse(localStorage.getItem("company"));
    console.log(selectDetails);
    console.log(allData);

    let index = allData.filter((el, i) => el.id === selectDetails.id)[0].id - 1;
    allData[index].email = [...allData[index].email, ...addNewContact.email];
    allData[index].contact = [
      ...allData[index].contact,
      ...addNewContact.contact,
    ];
    setCompaniesDetails(allData);
    localStorage.setItem("company", JSON.stringify(allData));
    setIsFromOpen(false);
  };

  return (
    <div>
      {isFromOpen ? (
        <div className="from-container">
          <div>
            <div className="input-from-container">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder={"h@email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                className="from-add-button"
                onClick={addEmailToInputField}
              >
                <div>
                  <AddCircleOutlineIcon />
                  Add More
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="input-from-container">
              <label htmlFor="email">Contact Number</label>
              <input
                id="email"
                placeholder="990"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div>
              <button
                className="from-add-button"
                onClick={addContactToInputField}
              >
                <div>
                  <AddCircleOutlineIcon />
                  Add More
                </div>
              </button>
            </div>
          </div>

          <div className="from-submit-button" onClick={handleSaveData}>
            <button>Save</button>
          </div>
        </div>
      ) : (
        <>
          {companiesDetails.map((el, i) => {
            console.log(el);
            return (
              <InfoCard
                key={i}
                cardHeader={el.name}
                cardHeaderIcon={<PermContactCalendarIcon />}
                onClick={() => getEditButton(el, i)}
              >
                <div className="emialForm">
                  <div>
                    <EmailIcon />
                  </div>
                  <div>
                    <div>
                      {el?.email.map((e, i) => {
                        return (
                          <>
                            <div>{e}/</div>
                          </>
                        );
                      })}
                    </div>

                    <div className="contact-card-container">
                      <div>
                        <LocalPhoneIcon />
                      </div>
                      {el.contact.map((e, index) => {
                        return <span>{e}/</span>;
                      })}
                    </div>
                  </div>
                </div>
              </InfoCard>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CardFormDetails;
