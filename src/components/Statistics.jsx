import Container from "./Container";

import { partners, statistics } from "../data/statistics";

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
