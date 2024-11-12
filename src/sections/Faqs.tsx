import { useState } from "react";
import { faqs } from "../constants";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-12 md:pb-20 lg:pb-32 relative" id="faqs">
      <div className="absolute top-[106px] left-[100px] rounded-full shadow-green-glow max-sm:-left-512" />
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">FAQs</h2>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="py-2 border-b border-gray-500 overflow-hidden"
          >
            <div
              className="flex items-center justify-between cursor-pointer select-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-xl font-medium max-sm:text-base">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <img src="./images/minus.png" width={14} />
              ) : (
                <img src="./images/plus.png" alt="" width={14} />
              )}
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden mt-2 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
              id={`faq-answer-${index}`}
            >
              <p
                className={`text-gray-500 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
