import React from 'react';
import img_1 from "../../../assets/foodItems/1.jpg"
import img_2 from "../../../assets/foodItems/2.jpg"
import img_3 from "../../../assets/foodItems/3.jpg"
import img_4 from "../../../assets/foodItems/4.jpg"
import img_5 from "../../../assets/foodItems/5.jpg"
import img_6 from "../../../assets/foodItems/6.jpg"
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowsAlt } from 'react-icons/fa';

const FoodItem = () => {
    return (
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold py-4">Food Item Collection</h2>
          <div>
            <Link
              to="/"
              className="font-semibold text-orange-600 hover:underline flex items-center"
            >
              Sell All <FaArrowAltCircleRight className='text-black ms-1'/>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 py-8">
          <div className="text-center">
            <img
              src={img_1}
              className="rounded-full"
              alt="Food Collection Image"
            />
            <p className="font-bold text-lg uppercase">Dessert</p>
          </div>
          <div className="text-center">
            <img
              src={img_2}
              className="rounded-full"
              alt="Food Collection Image"
            />
            <p className="font-bold text-lg uppercase">Sandwich Combo</p>
          </div>
          <div className="text-center">
            <img
              src={img_3}
              className="rounded-full"
              alt="Food Collection Image"
            />
            <p className="font-bold text-lg uppercase">Tacos Al</p>
          </div>
          <div className="text-center">
            <img
              src={img_4}
              className="rounded-full"
              alt="Food Collection Image"
            />
            <p className="font-bold text-lg uppercase">Fried Chicken</p>
          </div>
          <div className="text-center">
            <img
              src={img_5}
              className="rounded-full"
              alt="Food Collection Image"
            />
            <p className="font-bold text-lg uppercase">Tacos</p>
          </div>
          <div className="text-center">
            <img
              src={img_6}
              className="rounded-full"
              alt="Food Collection Image"
            />
            <p className="font-bold text-lg uppercase">Biriyani</p>
          </div>
        </div>
      </div>
    );
};

export default FoodItem;