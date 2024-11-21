import {useEffect, useState} from "react";
import Button from "./Button";
import { BsFillHddNetworkFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

const Card = ({ service, onClick }) => {
  return (
    <div>
      <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
        <div class="w-full px-6 text-pink-500 mb-3">
        {service.slug === "renta" && <BsFillHddNetworkFill size={40}/>}
          {service.slug === "soporte" && <MdEngineering size={40}/>}
          {service.slug === "web" && <MdOutlineWeb size={40}/>}
          {service.slug === "datos" && <FaDatabase size={40}/>}
        </div>
        <div class="w-full font-bold text-xl text-gray-800 px-6">
          {service.name}
        </div>
        <p class="text-gray-800 text-base px-6 mb-5 min-h-12">
          {service.shortDescription}
        </p>
      </div>
      <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div class="flex items-center justify-end">
          <Button name="Ver mas" onClick={onClick}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
