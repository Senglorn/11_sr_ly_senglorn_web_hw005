import { ErrorMessage, Formik, Field, Form } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import GoTo from "./GoTo";

const loginVilidate = Yup.object().shape({
  title: Yup.string().required("title is required"),
  description: Yup.string().required("Description is required"),
  number: Yup.string().required("Number is required"),
});

export default function InputForm({ dataTrip, setDataTrip }) {
  // store data form input and
  const [newDataTrip, setNewDataTrip] = useState({});

  // cuath values from form input
  const handlerInputChange = (e) => {
    // console.log("name : ", e.target.name);
    // console.log("Values : ", e.target.value);

    setNewDataTrip({ ...newDataTrip, [e.target.name]: e.target.value });
  };

  // submit to array object at app.js
  const handleSubmit = (event) => {
    // const submit = true;
    // if (submit == true){
    //   setDataTrip([...dataTrip, { id: dataTrip.length + 1, ...newDataTrip }]);
    //   submit = false
    //   if (submit == false){
    //     handleChangeValues();
    //   }
    // }

    setDataTrip([...dataTrip, { id: dataTrip.length + 1, ...newDataTrip }]);
    event.target.reset();
    setNewDataTrip(event.target.reset());
  };
  console.log(setDataTrip);

  //for test look up process
  useEffect(() => {
    // console.log(dataTrip);
  }, [dataTrip]);

  //submit change value emty
  const handleChangeValues = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""));
  };

  return (
    <div>
      <Formik
        className="bg-white"
        initialValues={{
          title: "",
          description: "",
          number: "",
        }}
        validationSchema={loginVilidate}
        onSubmit={(values) => console.log(values)}
      >
        {({ isSubmit }) =>
          !isSubmit ? (
            <Form>
              {/* title */}
              <div className="my-5">
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>

                <Field
                  type="text"
                  name="title"
                  onChange={handlerInputChange}
                  class="bg-gray-50 border-2 border-blue-500 font-medium text-sm rounded-lg w-full p-2 block outline-none text-gray-900 focus:border-red-300"
                  placeholder="Takeo Ville"
                />

                <ErrorMessage
                  component="div"
                  name="title"
                  className="text-red-700"
                />
              </div>

              {/* Description */}
              <div className="my-5">
                <label
                  for="desc"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>

                <Field
                  type="text"
                  name="description"
                  onChange={handlerInputChange}
                  class="bg-gray-50 border-2 border-blue-500 font-medium text-sm rounded-lg w-full p-2 block outline-none text-gray-900 focus:border-red-300"
                  placeholder="Happy place with beautiful natural "
                  required
                />

                <ErrorMessage
                  component="div"
                  name="description"
                  className="text-red-700"
                />
              </div>

              {/* people */}
              <div className="my-5">
                <label
                  for="people"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Peolple going
                </label>

                <Field
                  type="number"
                  name="peopleGoing"
                  onChange={handlerInputChange}
                  class="bg-gray-50 border-2 border-blue-500 font-medium text-sm rounded-lg w-full p-2 block outline-none text-gray-900 focus:border-red-300"
                  placeholder="3200"
                  required
                />

                <ErrorMessage
                  component="div"
                  name="number"
                  className="text-red-700"
                />
              </div>

              {/* select option */}
              <div className="py-5">
                <label
                  for="small"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type of adventure
                </label>
                <select
                  type=""
                  id="small"
                  name="status"
                  onChange={handlerInputChange}
                  class="bg-gray-50 border-2 border-blue-500 font-medium text-sm rounded-lg w-full p-2 block outline-none text-gray-900 focus:border-red-300"
                >
                  <option selected>✔ --- Choose any option ---</option>
                  <option value="beach">Beach</option>
                  <option value="forest">Forest</option>
                  <option value="mountain">Mountain</option>
                </select>
              </div>

              {/* button submit */}
              <div className="flex justify-start">
                <div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    class="w-full text-white bg-gray-600 hover:bg-gray-500 font-medium rounded-lg text-base px-5 py-2 text-center"
                  >
                    Submit
                  </button>
                </div>

                <div className="pl-2">
                  <button
                    type="reset"
                    class="w-full text-white bg-gray-600 hover:bg-gray-500 font-medium rounded-lg text-base px-5 py-2 text-center"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </Form>
          ) : (
            <GoTo />
          )
        }
      </Formik>
    </div>
  );
}
