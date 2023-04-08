import clsx from "clsx";
import HeroImg from "../assets/hero.png";
import Container from "./Container";

const Hero = () => {
  return (
    <section className="mt-20 bg-primary text-white">
      <Container>
        <div className={clsx("py-[104px]", "flex items-center")}>
          <div className={clsx("w-2/3 pr-10", "flex flex-col space-y-8")}>
            <h1 className={clsx("text-5xl font-semibold leading-relaxed")}>
              Bangung dan Wujudkan Cita Bersama EDUFREE
            </h1>
            <p className="text-base">
              EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
              online yang bertujuan untuk membantu kamu meraih cita di bidang
              teknologi.
            </p>
            <div className={clsx("flex items-center space-x-9")}>
              <a
                className={clsx(
                  "block",
                  "px-10 py-3",
                  "rounded-md",
                  "bg-secondary text-black",
                  "transition duration-300 ease-in-out",
                  "hover:bg-white"
                )}
                href=""
              >
                Lihat Kursus
              </a>
              <a className="block duration-300 hover:opacity-75" href="">
                Lihat Alur Belajar &rarr;
              </a>
            </div>
          </div>
          <div className="1/3">
            <img src={HeroImg} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
