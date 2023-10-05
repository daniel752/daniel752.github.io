import { Contact, Header, Landing, Portfolio, Skills } from "./components";
import { Section } from "./components";
import React, { useEffect } from "react";

const HomeLayout = () => {
  const sections = [
    {
      id: "home",
      component: <Landing />,
      title: "Hello! I'm Daniel Arbiv",
      isPredecessor: true,
    },
    {
      id: "skills",
      component: <Skills />,
      title: "skills",
      isPredecessor: true,
    },
    {
      id: "projects",
      component: <Portfolio />,
      title: "projects",
      isPredecessor: true,
    },
    { id: "contact", component: <Contact />, title: "contact" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as needed
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden-element");
          observer.unobserve(entry.target);
        }
      });
    };

    const observers = sections.map((section) => {
      const observer = new IntersectionObserver(handleIntersection, options);

      const sectionElement = document.getElementById(section.id);

      if (sectionElement) {
        observer.observe(sectionElement);
      }

      return observer;
    });

    // Clean up the observers when the component unmounts
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <Header />
      <div className="sections">
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            children={section.component}
            isPredecessor={section.isPredecessor}
          />
        ))}
      </div>
    </>
  );
};

export default HomeLayout;
