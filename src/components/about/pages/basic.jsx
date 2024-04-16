import React, { useState } from "react";

function SignInForm() {
  const [sum, setSum] = useState(0);
  const [showSum, setShowSum] = useState(false);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [dietaryHabit, setDietaryHabit] = useState("");
  const [showerNumber, setShowerNumber] = useState("");
  const [hasLawn, setHasLawn] = useState("");
  const [hasCar, setHasCar] = useState("");
  const [shoppingFrequency, setShoppingFrequency] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "gender") {
      setGender(value);
    } else if (name === "country") {
      setCountry(value);
    } else if (name === "dietaryHabit") {
      setDietaryHabit(value);
    } else if (name === "showerNumber") {
      setShowerNumber(value);
    } else if (name === "hasLawn") {
      setHasLawn(value);
    } else if (name === "hasCar") {
      setHasCar(value);
    } else if (name === "shoppingFrequency") {
      setShoppingFrequency(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const baseWaterFootprint = 145;
    const genderWaterFootprint = gender === "male" ? 55 : 50;
    const dietaryHabitWaterFootprint = {
      vegetarian: 563,
      low_meat: 760,
      heavy_meat: 939
    };
    const showerWaterFootprintPerDay = 11;
    const lawnWaterFootprint = hasLawn === "Yes" ? 72 : 0;
    const shoppingFrequencyWaterFootprint = {
      low: 291,
      mid: 583,
      high: 1166
    };
    const carWaterFootprint = hasCar === "Yes" ? 10 : 0;
  
    // Calculate the water footprint
    const waterFootprint =
      baseWaterFootprint +
      genderWaterFootprint +
      dietaryHabitWaterFootprint[dietaryHabit] +
      showerNumber * showerWaterFootprintPerDay +
      lawnWaterFootprint +
      shoppingFrequencyWaterFootprint[shoppingFrequency] +
      carWaterFootprint;

      setSum(waterFootprint);
    // No need to calculate sum, as we removed the number fields
    setShowSum(true);
  };

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
        <div className="formField">
          <label className="formFieldLabel">Gender</label>
          <select
            name="gender"
            value={gender}
            onChange={handleChange}
            className="formFieldInput"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="formField">
          <label className="formFieldLabel">Country</label>
          <select
            name="country"
            value={country}
            onChange={handleChange}
            className="formFieldInput"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <div className="formField">
          <label className="formFieldLabel">Dietary Habit</label>
          <div>
            <label>
              <input
                type="radio"
                name="dietaryHabit"
                value="vegetarian"
                onChange={handleChange}
              />{" "}
              Vegetarian
            </label>
            <label>
              <input
                type="radio"
                name="dietaryHabit"
                value="low_meat"
                onChange={handleChange}
              />{" "}
              Low Meat Eater
            </label>
            <label>
              <input
                type="radio"
                name="dietaryHabit"
                value="heavy_meat"
                onChange={handleChange}
              />{" "}
              Heavy Meat Eater
            </label>
          </div>
        </div>

        <div className="formField" style={{ marginBottom: "20px" }}>
          <label>Shower Number:</label>
          <input
            type="number"
            name="showerNumber"
            value={showerNumber}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label>
            Do you have a lawn?
            <input
              type="radio"
              name="hasLawn"
              value="Yes"
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasLawn"
              value="No"
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>

        <div className="formField">
          <label>
            Do you have a Car?
            <input
              type="radio"
              name="hasCar"
              value="Yes"
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasCar"
              value="No"
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>

        <div className="formField">
          <label>Shopping Frequency:</label>
          <label>
            <input
              type="radio"
              name="shoppingFrequency"
              value="low"
              onChange={handleChange}
            />{" "}
            Basics
          </label>
          <label>
            <input
              type="radio"
              name="shoppingFrequency"
              value="mid"
              onChange={handleChange}
            />{" "}
            Likes it
          </label>
          <label>
            <input
              type="radio"
              name="shoppingFrequency"
              value="high"
              onChange={handleChange}
            />{" "}
            Shop till drop
          </label>
        </div>

        <div className="formField">
          <button className="formFieldButton">Submit</button>
        </div>

        {/* Conditionally render the sum */}
        {showSum && (
          <div className="formField">
            <p>Your water footprint is: {sum}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default SignInForm;
