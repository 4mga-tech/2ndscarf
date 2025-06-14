import React, { useEffect } from "react";
import "../Css/About.css";
export default function About() {
  
  return (
    <section id="about">
      
      <div className="about">
        <div className="header-page">
          <b style={{ fontSize: "10px" }}>CATSCARF</b> <br />
          <h1 className="signa" style={{ marginTop: "4px" }}>
            High Fashion
          </h1>
          <p>
            Born from a need for high quality, artisan hand-knit pet fashion for
            all seasons. Our collections have a little something for every
            beloved feline in your life.
          </p>
        </div>
        <div className="about-general">
          <div className="about-item">
            <img src="/gifs/gif1.webp" alt="gif1" />
            <h1 className="underlineAbout">Premium Yarns</h1>
            <p>
              From the Andes in Peru to South of Beijing, we scoured the globe
              to find yarns that are both animal-friendly and of the upmost
              quality. Alpaca, mink, and recycled silk are just some of the
              fibers we have in our arsenal. When it comes to your cat's
              comfort, we don't play dice.
            </p>
          </div>
          <div className="about-item">
            <img src="/gifs/gif2.webp" alt="gif2" />
            <h1 className="underlineAbout">Custom Fit</h1>
            <p>
              Fat cat, skinny cat, small cat, tall cat – there's a CatScarf for
              all. We're here to cater to your cat's specific needs. You tell us
              your cat's measurements and we craft your loved one a scarf that
              is not only fashionable and made with love, but has an impeccable
              fit.
            </p>
          </div>
          <div className="about-item">
            <img src="/gifs/gif3.webp" alt="gif3" />
            <h1 className="underlineAbout">Knit By Hand</h1>
            <p>
              Each scarf is painstakingly knit by hand for the cat it was
              purchased for. We understand how important your cat is and what
              they deserve. Hours are spent clacking away, knitting until the
              scarf is flawless. Not all scarves make the cut; we accept nothing
              less than perfection.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
