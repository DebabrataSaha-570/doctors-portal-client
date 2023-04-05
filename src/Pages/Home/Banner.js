import React from "react";
import bannerImage from "../../assets/images/chair.png";
import bannerBg from "../../assets/images/bg.png";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bannerBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero   min-h-[75vh]">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            src={bannerImage}
            className="rounded-lg w-[374px]  lg:w-[594px] shadow-2xl"
            alt="banner_image"
          />
          <div className="">
            <div className="w-[385px] lg:w-[541px]">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Your New Smile Starts Here
              </h1>
            </div>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
