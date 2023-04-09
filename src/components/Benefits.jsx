import Container from "./Container";
import clsx from "clsx";

import listBenefit from "../data/benefits";

const Benefits = () => {
  return (
    <section id="benefits">
      <Container>
        <div className={clsx("pt-28 pb-8")}>
          <h2 className="font-semibold text-4xl text-center max-w-2xl mx-auto leading-relaxed">
            Keuntungan Bergabung Dengan E-Learning EDUFREE
          </h2>
          <div className={clsx("mt-10", "grid grid-cols-3 gap-10")}>
            {listBenefit.map((item) => (
              <div
                key={item.id}
                className={clsx(
                  "p-8",
                  "bg-gray-100",
                  "flex flex-col space-y-3"
                )}
              >
                <div
                  className={clsx(
                    "bg-blue-800 text-white",
                    "h-11 w-11 pl-2",
                    "flex items-center justify-center",
                    "text-xl font-bold",
                    "rounded-lg",
                    "relative overflow-hidden",
                    "after:h-11 after:w-11 after:absolute after:bg-secondary after:rounded-lg after:right-7 after:top-5"
                  )}
                >
                  {item.id}
                </div>
                <h4 className="font-medium text-2xl">{item.title}</h4>
                <p className="text-base text-primary-2/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
