import React from "react";
import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../../lib/services"; 


 

export default function Service() {

  return (
    <div>

      <div>
      <SectionTitle
        subHeading={" Servie "}
        heading={" Our Service Area"}
      ></SectionTitle>
    </div>

    <div className="ml-40 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
         

         {
          services.map((service)=>(
            <ServiceCard service={service} key={service._id}></ServiceCard>
          ))
         }
      


    </div>

    

    


    </div>
    


  );
}
