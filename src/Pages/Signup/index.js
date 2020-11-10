import React from "react";
import Input from "../../Components/Input";

const Signup = () => {
  return (
    <div className="flex content-center justify-center">
      <form className="py-16 px-8 bg-gray-200 rounded">
        <h2 className="text-gray-700">User Signup</h2>
        <Input placeholder="First Name" type="text" />
        <br />
        <Input placeholder="Last Name" type="text" />
        <br />
        <Input placeholder="Email" type="email" />
        <br />
        <Input placeholder="Password" type="password" />
        <br />
        <Input placeholder="Confirm Password" type="password" />
        <br />
        <div className="ml-6">
          Sex:
          <span className="ml-6">
            <input name="sex" type="radio" />
            Male
          </span>
          <span className="ml-6">
            <input name="sex" type="radio" />
            Female
          </span>
        </div>
        <br />
        <button className="p-2 bg-blue-400 rounded float-right">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
