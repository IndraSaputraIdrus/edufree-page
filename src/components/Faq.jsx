import clsx from "clsx";
import Container from "./Container";
import FaqItem from "./FaqItem";

import faqs from "../data/faqs";

const Faq = () => {
  return (
    <section>
      <Container>
        <div className={clsx("pt-28 pb-20", "flex space-x-20")}>
          <div className="w-[340px] flex-none">
            <h4 className="text-3xl leading-relaxed max-w-sm font-semibold">
              Frequently Asked Questions
            </h4>
            <p className="text-base max-w-xs text-primary/75">
              Masih bingung atau ragu? Hubungi kami di nomor +6288 999 222 333
            </p>
          </div>
          <div className="flex-auto divide-y -my-7">
            {faqs.map((item) => (
              <FaqItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
