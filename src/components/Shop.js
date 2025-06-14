import React from "react";
import "../Css/Shop.css";

export default function Shop() {
  return (
    <div>
      <section id="shop" className="section">
        <div className="header-page">
          <b style={{ fontSize: "10px" }}>CATSCARF</b> <br />
          <h1 className="signa" style={{ marginTop: "4px" }}>
            SIGNATURE
          </h1>
          <p>Autumn colors. Luxurious fibers. High fashion. </p>
        </div>
        <div className="product-grid">
          <span className="product-overlay">
            <img src="/images/1.png" alt="oroolt1" />
            <button className="view-button">
              <h1 className="underline">THE CLYDE</h1> <p>View Details</p>
            </button>
          </span>
          <span className="product-overlay">
            <img src="/images/2.png" alt="oroolt2" />
            <button className="view-button">
              <h1 className="underline">THE SQUIRREL</h1> <p>View Details</p>
            </button>
          </span>
          <span className="product-overlay">
            <img src="/images/3.png" alt="oroolt3" />
            <button className="view-button">
              <h1 className="underline">THE SID & NANCY</h1> <p>View Details</p>
            </button>
          </span>{" "}
        </div>
      </section>
      <section id="wrap-spring" className="section">
        <div className="header-page">
          <b style={{ fontSize: "10px" }}>CATSCARF</b> <br />
          <h1 className="signa" style={{ marginTop: "4px" }}>
            SPRING
          </h1>
          <p>Bright. Bold. Adorable. </p>
        </div>
        <div className="product-grid">
          <span className="product-overlay">
            <img src="/images/2.1.png" alt="oroolt1" />
            <button className="view-button">
              <h1 className="underline">THE GUS</h1> <p>View Details</p>
            </button>
          </span>
          <span className="product-overlay">
            <img src="/images/2.2.png" alt="oroolt2" />
            <button className="view-button">
              <h1 className="underline">THE MOBIUS</h1> <p>View Details</p>
            </button>
          </span>
          <span className="product-overlay">
            <img src="/images/2.3.png" alt="oroolt3" />
            <button className="view-button">
              <h1 className="underline">THE GWENDOLY</h1> <p>View Details</p>
            </button>
          </span>{" "}
        </div>
      </section>
      <section id="wrap-winter" className="section">
        <div className="header-page">
          <b style={{ fontSize: "10px" }}>CATSCARF</b> <br />
          <h1 className="signa" style={{ marginTop: "4px" }}>
            WINTER
          </h1>
          <p>Striking design. Pure Comfort. High Fashion. </p>
        </div>
        <div className="product-grid">
          <span className="product-overlay">
            <img src="/images/3.1.png" alt="oroolt1" />
            <button className="view-button">
              <h1 className="underline">THE RICKY</h1> <p>View Details</p>
            </button>
          </span>
          <span className="product-overlay">
            <img src="/images/3.2.png" alt="oroolt2" />
            <button className="view-button">
              <h1 className="underline">THE FELIX</h1> <p>View Details</p>
            </button>
          </span>
          <span className="product-overlay">
            <img src="/images/3.3.png" alt="oroolt3" />
            <button className="view-button">
              <h1 className="underline">THE HODGE</h1> <p>View Details</p>
            </button>
          </span>{" "}
        </div>
      </section>
      <section id="wrap-halloween" className="section">
        <div className="header-page">
          <b style={{ fontSize: "10px" }}>CATSCARF</b> <br />
          <h1 className="signa" style={{ marginTop: "4px" }}>
            The Hallow's Eve
          </h1>
          <p>Reversible. Comfortable. Badass. </p>
        </div>
        <div className="product-grid2">
          <span className="product-overlay">
            <img src="/images/4.1.png" alt="oroolt1" />
            <button className="view-button">
              <h1 className="underline">THE HALLOW`S EVE SKULL DETAIL</h1> <p>View Details</p>
            </button>
          </span>
          <span className="product-overlay">
            <img src="/images/4.2.png" alt="oroolt2" />
            <button className="view-button">
              <h1 className="underline">THE HALLOW`S EVE SOLID</h1> <p>View Details</p>
            </button>
          </span>{" "}
        </div>
      </section>
    </div>
  );
}
