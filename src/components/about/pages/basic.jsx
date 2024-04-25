import React, { useState } from "react";

function SignInForm() {
  const [sum, setSum] = useState(0);
  const [showSum, setShowSum] = useState(false);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [dietaryHabit, setDietaryHabit] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "gender") {
      setGender(value);
    } else if (name === "country") {
      setCountry(value);
    } else if (name === "dietaryHabit") {
      setDietaryHabit(value);
    } else if (name === "age") {
      setAge(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const baseWaterFootprint = 132;
    let genderWaterFootprint = 0;
    let dietaryHabitWaterFootprint = {};
    if (age > 15) {
      genderWaterFootprint = gender === "male" ? 4 : 3.5;
    } else {
      genderWaterFootprint = gender === "male" ? 3 : 2.5;
    }
    if (gender === "male") {
      dietaryHabitWaterFootprint = {
        vegetarian: 1213,
        non_veg: 2303,
      };
    } else {
      dietaryHabitWaterFootprint = {
        vegetarian: 1090,
        non_veg: 1875,
      };
    }
    // Calculate the water footprint
    let waterFootprint =
      baseWaterFootprint +
      genderWaterFootprint +
      dietaryHabitWaterFootprint[dietaryHabit];

      if (age > 59 && age <= 70) {
        waterFootprint = waterFootprint * 0.9; // Apply 90% reduction for age over 59 and under 70
      } else if (age > 70) {
        waterFootprint = waterFootprint * 0.8; // Apply 80% reduction for age over 70
      }
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
            required
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
            required
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
                required
              />{" "}
              Vegetarian
            </label>
            <label>
              <input
                type="radio"
                name="dietaryHabit"
                value="non_veg"
                onChange={handleChange}
                required
              />{" "}
              Non-Vegetarian
            </label>
          </div>
        </div>

        <div className="formField" style={{ marginBottom: "20px" }}>
          <label className="formFieldLabel">Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
            className="formFieldInput"
            required
          />
        </div>

        <div className="formField">
          <button className="formFieldButton">Submit</button>
        </div>

        {/* Conditionally render the sum */}
        {showSum && (
          <div className="formField">
            <p>Your water footprint is: {sum} L/day</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default SignInForm;
