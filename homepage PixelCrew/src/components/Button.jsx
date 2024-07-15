import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, flexProriety }) => {
  return (
    <>
      <div >
        <Link to='#' className={flexProriety}>
          <div className="bg-[#D1F864] rounded-3xl p-3 font-extrabold max-xs:w-[70%] text-center" >
            <span className="mr-4 ml-4 text-[13px]  max-xs:ml-0 max-xs:mr-0 ">{text}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Button;
