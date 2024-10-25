import React, { useState } from "react";
import logo from "../../src/assets/images/logo.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import InvitationForm from "../Components/Invitation/InvitationForm"; // Import the form component

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="header-wrapper">
      <section className="logo-wrapper">
        <img src={logo} alt="" />
        <div className="logo">Freshers Party</div>
      </section>
      <section className="nav-menu-wrapper">
        <div className="nav-btn">
          {/* <button>Verify</button> */}
          <Button variant="contained" onClick={handleOpenModal}>
            Join the Party
          </Button>
        </div>
      </section>
      {/* Modal for InvitationForm */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogContent>
          <InvitationForm /> {/* Form Component */}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
