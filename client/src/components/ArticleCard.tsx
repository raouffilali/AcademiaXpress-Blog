import { images } from "../constants";
import { BsCheckLg } from "react-icons/bs";

interface Props {
  className?: string;
}

function ArticleCard({ className = "" }: Props = {}) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.post1}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className=" font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px] ">
          Future of Technologie
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg ">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          {/* profile image and name  */}
          <div className="flex items-center gap-x-2 md:gap-x-2.5 ">
            <img
              src={images.postProfile}
              alt="Post profile"
              className="w-9 h-9 rounded-full object-cover object-center md:w-10 md:h-10"
            />
            <div className="flex flex-col g">
              <h4 className="text-sm font-bold italic text-dark-soft md:text-base">
                John Doe
              </h4>
              <div className="flex item-center gap-x-2">
                {/* two spans tha show verified user with icon  */}
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="w-3 h-3 text-[#36B37E]" />
                </span>
                <span className="text-xs text-dark-light italic mt-[5px] md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          {/* date part */}
          <span className="font-bold text-dark-light italic text-sm md:text-base    ">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
