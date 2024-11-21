import { useState } from "react";
import Card from "./Card";
import services from "../data/data";
import Modal from "./Modal";
import Pricing from "./Pricing";
import Button from "./Button";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section id="services" className="bg-white py-8">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedService && selectedService.name}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-7">
            <div className="col-span-3">
                <div>
                    <h3 className="font-semibold mb-4">Propietario del servicio: <span className="font-medium">{selectedService && selectedService.owner}</span> </h3>
                    <h3 className="font-semibold">Descripción del Servicio:</h3>
                    <p className="" style={{ whiteSpace: "pre-wrap" }}>
                        {selectedService && selectedService.description}
                    </p>
                    <h3 className="font-semibold text-sm text-gray-400">Glosario:</h3>
                    <p className="text-sm text-gray-400" style={{ whiteSpace: "pre-wrap" }}>
                        {selectedService && selectedService.glossary}
                    </p>
                    <h3 className="font-semibold mb-5">¿Cómo obtenerlo?</h3>
                    <Button name="Contáctanos" link="#contact" onClick={()=>setModalOpen(false)}/>
                </div>
            </div>
            <div className="col-span-4">
                <Pricing packages={selectedService && selectedService.packages}/>
            </div>
        </div>
      </Modal>
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Servicios
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <Card
              service={service}
              onClick={() => {
                setSelectedService(service);
                setModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
