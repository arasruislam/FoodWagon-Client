import React from "react";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";
import aboutImg from "../../assets/about.jpg";
import LazyLoad from "react-lazy-load";
import Sponsor from "../Shared/Sponor/Sponsor";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useSetTitle from "../../hook/useSetTitle";

const About = () => {
  useSetTitle("About");

  return (
    <div>
      {/* Breadcrumb */}
      <section>
        <Breadcrumb />
      </section>

      {/* About us */}
      <section className="mt-8">
        <div className="custom-container">
          <div className="grid grid-col p-4 lg:p-0 lg:grid-cols-2 items-center justify-center">
            <div>
              <LazyLoad>
                <img src={aboutImg} alt="about section image" />
              </LazyLoad>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 border-l-4 border-orange-500 ps-2">
                We make every moment special
              </h1>
              <div className="space-y-4">
                <p className="text-gray-600 text-justify">
                  Foodwagon is a fantastic food website that offers a wide
                  variety of delicious and satisfying meals for all types of
                  food lovers. They have an excellent reputation for their
                  high-quality service and dedication to providing customers
                  with the best possible experience.
                </p>
                <p className="text-gray-600 text-justify">
                  Foodwagon's customer service is also second to none. Their
                  team is knowledgeable, friendly, and always willing to go
                  above and beyond to ensure that customers are satisfied with
                  their meals. From answering questions about menu items to
                  making special accommodations for dietary restrictions, the
                  Foodwagon team is dedicated to providing the best possible
                  service to their customers.
                </p>
                <p className="text-gray-600 text-justify">
                  Overall, Foodwagon is an excellent choice for anyone looking
                  for a delicious and satisfying meal. With their extensive
                  menu, commitment to quality ingredients, and exceptional
                  customer service, it's no wonder they've become one of the
                  most popular food websites around.
                </p>
                <h3 className="text-yellow-600 font-bold italic ">
                  {" "}
                  -David Wagon
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section className="mt-20 mb-4">
        <Sponsor />
      </section>

      {/* Google Map */}
      <section className="grid place-items-center mt-16 mb-4 ">
        <MapContainer
          center={[23.81070617209931, 90.41376758350052]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "80vh", width: "80vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.81070617209931, 90.41376758350052]}>
            <Popup>Dhaka, Bangladesh</Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default About;
