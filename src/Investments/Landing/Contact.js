import React from "react";
import Buttons from "../../Global/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="image">
        <img src="./assets/contact-img.svg" />
        <h2>Share your referral link with friends!</h2>
        <p>
          Earn 0.7% rewards each time they buy USDN with a card.
          <br></br>
          <br></br> The best part is that your friends will also receive a
          reward of 0.3% of the amount of their USDN purchase with the card.
        </p>
        <Buttons name="Get My Referral Link" />
      </div>
      <div className="form">
        <h3>Contact Us</h3>
        <p>
          Feel free to ask about anything. Your opinion is important to us - we
          want to hear from you and will always reply.
        </p>
        <form>
            <input type="text" placeholder="Subject" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <textarea placeholder="What do you have in your mind?" ></textarea>
            <Buttons name="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
