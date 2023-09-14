import React, { useState } from "react";
import InputForm from "./InputForm";

export default function BodyComponent({ dataTrip, setDataTrip }) {
  // display Read detail
  const [detail, setDetail] = useState([]);
  console.log("Detail :", detail);

  const handleChangeStatus = (id) => {
    {
      dataTrip.map((item) => {
        // console.log(dataTrip)
        if (item.id === id) {
          if (item.status === "beach") {
            item.status = "forest";
          } else if (item.status === "forest") {
            item.status = "mountain";
          } else {
            item.status = "beach";
          }
        }
      });
    }
    setDataTrip([...dataTrip]);
  };

  return (
    <div>
      {/* Body content */}
      <div className="flex justify-between px-5 my-16">
        <div>
          <h1 className="capitalize font-bold text-3xl text-red-200">good night team!</h1>
        </div>
        <div>
          <div>
            <button class="w-full rounded-lg  bg-gray-700 text-white border-2 px-5 py-2 uppercase font-poppins font-medium">
              <label htmlFor="my-modal"> add new trip</label>
            </button>
          </div>
        </div>

        {/* Modal Popup Add new */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
            </div>

            {/* form submit */}
            <InputForm dataTrip={dataTrip} setDataTrip={setDataTrip} />
          </div>
        </div>
      </div>
      
      
      {/* Card Box */}{" "}
      <div class="grid grid-cols-3 px-5 gap-4 ">
        {dataTrip.map((item) => (
          <div class="bg-gray-700 shadow-lg hover:shadow-xl rounded-lg relative h-64">
            <div class="pt-4 px-4 rounded-t-lg text-left">
              <div>
                {/* loop data title */}
                <h1 className="uppercase text-lg font-bold text-white ">
                  {item.title}
                </h1>

                {/* loop data description */}
                <p className="text-white line-clamp-3 mt-2 tracking-wide">
                  {item.description}
                </p>
              </div>

              {/* loop data people */}
              <div className="mt-3">
                <div>
                  <p className="text-white capitalize">people going</p>
                </div>
                <span className="text-white text-xl font-bold">
                  {item.peopleGoing}
                </span>
              </div>
            </div>
            
            {/* button status */}
            <div class="grid grid-cols-2 gap-1 px-2 pb-2 absolute inset-x-0 bottom-0">
              <div class="p-2 ">
                <button
                  onClick={() => handleChangeStatus(item.id)}
                  class={`w-full text-white px-3 py-2 rounded uppercase font-poppins font-medium ${item.status == "beach" ? "bg-blue-500" : item.status == "forest" ? "bg-green-500" : "bg-gray-400"}`}
                >
                  {item.status}
                </button>
              </div>

            {/* button Read more */}
              <div class="p-2">
                <button class=" w-full bg-gray-800 text-white px-3 py-2 rounded uppercase font-poppins font-medium">
                  <label htmlFor="my-modal-3" onClick={() => setDetail(item)}>
                    {" "}
                    Read Details{" "}
                  </label>

                  {/*modal oppup read detail */}
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal text-black px-5 text-left">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>

                      <div class="text-left">
                        <div>
                          <h1 className="uppercase text-lg font-bold">
                            {/* loop data title */}
                            {detail.title}
                          </h1>
                          <p className="mt-2 tracking-wide capitalize">
                            {/* loop data description */}
                            {detail.description}
                          </p>

                          <div className="mt-4">
                            <span className="capitalize">
                              {/* loop data people */}
                              Around
                              <span className="font-bold text-xl">
                                {" "}
                                {detail.peopleGoing}{" "}
                              </span>{" "}
                              people gooing there
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* modal */}
                </button>
              </div>
            </div>
          </div>
        ))}{" "}
        {/* Modal Popup Read Detail */}
      </div>
    </div>
  );
}
