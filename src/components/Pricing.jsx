import React from "react";

const Pricing = ({ packages }) => {
  return (
    <section>
      <div className="container mx-auto px-2 pt-4 text-gray-800">
        <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          Precios
        </h1>
        <div className="w-full mb-10">
          <div className="h-1 mx-auto bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900 w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:my-4">
          {packages &&
            packages.map((pack, index) => {
              return (
                <div className={`flex flex-col w-5/6 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4 ${index == 1 ? "lg:w-1/3 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10":"lg:w-1/4"}`}>
                  <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="p-8 text-xl font-bold text-center border-b-4">
                      {pack.name}
                    </div>
                    <ul className="w-full text-center text-sm">
                      {pack.includes.map((description) => (
                        <li className="border-b py-2 text-sm mx-3">{description}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="w-full pt-6 text-2xl text-gray-600 font-bold text-center">
                      {pack.price === "Cotización"
                        ? pack.price
                        : `$${pack.price}`}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
