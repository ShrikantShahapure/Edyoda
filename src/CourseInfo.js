import React, { useState } from "react";
import IconClock from './IconClock.png';
import Icon from './Icon.png';
import Icon1 from './Icon1.png';
import Icon2 from './Icon2.png';
import Icon3 from './Icon3.png';
import Icon4 from './Icon4.png';
import RazorpayIcon from './RazorpayIcon.png';

const PLANS = [
  {
    id: 1,
    name: "12 Months Subscription (limited time)",
    price: 99,
    discount: 91.92,
    disabled: true,
  },
  {
    id: 2,
    name: "12 Months Subscription",
    price: 179,
    discount: 91.62,
    disabled: false,
  },
  {
    id: 3,
    name: "6 Months Subscription",
    price: 149,
    discount: 83.22,
    disabled: false,
  },
  {
    id: 4,
    name: "3 Month Subscription",
    price: 99,
    discount: 66.67,
    disabled: false,
  },
];

const CourseInfo = () => {
  const [selectedPlan, setSelectedPlan] = useState(
    PLANS.find((plan) => !plan.disabled)
  );

  const handlePlanChange = (plan) => {
    if (!plan.disabled) {
      setSelectedPlan(plan);
    }
  };

  const getPriceWithDiscount = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="course-info">
      <div className="left">
        <h2 className="title">Access curated courses worth ₹18,500 at just 
        <span className="content"> ₹99</span> per year</h2>
        <ul>
          <li>
            <img className="book" src={Icon} />
            <span className="content">100+</span> Job relevant courses
          </li>
          <li>
            <img className="book" src={Icon1} />
           <span className="content">20,000+</span> Hours of content
          </li>
          <li>
            <img className="book" src={Icon2} />
            <span className="content">Exclusive</span> webinar access
          </li>
          <li>
            <img className="book" src={Icon3} />
            <span className="content">Schorship worth</span> ₹94,500
          </li>
          <li>
            <img className="book" src={Icon4} />
            <span className="content">Ad-free</span> learning
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="plans">
        <div className="circle-buttons">
        <button className="circle-button"> 1  &nbsp; &nbsp;SignUp</button> 
        <button className="circle-button"> 2 Subscribe</button>
      </div>
          <h2>Select your subscription plan</h2>
          <div className="plan-list">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`plan${plan.disabled ? " disabled" : ""}`}
              >
                <label htmlFor={`plan-${plan.id}`}>
                  <input
                    type="radio"
                    id={`plan-${plan.id}`}
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan.id === plan.id}
                    disabled={plan.disabled}
                    onChange={() => handlePlanChange(plan)}
                  />
                  <span className="checkmark"></span>
                  <span className="name">{plan.name}</span>
                </label>
                <div className="price">
                  <span className="original">₹{plan.price}/month</span>
                  {plan.discount > 0 && (
                    <span className="discounted">
                      ₹{getPriceWithDiscount(plan.price, plan.discount)}
                      /month
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <div className="total-price">
              <span className="label">Subscription fee :</span>
              <span className="value">₹18,500</span>
            </div>
            <p className="limited-offer">
              (Limited time offer, valid till 25th March 2023)
            </p>
            <h3>Order Summary</h3>
            <div className="selected-plan">
              <span className="label">Selected Plan:</span>
              <span className="value">{selectedPlan.name}</span>
            </div>
            <div className="price-details">
              <span className="label">Price:</span>
              <span className="value">₹{selectedPlan.price}/month</span>
            </div>
            {selectedPlan.discount > 0 && (
              <div className="price-details">
                <span className="label">Total (Incl. of 18% GST):</span>
                <span className="value">
                  ₹{" "}
                  {getPriceWithDiscount(
                    selectedPlan.price,
                    selectedPlan.discount
                  )}
                  /month
                </span>
              </div>
            )}
          </div>
          <div className="buttons">
            <button className="cancel-button">Cancel</button>
            <button className="pay-button">Proceed to Pay</button>
            <img src={RazorpayIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
