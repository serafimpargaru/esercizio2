import React from "react";
import { myNavLinks } from "../../data/myNavLinks";
import { nanoid } from "nanoid";

const MyFooter = () => {
  return (
    <footer className="mt-4">
      <div className="container-fluid bg-dark">
        <ul className="list-group list-group-horizontal ps-5">
          {myNavLinks.map((links) => (
            <li
             key={nanoid()} className="list-group-item border-0 bg-transparent p-3">
              <a href={links.href} className="text-secondary">{links.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default MyFooter;
