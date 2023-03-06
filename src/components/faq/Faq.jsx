import React, { useState } from "react";
import "./Faq.css";
function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the pricing for the frames?",
      answer:
        "We calculate the total pricing at around ~Rs.5.25 per square inch. If you would like to know more, get started by using the design tool and upload your images to get your exact pricing. Start by clicking here.",
    },
    {
      question: "Do you do custom sizing or bulk orders?",
      answer:
        "In case of custom sizing or bulk orders, please get in touch with us via Instagram/WhatsApp or fill out our contact form so that we can get back to you.",
    },
    {
      question: "Are the frames thick?",
      answer:
        "The frames that we use are proprietary to us as we use a special underpinning process to hold the frame together. The profile of the frame is super thin and it helps your pictures stand out while accenting your wall in the most elegant manner..",
    },
    {
      question: "How do I hang them on the wall?",
      answer:
        "Our smaller frames up to 12x12” come with a re-stickable adhesive strip on the back that lets you stick and re-stick your frame a couple times that allows for super easy and damage free installation,The bigger frames come with an ez-hang mount attached to the rear of the frame that allow you to hang up your images with just 2 screws/nails.",
    },
    {
      question: "How many times can the re-stickable frames be re-stuck?",
      answer: "A couple half dozen times.",
    },
    {
      question: "How do I place my order?",
      answer:
        "The process is super simple, upload your image, choose your size/color for the frame and check out! You can get started by clicking here.",
    },
  ];

  return (
    <div className="faq-section section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq ${activeQuestion === index ? "active" : ""}`}
          onClick={() => toggleQuestion(index)}
        >
          <span className="faqTitle">{faq.question}</span>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Faq;
