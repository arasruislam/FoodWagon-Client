import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import Lottie from "lottie-react";
import qna from "../../../public/QNA.json"

const Blog = () => {
  return (
    <div className="custom-container lg:mt-16 py-8 grid grid-col md:grid-cols-2 items-center ">
      <div>
        <div className="bg-orange-100 overflow-hidden rounded">
          <h1 className="text-2xl flex items-center gap-4 bg-blue-100 shadow px-4 py-2">
            <FaRegCheckSquare /> The differences between uncontrolled and
            controlled components?
          </h1>
          <p className="px-4 py-2 text-justify">
            In a controlled components rect, <strong>State</strong> handles all
            the form data. If your use controlled component your have all
            control of your form data. Where developer decide the value insert
            or not. Controlled components are predictable. On the Other hand
            Uncontrolled components manage by only the <strong>DOM</strong>. In
            a uncontrolled component is a optional to have a state but it must
            be have <strong>react Ref</strong>. You can perform validation on
            the input data only after the form is submitted in the uncontrolled
            components in react.
          </p>
        </div>
        <div className="bg-orange-100 overflow-hidden rounded">
          <h1 className="text-2xl flex items-center gap-4 bg-blue-100 shadow px-4 py-2">
            <FaRegCheckSquare /> How to validate React props using PropTypes?
          </h1>
          <p className="px-4 py-2 text-justify">
            First of all we need to install prop-type in your app. we validate
            them by setting the propTypes property of the FooComponent component
            to an object that has the names of the props to validate as the
            keys. And the corresponding values are the data type of the props.
            We pass in the values for the props when we reference the component
            in App. If we pass in prop values that don’t match the type
            specified, we get an error.
          </p>
        </div>
        <div className="bg-orange-100 overflow-hidden rounded">
          <h1 className="text-2xl flex items-center gap-4 bg-blue-100 shadow px-4 py-2">
            <FaRegCheckSquare /> The difference between nodejs and express js?
          </h1>
          <p className="px-4 py-2 text-justify">
            NodeJs is open source, cross platform javascript code the runs on backend server. NodeJs build based on chrome V8 engine and this is the major different to develop app. Other hand ExpressJs is a web application framework for NodeJs. Which makes the web application fast and easy.
          </p>
        </div>
        <div className="bg-orange-100 overflow-hidden rounded">
          <h1 className="text-2xl flex items-center gap-4 bg-blue-100 shadow px-4 py-2  ">
            <FaRegCheckSquare /> What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="px-4 py-2">
            Custom ReactJs hook is a reusable function that a ReactJs developer can use and add specific functionality by their needs.
          </p>
        </div>
      </div>
      <div>
        <Lottie animationData={qna} loop={true} />
      </div>
    </div>
  );
};

export default Blog;
