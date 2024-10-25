import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Countdown from "react-countdown";

const partyDate = new Date("2024-10-27T09:00:00");

export default function InvitationModal({
  name,
  semester,
  classRoll,
  onClose,
}) {
  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal-container">
        <Typography className="modal-header">
          Freshers Party Invitation
        </Typography>

        <Typography className="modal-content">
          Dear <strong>{name}</strong> from <strong>{semester}</strong> (Class
          Roll: {classRoll}),
        </Typography>

        <Typography className="modal-content">
          You are cordially invited to the Freshers Party organized by BCA
          Semester 2!
        </Typography>

        <div className="countdown-container">
          <Typography className="countdown-label">
            Countdown to the Event:
          </Typography>
          <Countdown
            date={partyDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <Typography className="countdown-timer">
                {days}d : {hours}h : {minutes}m : {seconds}s
              </Typography>
            )}
          />
        </div>

        <div className="modal-invitation-details">
          <Typography>Date: October 27th, 2024</Typography>
          <Typography>Time: 09:00 AM - 06:00 PM</Typography>
          <Typography>Venue: Rings and Roses Banquet Hall</Typography>
        </div>

        <Button className="modal-close-btn" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
