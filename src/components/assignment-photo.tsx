import React from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const AssignmentPhoto = () => {
  const t = useTranslations("assignment");
  return (
    <div className="col-span-3 p-4">
      <h3 className="capitalize text-center">assignment photo:</h3>
      <div className="bg-[#EFEFEF] dark:bg-[#212A34] w-11/12 mx-auto aspect-video mt-2 flex justify-center items-center">
        <svg
          width="46"
          height="40"
          viewBox="0 0 46 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.7627 1.44922H5.95002C3.32568 1.44922 1.19824 3.57666 1.19824 6.20099V33.3493C1.19824 35.9736 3.32568 38.1011 5.95002 38.1011H39.7627C42.387 38.1011 44.5145 35.9736 44.5145 33.3493V6.20099C44.5145 3.57666 42.387 1.44922 39.7627 1.44922Z"
            stroke="#C5C5C5"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M31.1864 14.7767C33.0266 14.7767 34.5184 13.2849 34.5184 11.4447C34.5184 9.60455 33.0266 8.11279 31.1864 8.11279C29.3463 8.11279 27.8545 9.60455 27.8545 11.4447C27.8545 13.2849 29.3463 14.7767 31.1864 14.7767Z"
            stroke="#C5C5C5"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M27.8557 28.086L18.4158 18.6627C17.8151 18.0621 17.0076 17.7136 16.1585 17.6885C15.3094 17.6633 14.4827 17.9634 13.8475 18.5273L1.19824 29.7743"
            stroke="#C5C5C5"
            strokeWidth="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5264 38.1046L32.3704 25.2606C32.9578 24.672 33.7441 24.3243 34.5748 24.2858C35.4055 24.2473 36.2205 24.5207 36.8599 25.0525L44.5207 31.4398"
            stroke="#C5C5C5"
            strokeWidth="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Button
        variant="link"
        className="text-light-cyan hover:text-light-cyan underline"
      >
        {t("upload")}
      </Button>
      <Button
        variant="link"
        className="text-orange-red hover:text-orange-red underline"
      >
        {t("delete")}
      </Button>
    </div>
  );
};

export default AssignmentPhoto;
