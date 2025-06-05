import React from "react";

export default function Banner() {
  const banners = [
    {
      title: "Affordable price for car servicing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est, labore fuga saepe corporis reiciendis!",
      next: "#slide2",
      prev: "#slide4",
    },

    {
      title: "Affordable price for car servicing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est, labore fuga saepe corporis reiciendis!",
      next: "#slide3",
      prev: "#slide1",
    },

    {
      title: "Affordable price for car servicing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est, labore fuga saepe corporis reiciendis!",
      next: "#slide4",
      prev: "#slide2",
    },

    {
      title: "Affordable price for car servicing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est, labore fuga saepe corporis reiciendis!",
      next: "#slide1",
      prev: "#slide3",
    },
  ];

  return (
    <div className=" container mx-auto">
      <div className="carousel  w-full ">
      {
      
      banners.map((banner,index) => (
        <div


        style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1)), url(/assets/images/banner/${index + 1}.jpg)`
             }}

        
        
        
        key={index} id={`slide${index+1}`} className="carousel-item relative w-full bg-top bg-no-repeat h-[90vh] rounded-xl">
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={banner.prev} className="btn btn-circle">
              ❮
            </a>
            <a href={banner.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))
      
      }
    </div>
    </div>
  );
}
