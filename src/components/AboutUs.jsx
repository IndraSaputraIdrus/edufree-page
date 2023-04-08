import Container from "./Container";
import AboutUsImage from "../assets/AboutUs.png";
import clsx from "clsx";

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <Container>
        <div className={clsx("pt-20 pb-8", "flex")}>
          <div
            className={clsx(
              "space-y-4",
              "flex flex-col justify-center",
              "mr-10"
            )}
          >
            <span className="text-lg text-primary-2/85">Tentang Kami</span>
            <h3 className="text-4xl font-semibold leading-relaxed">
              EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
            </h3>
            <p className="text-base max-w-lg text-primary-2/75">
              Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi
              kedepanya dalam bidang pendidikan
            </p>
          </div>
          <div className="flex-none">
            <img src={AboutUsImage} alt="aboutUs" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
