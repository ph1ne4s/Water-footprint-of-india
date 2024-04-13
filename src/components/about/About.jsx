import React, { useState } from 'react';
import Header from '../common/header/Header';
import Head from "next/head";
import formImage from "../public/form.png";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
// import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaterFootprintModal from './WaterFootprintModal'; 
function About() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      router.push({ pathname: "/home", query: values });
    },
  });

  const [selectedItem, setSelectedItem] = useState('basic'); // Default selection
  const [country, setCountry] = useState('');
  const [cereal, setCereal] = useState('');
  const [meat, setMeat] = useState('');
  const [diary, setDiary] = useState('');
  const [egg, setEgg] = useState('');
  const [fat, setFat] = useState('');
  const [sugar, setSugar] = useState('');
  const [vegetable, setVegetable] = useState('');
  const [fruit, setFruit] = useState('');
  const [root, setRoot] = useState('');
  const [coffee, setCoffee] = useState('');
  const [tea, setTea] = useState('');
  const [showernumber, setShowernumber] = useState('');
  const [showerminute, setShowerminute] = useState('');
  const [showertype, setShowertype] = useState('standard');
  const [bathnumber, setBathnumber] = useState('');
  const [tap1, setTap1] = useState('');
  const [tap2, setTap2] = useState('20');
  const [laundryload, setLaundryload] = useState('');
  const [toilettype, setToilettype] = useState('yes');
  const [dishnumber, setDishnumber] = useState('');
  const [dishminute, setDishminute] = useState('');
  const [dishweek, setDishweek] = useState('');
  const [carweek, setCarweek] = useState('');
  const [gardenweek, setGardenweek] = useState('');
  const [gardenminute, setGardenminute] = useState('');
  const [rinsingminute, setRinsingminute] = useState('');
  const [poolcapacity, setPoolcapacity] = useState('');
  const [poolnumber, setPoolnumber] = useState('');
  const [income, setIncome] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [gender, setGender] = useState("");
  const [dietaryHabit, setDietaryHabit] = useState("");
  const [grossYearlyIncome, setGrossYearlyIncome] = useState("");
  const handleDropdownChange = (e) => {
    setSelectedItem(e.target.value);
  };


  const [waterFootprint, setWaterFootprint] = useState(null);

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;

    // Set values based on the selected gender
    if (selectedGender === 'male') {
      // Set values for male
      setGender(55); 
    } else if (selectedGender === 'female') {
      // Set values for female
      setGender(50); 
      
    }
  };
  const handleDietaryHabitChange = (e) => {
    const selectedDietaryHabit = e.target.value;

    // Set values based on the selected dietary habit
    if (selectedDietaryHabit === 'vegetarian') {
      // Set values for vegetarian
      setDietaryHabit(50);
      // Additional logic or state updates if needed
    } else if (selectedDietaryHabit === 'meat_consumer') {
      // Set values for non-vegetarian
      setDietaryHabit(70);
      // Additional logic or state updates if needed
    }
    console.log(dietaryHabit);
  };
  const calculateWaterFootprint = () => {
    const numericFields = [
      { name: 'Cereal products', value: cereal },
      { name: 'Meat products', value: meat },
      { name: 'Dairy products', value: diary },
      { name: 'Eggs', value: egg },
      { name: 'Vegetables', value: vegetable },
      { name: 'Fruits', value: fruit },
      { name: 'Showers per day', value: showernumber },
      { name: 'Shower minutes', value: showerminute },
      { name: 'Baths per week', value: bathnumber },
      { name: 'Tap1', value: tap1 },
      { name: 'Tap2', value: tap2 },
      { name: 'Laundry loads per week', value: laundryload },
      { name: 'Car washes per week', value: carweek },
      { name: 'Garden waterings per week', value: gardenweek },
      { name: 'Garden watering minutes', value: gardenminute },
      { name: 'Rinsing minutes per week', value: rinsingminute },
      { name: 'Pool capacity', value: poolcapacity },
      { name: 'Pool empties per year', value: poolnumber },
    ];
   
    // Check for non-numeric values in numeric fields
    // const invalidFields = numericFields.filter(field => isNaN(parseFloat(field.value)));
  
    // if (invalidFields.length > 0) {
    //   const fieldNames = invalidFields.map(field => field.name).join(', ');
    //   alert(`Please enter valid numeric values in the following fields: ${fieldNames}`);
    //   return;
    // }
  
    if (selectedItem === 'basic') {
      console.log(dietaryHabit);
      // Basic water footprint calculation equation
      let basicWaterFootprint =
      400+
        parseFloat(gender)+
        parseFloat(dietaryHabit)+
        parseFloat(grossYearlyIncome)*0.005
        ;

      setWaterFootprint(basicWaterFootprint);
    } else if (selectedItem === 'advanced') {
      // Advanced water footprint calculation equation
      let advancedWaterFootprint =
        parseFloat(cereal) +
        parseFloat(meat) +
        parseFloat(diary) +
        parseFloat(egg) +
        parseFloat(fat) +
        parseFloat(sugar) +
        parseFloat(vegetable) +
        parseFloat(fruit) +
        parseFloat(root) +
        parseFloat(coffee) +
        parseFloat(tea) +
        parseFloat(showernumber) * parseFloat(showerminute) * (showertype === 'standard' ? 365 : 182.5) +
        parseFloat(bathnumber) * 150 +
        parseFloat(tap1) * parseFloat(tap2) +
        parseFloat(laundryload) * 150 +
        (toilettype === 'Eco' ? 0 : parseFloat(dishnumber) * parseFloat(dishminute) * parseFloat(dishweek) * 52) +
        parseFloat(carweek) * 150 +
        parseFloat(gardenweek) * parseFloat(gardenminute) +
        parseFloat(rinsingminute) +
        parseFloat(poolcapacity) * parseFloat(poolnumber) * 1000;

      setWaterFootprint(advancedWaterFootprint);
    }
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateWaterFootprint();
  };
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="  h-screen items-center flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-1/2 font-latoRegular"
        >
          <div className="flex-1 text-gray-700  p-20">
            <h1 className="text-3xl pb-2 font-latoBold">
              Let's get started 👋
            </h1>
            <p className="text-lg  text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download.
            </p>
            <div className="mt-6 ">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <p className="text-sm font-latoBold text-red-400 "></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>

                <p></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Country input field */}
              <div className="pb-4">
                <label
                  htmlFor="country"
                  className="block font-latoBold text-sm pb-2"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>
              {/* Terms of service*/}
              <div className="pb-4">
                <label
                  htmlFor="terms"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Start learning today!
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              className=" object-cover rounded-lg"
              fill
              priority
              src={formImage}
              alt="form-learn"
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}

export default About;