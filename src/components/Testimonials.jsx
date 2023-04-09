import Container from "./Container";
import profilePic from "../assets/women.jpg";
import clsx from "clsx";

const Testimonials = () => {
  return (
    <section id="statistics" className="bg-gray-300">
      <Container>
        <div className="py-20 text-primary-2 flex justify-between space-x-10">
          <div className="w-5/6">
            <h4 className="text-3xl leading-relaxed max-w-sm font-semibold">
              Kata Mereka Tentang Kursus EDUFREE
            </h4>
            <p className="text-base max-w-xs text-primary/75">
              EDUFREE telah dipercaya lebih dari 10.000 siswa{" "}
            </p>
          </div>
          <div classsName="flex-auto">
            <blockquote className="text-xl font-medium tracking-widest leading-relaxed">
              &#8220;Materi yang disampaikan mudah dimengerti, kualitas
              instruktur sangat baik serta responnya yang cepat. So, kursus
              disini sangat sangat saya rekomendasikan!!&#8221;
            </blockquote>
            <div className="flex items-center mt-7 justify-between">
              <div className="flex items-center space-x-3">
                <img className="h-12 w-12 rounded-full" src={profilePic} />
                <div>
                  <p className="text-lg font-medium">Jenny Wilson</p>
                  <p className="text-sm">Vice President</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="h-3 w-3 bg-indigo-500 rounded-full" />
                <div className="h-3 w-3 bg-indigo-800 rounded-full" />
                <div className="h-3 w-3 bg-indigo-500 rounded-full" />
                <div className="h-3 w-3 bg-indigo-500 rounded-full" />
                <div className="h-3 w-3 bg-indigo-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
