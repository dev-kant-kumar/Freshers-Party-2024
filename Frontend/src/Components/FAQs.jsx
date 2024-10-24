import React from "react";
import { useState } from "react";
import arrowImg from "../assets/images/arrow-img.png";

function FAQs() {
  const [isActive, setIsActive] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const accordionData = [
    {
      title: "What is the dress code for the fresher's party?",
      content:
        "The dress code for the party is semi-formal. We encourage you to dress up stylishly but comfortably to enjoy the evening. You can also add a touch of creativity to your outfit to stand out!",
    },

    {
      title: "Do I need to bring anything to the party?",
      content:
        "No, just bring yourself and your excitement! Everything from food to entertainment is arranged for you. However, if you'd like, you can bring your dancing shoes and a big smile to make the most of the day!",
    },
    {
      title: " Will food and beverages be provided at the event?",
      content:
        "Yes, we have arranged a variety of delicious snacks, dinner, and beverages for all attendees. There will be vegetarian and non-vegetarian options available to suit everyone's preferences.",
    },
    {
      title: "Can I perform at the fresher’s party?",
      content:
        "Absolutely! We love seeing hidden talents among our juniors. If you’d like to sing, dance, or perform anything else, feel free to contact us before the event, and we’ll make arrangements for you to showcase your talent.",
    },
    {
      title: "Do I need to RSVP, or can I just show up on the day?",
      content:
        "Yes, please RSVP through the form on the website to confirm your attendance. This helps us plan the event better and ensure everyone is taken care of. If you haven’t RSVP'd but still want to join, feel free to reach out to the organizing committee beforehand.",
    },
  ];

  const accordionHandler = (index) => {
    setIsActive((preState) => ({
      0: index == "0" ? !preState[0] : false,
      1: index == "1" ? !preState[1] : false,
      2: index == "2" ? !preState[2] : false,
      3: index == "3" ? !preState[3] : false,
      4: index == "4" ? !preState[4] : false,
    }));
  };

  console.log(isActive);
  return (
    <div className="accordion-main-wrapper">
      {accordionData.map((item, index) => {
        return (
          <div
            className={
              isActive[index]
                ? " accordion-sections-active accordion-sections"
                : "accordion-sections"
            }
            onClick={() => accordionHandler(index)}
            key={index}
          >
            <div className="accordion-section-head">
              <section className="accordion-summary">
                <strong className="accordion-title">{item.title}</strong>
              </section>
              <section className="accordion-btn">
                <div
                  className={
                    isActive[index]
                      ? "accordion-btn-wrapper-active"
                      : "accordion-btn-wrapper"
                  }
                  onClick={accordionHandler}
                >
                  <img
                    src={arrowImg}
                    alt="arrow"
                    className={
                      isActive[index]
                        ? "accordion-btn-arrow-img-active"
                        : "accordion-btn-arrow-img"
                    }
                  />
                </div>
              </section>
            </div>
            <div
              className={
                isActive[index]
                  ? "accordion-section-body-active"
                  : "accordion-section-body"
              }
            >
              <p className="accordion-content">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQs;
