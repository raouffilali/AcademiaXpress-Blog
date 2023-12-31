// import HeroTitle from "../../../components/HeroTitle animated/HeroTitle";
import { images } from "../../../../constants";
import "./Hero.css";
import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row ">
      {/* Section 1 Ttile, paragraph, search bar and tags */}
      <div className="mt-10 lg:w-1/2 fadeInUp  ">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className=" text-dark-light mt-6 text-justify md:text-xl lg:text-base xl:text-xl  lg:text-left ">
          Welcome to{" "}
          <span className="text-yellow-500 lg:text-[22px]	">EduEchos</span>, a
          vibrant corner of{" "}
          <span className="text-yellow-500 lg:text-[22px]	">Academia+</span> We're
          thrilled to have you join our community where you'll discover a
          treasure trove of captivating blogs, articles, and so much more across
          a wide spectrum of fields. Whether you're a Student, learner, tech
          enthusiast, a fintech aficionado, or anyone with a curious mind,
          you've found the perfect destination.{" "}
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Search article"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Maths
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Physics
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Chemistry
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Computer Science
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Programming
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Web Development
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Machine Learning
            </li>
          </ul>
        </div>
      </div>
      {/* Section 2 Image Assets */}
      <div className="hidden lg:block lg:1/2 fadeInRight ">
        <img
          className="w-full"
          src={images.heroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
}

export default Hero;

// <section className="container mz-auto flex flex-col px-5 py-5 lg:flex-row">
//   {/* -----------------------Section1--------------------------- */}
//   <div className="fadeInLeftBig mt-10 lg:w-1/2">
//     <h1 className=" font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl xl:text-5xl lg:text-4xl lg:text-left lg:max-w-[540px]">
//       Read the most interesing articles{" "}
//     </h1>
//     {/* <HeroTitle /> */}
//     <p className=" text-dark-light mt-6 text-justify md:text-xl lg:text-base xl:text-xl  lg:text-left ">
//       Welcome to{" "}
//       <span className="text-[#e4c151] lg:text-[22px]	">EduEchos</span>, a
//       vibrant corner of{" "}
//       <span className="text-[#e4c151] lg:text-[22px]	">Academia+</span> We're
//       thrilled to have you join our community where you'll discover a
//       treasure trove of captivating blogs, articles, and so much more across
//       a wide spectrum of fields. Whether you're a Student, learner, tech
//       enthusiast, a fintech aficionado, or anyone with a curious mind,
//       you've found the perfect destination.
//     </p>
//     {/* DIV for inputs and tags */}
//     <div className=" flex flex-col gap-y-2.5 relative ">
//       {/* input div */}
//       <div className=" relative mt-10  ">
//         <FiSearch className="  absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
//         <input
//           className=" placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-xl pl-12 pr-3 w-full py-3  border-[#959EAD] focus:outline-none focus:ring-2 focus:ring-[#5b83c7] focus:border-transparent  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:py-4  "
//           type="text"
//           placeholder="Search Aritcles, exams ..."
//         />
//       </div>
//       <button className=" w-full bg-primary text-white font-semibold rounded-lg px-5 py-3  md:absolute md:right-2 md:top-1/2  md:w-fit md:py-2 ">
//         Search
//       </button>
//     </div>
//     {/* tags div */}
//     <div className=" flex mt-4 flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7 ">
//       <span className=" text-dark-light font-semibold italic mt-2 lg:mt-4  lg:text-sm xl:text-base  ">
//         Popular Tags:
//       </span>
//       <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base ">
//         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
//           Maths
//         </li>
//         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
//           Physics
//         </li>
//         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
//           Chemistry
//         </li>
//         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
//           Computer Science
//         </li>
//         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
//           Programming
//         </li>
//         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
//           Web Development
//         </li>
//         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
//           Machine Learning
//         </li>
//       </ul>
//     </div>
//   </div>

//   {/* -----------------------Section2---------------------------*/}
//   <div className="hidden lg:block lg:1/2  ">
//     <img
//     className="w-full fadeInRight  "
//     src={images.heroImage} alt="users are reading articles" />
//   </div>
// </section>
