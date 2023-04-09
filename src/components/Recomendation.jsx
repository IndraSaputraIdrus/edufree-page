import arrowBottom from "../assets/arrowBottom.svg";

import Container from "./Container";
import clsx from "clsx";
import CourseCard from "./CourseCard";

import courses from "../data/courses";

const Recomendation = () => {
  return (
    <section>
      <Container>
        <div className={clsx("pt-20 pb-28", "divide-y-2")}>
          <div className="flex items-center justify-between pb-5">
            <h3 className="font-semibold text-4xl leading-relaxed max-w-md">
              Rekomendasi Kursus Untuk Kamu
            </h3>
            <div className="flex items-center space-x-10">
              <button
                className={clsx("flex items-center space-x-2", "text-lg")}
              >
                <span>Kategori</span>
                <img src={arrowBottom} />
              </button>
              <a
                className={clsx(
                  "block",
                  "px-10 py-3",
                  "rounded-md",
                  "bg-secondary text-black",
                  "transition duration-300 ease-in-out",
                  "hover:bg-secondary/75"
                )}
                href=""
              >
                Lihat Kursus
              </a>
            </div>
          </div>
          <div className={clsx("pt-12", "grid grid-cols-3 gap-16")}>
            {courses.map((item) => (
              <CourseCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Recomendation;
