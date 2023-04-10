import React from "react";
import Container from "./Container";

import footer from "../data/footer";

import navLinks from "../data/navLinks";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="flex pt-16">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-2">[EDUFREE]</h2>
            <p className="text-white/80 max-w-xs">
              Bangung dan wujudkan cita bersama edufree
            </p>
          </div>
          <div className="w-1/2 flex justify-between">
            {footer.map((item) => (
              <div key={item.id}>
                <h4 className="mb-4 font-medium text-lg">{item.title}</h4>
                <ul className="space-y-1">
                  {item.links.map((link) => (
                    <li key={link}>
                      <a href="" className="text-sm text-white/80">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-secondary text-primary-2 p-5 mt-16 rounded-t-md inline-flex space-x-7">
          <div className="space-y-1">
            <span className="font-medium">Email</span>
            <p>contact@gmail.com</p>
          </div>
          <div className="space-y-1">
            <span className="font-medium">Telephone</span>
            <p>+6288 999 222 333</p>
          </div>
        </div>
      </Container>
      <div className="bg-white">
        <Container>
          <div className="py-6 text-primary-2 font-medium flex justify-between items-center">
            <h3>&copy; Copyright EDUFREE 2021 - 2022</h3>
            <ul className="flex items-center space-x-8 uppercase">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
