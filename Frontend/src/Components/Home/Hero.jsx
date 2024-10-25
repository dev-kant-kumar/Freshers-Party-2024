import React, { useEffect, useState } from "react";
import CalIcon from "../../assets/images/uis--calender.png";
import locIcon from "../../assets/images/carbon--location-filled.png";
import timeIcon from "../../assets/images/time.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import InvitationForm from "../Invitation/InvitationForm"; // Import the form component

function Hero() {
  const targetDate = new Date(2024, 9, 27, 9, 0, 0); // Target date: October 27th, 2024, 9:00 AM
  const [time, setTime] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeDiff = targetDate - now;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        setTime({ day: days, hours, minutes, seconds });
      } else {
        // If the target date has passed, set the time to zero
        setTime({ day: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(updateTime, 1000); // Update the timer every second

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [targetDate]);

  return (
    <div className="hero-wrapper">
      <section className="hero-body-wrapper">
        <section className="hero-body">
          <p className="p-1">
            Tech it to the Next Level – Welcome <span>Freshers</span>!
          </p>
          <p className="p-2">
            Get ready to embark on an unforgettable journey as we welcome the
            next generation of tech enthusiasts!
          </p>
          {/* Button to trigger modal */}
          <Button variant="contained" onClick={handleOpenModal}>
            Join the Party
          </Button>
        </section>
        <section className="hero-head">
          <div className="hero-head-venue-date">
            <div className="venue-date-1">
              <img src={CalIcon} alt="Calendar Icon" />
              <p>October 27th ' 2024</p>
            </div>
            <div className="venue-date-2">
              <img src={timeIcon} alt="Time Icon" />
              <p>09:00 am - 06:00 pm</p>
            </div>
            <div className="venue-date-3">
              <img src={locIcon} alt="Location Icon" />
              <p>Rings and Roses Banquet Hall</p>
            </div>
          </div>
        </section>
      </section>
      <section className="hero-foot">
        <div className="timer-wrapper">
          <section className="time-container">
            <p className="content">{time.day}</p>
            <p className="label">Days</p>
          </section>
          <section className="time-container">
            <p className="content">{time.hours}</p>
            <p className="label">Hours</p>
          </section>
          <section className="time-container">
            <p className="content">{time.minutes}</p>
            <p className="label">Minutes</p>
          </section>
          <section className="time-container">
            <p className="content">{time.seconds}</p>
            <p className="label">Seconds</p>
          </section>
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

export default Hero;
