import React, { useState } from "react";
import PlusImage from "../../Images/_plus.png";
import CrossImage from "../../Images/_xmark.png";

import "./index.css";

function FaqsSection() {
  const faqsList = [
    {
      id: 1,
      question: "Alright, but what exactly do you do?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore nobis enim dolor vero asperiores tenetur, autem sit provident neque laboriosam! Deleniti illum deserunt at quibusdam, facere nulla fugit culpa.",
    },
    {
      id: 2,
      question: "Alright, but what exactly do you do?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore nobis enim dolor vero asperiores tenetur, autem sit provident neque laboriosam! Deleniti illum deserunt at quibusdam, facere nulla fugit culpa.",
    },
    {
      id: 3,
      question:
        "Alright, but what exactly do you do? Alright, but what exactly do you do? Alright, but what exactly do you do?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore nobis enim dolor vero asperiores tenetur, autem sit provident neque laboriosam! Deleniti illum deserunt at quibusdam, facere nulla fugit culpa.",
    },
    {
      id: 4,
      question: "Alright, but what exactly do you do?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore nobis enim dolor vero asperiores tenetur, autem sit provident neque laboriosam! Deleniti illum deserunt at quibusdam, facere nulla fugit culpa.",
    },
  ];

  const [activeFaqId, setActiveFaqId] = useState(-1);

  return (
    <div className="faqs-section">
      <h1 className="faqs-heading">FAQs</h1>
      <div className="faqs-content">
        {faqsList.map((faq) => {
          const { id, question, answer } = faq;

          const faqContainerClass =
            id === activeFaqId ? "faq-show-answer-container" : "";

          const faqNumberClass =
            id === activeFaqId ? "faq-highlight-number" : "";

          const faqAnswerClass =
            id === activeFaqId ? "faq-answer" : "faq-answer-hide";

          const stringId = id < 10 ? "0" + id : id;

          return (
            <div className={`faq-container ${faqContainerClass}`} key={id}>
              <h1 className={`faq-number ${faqNumberClass}`}>{stringId}</h1>
              <div className="faq-question-container">
                <h1 className="faq-question">{question}</h1>
                <p className={faqAnswerClass}>{answer}</p>
              </div>
              {id === activeFaqId ? (
                <img
                  src={CrossImage}
                  alt="hide answer"
                  className="faq-plus"
                  onClick={() => {
                    setActiveFaqId(-1);
                  }}
                />
              ) : (
                <img
                  src={PlusImage}
                  alt="show answer"
                  className="faq-plus"
                  onClick={() => {
                    setActiveFaqId(id);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaqsSection;
