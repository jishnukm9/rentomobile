import React from "react";

export default function LogoList() {
  const logos = [
    {
      src: "/src/data/search/honda.png",
      alt: "Alamo",
    },
    {
      src: "/src/data/search/tvs.png",
      alt: "Alamo",
    },
    // {
    //   src: "/src/data/search/ather.png",
    //   alt: "Alamo",
    // },
    {
      src: "/src/data/search/yamaha_logo.webp",
      alt: "Alamo",
    },
    {
      src: "/src/data/search/hero.png",
      alt: "Alamo",
    },
    {
      src: "/src/data/search/bajaj_logo.gif",
      alt: "Alamo",
    },
    {
      src: "/src/data/search/suzuki_logo.webp",
      alt: "Alamo",
    },
    {
      src: "/src/data/search/royalenfield.avif",
      alt: "Alamo",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex items-center justify-center shadow-md rounded-lg bg-white overflow-hidden"
            style={{ width: 140, height: 80 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
