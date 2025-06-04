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
    <div className="carousel w-full h-screen">
      {banners.map((banner,index) => (
        <div key={index} id="slide1" className="carousel-item relative w-full">
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
