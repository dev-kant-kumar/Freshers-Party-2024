import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Countdown from "react-countdown";
import { styled } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import html2canvas from "html2canvas";
import BackgroundImage from "../../assets/images/b2.jpg";

// Styled components for the modal
const StyledBox = styled(Box)(({ theme }) => ({
  width: "90%",
  maxWidth: "600px",
  height: "fit-content",
  margin: "40px auto",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "20px",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  animation: "fadeIn 1s ease-in-out",
  border: "2px solid transparent",
  [theme.breakpoints.down("sm")]: {
    height: "fit-content",
    padding: "10px",
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#FFC300",
  textAlign: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  textAlign: "center",
  marginBottom: "20px",
  color: "#f7e6d3",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const CountdownContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
});

const CountdownLabel = styled(Typography)({
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "5px",
});

const CountdownTimer = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#FF5722",
});

const InvitationDetails = styled("div")({
  marginBottom: "20px",
  textAlign: "center",
});

const DetailItem = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  fontSize: "18px",
});

const CloseButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4CAF50",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#45a049",
  },
}));

// Keyframes for the border rotation animation
const styles = {
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

// Party date
const partyDate = new Date("2024-10-27T09:00:00");

export default function InvitationModal({
  name,
  semester,
  classRoll,
  onClose,
}) {
  const handleDownloadImage = () => {
    const element = document.getElementById("invitation-content");
    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "invitation.png"; // Specify the filename
      link.click();
    });
  };

  return (
    <Modal open={true} onClose={onClose}>
      <StyledBox id="invitation-content" sx={styles}>
        <Header>🎉 Freshers Party Invitation 🎉</Header>

        <Content>
          Dear <strong>{name}</strong> from <strong>{semester}</strong> (Class
          Roll: {classRoll}),
        </Content>

        <Content>
          You are cordially invited to the Freshers Party organized by BCA
          Semester 2!
        </Content>

        <CountdownContainer>
          <CountdownLabel style={{ color: "#FF9933" }}>
            Countdown to the Event:
          </CountdownLabel>
          <Countdown
            date={partyDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <CountdownTimer>
                {days}d : {hours}h : {minutes}m : {seconds}s
              </CountdownTimer>
            )}
          />
        </CountdownContainer>

        <InvitationDetails>
          <DetailItem>
            <EventNoteIcon style={{ marginRight: "8px", color: "#bff29f" }} />
            <Typography style={{ color: "#e1bcc3" }}>
              Date: October 27th, 2024
            </Typography>
          </DetailItem>
          <DetailItem>
            <AccessTimeIcon style={{ marginRight: "8px", color: "#bff29f" }} />
            <Typography style={{ color: "#e1bcc3" }}>
              Time: 11:00 AM - 06:00 PM
            </Typography>
          </DetailItem>
          <DetailItem>
            <LocationOnIcon style={{ marginRight: "8px", color: "#bff29f" }} />
            <Typography style={{ color: "#e1bcc3" }}>
              Venue: Rings and Roses Banquet Hall
            </Typography>
          </DetailItem>
        </InvitationDetails>

        <Button
          onClick={handleDownloadImage}
          variant="contained"
          color="secondary"
          style={{ marginBottom: "10px" }}
        >
          Download as Image
        </Button>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </StyledBox>
    </Modal>
  );
}
