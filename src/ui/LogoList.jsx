import React from "react";

export default function LogoList() {
  const logos = [
    {
      src: "https://media.publit.io/file/honda-r.png",
      alt: "Honda",
    },
    {
      src: "https://media.publit.io/file/tvs.png",
      alt: "TVS",
    },
    // {
    //   src: "/src/data/search/ather.png",
    //   alt: "Alamo",
    // },
    {
      src: "https://media.publit.io/file/yamaha-logo-v.webp",
      alt: "Yamaha",
    },
    {
      src: "https://media.publit.io/file/hero-9.png",
      alt: "Hero",
    },
    {
      src: "https://media.publit.io/file/bajaj-logo-v.gif",
      alt: "Bajaj",
    },
    {
      src: "https://media.publit.io/file/suzuki-logo.webp",
      alt: "Suzuki",
    },
    {
      src: "https://media.publit.io/file/royalenfield.png",
      alt: "Royal Enfield",
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
