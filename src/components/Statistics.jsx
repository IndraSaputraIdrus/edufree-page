import Container from "./Container";
import Lorem from "../assets/lorem.svg";
import Ditlance from "../assets/ditlance.svg";
import Owthest from "../assets/owthest.svg";
import Neovasi from "../assets/neovasi.svg";
import Onago from "../assets/onago.svg";

const partners = [
  { id: 1, name: "Lorem", icon: Lorem },
  { id: 2, name: "Ditlance", icon: Ditlance },
  { id: 3, name: "Owthest", icon: Owthest },
  { id: 4, name: "Neovasi", icon: Neovasi },
  { id: 5, name: "Onago", icon: Onago },
];

const statistics = [
  { id: 1, text: "Jumlah Siswa", total: "21.000+" },
  { id: 2, text: "Instruktur Ahli", total: "100+" },
  { id: 3, text: "Kursus Gratis", total: "150+" },
];

const Statistics = () => {
  return (
    <section id="statistics" className="bg-gray-300">
      <Container>
        <div className="py-20 text-primary-2">
          <div className="flex items-end justify-between">
            <ul className="flex space-x-10">
              {statistics.map((item) => (
                <li key={item.id} className="flex flex-col">
                  <span className="text-3xl font-semibold">{item.total}</span>
                  <span className="text-base opacity-75">{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="flex space-x-6">
              {partners.map((item) => (
                <li key={item.id} className="flex items-center space-x-2">
                  <img src={item.icon} />
                  <span className="text-2xl font-bold">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
