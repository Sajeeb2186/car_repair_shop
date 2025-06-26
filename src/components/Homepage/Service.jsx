import React from "react";
import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../cards/ServiceCard";
import { getServices } from "@/services/getServices";
//import { services } from "../../lib/services"; 






 

export default async function Service() {

  const services=  await getServices();

  //console.log(services)

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
            services?.length>0 &&   services?.map((service)=>(
            <ServiceCard service={service} key={service._id}></ServiceCard>
          ))
         }
      


    </div>

    

    


    </div>
    


  );
}
