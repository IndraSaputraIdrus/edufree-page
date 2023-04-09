import starRating from "../assets/starRating.svg";

import clockIcon from "../assets/clock.svg";
import playIcon from "../assets/play.svg";
import memberIcon from "../assets/member.svg";

import clsx from "clsx";

const CourseCard = ({
  image,
  title,
  description,
  durasiJam,
  totalVideo,
  member,
}) => {
  return (
    <article>
      <div className="relative">
        <img src={image} alt="web" />
        <div
          className={clsx(
            "inline-flex items-center space-x-2",
            "bg-primary text-white",
            "rounded-full",
            "px-3 py-1 text-sm",
            "absolute right-3 -bottom-4"
          )}
        >
          <img src={starRating} />
          <span>4.9</span>
        </div>
      </div>
      <div className="p-4 pt-8">
        <h5 className="text-2xl font-medium mb-2">{title}</h5>
        <p className="text-sm mb-6 text-primary-2/75">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm">
            <img src={clockIcon} />
            <span>{durasiJam} Jam</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <img src={playIcon} />
            <span>{totalVideo} Video</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <img src={memberIcon} />
            <span>{member} Siswa</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
