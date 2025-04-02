// import { useState } from "react";
// import { motion } from "framer-motion";

// // Définition du type pour une question FAQ
// interface FAQItem {
//   question: string;
//   answer: string;
// }

// // Liste des questions/réponses
// const faqItems: FAQItem[] = [
//   {
//     question: "TECHNICAL SPECIFICATIONS",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur. Mauris ipsum ut velit egestas consequat aenean. Vitae neque ipsum mi eu. Maecenas quis dignissim diam hendrerit.",
//   },
//   {
//     question: "LOREM IPSUM",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi vel ligula tincidunt venenatis.",
//   },
//   {
//     question: "DOLOR SIT AMET",
//     answer:
//       "Tristique euismod arcu amet in massa vestibulum pretium blandit ullamcorper. Diam id volutpat semper gravida magna.",
//   },
// ];

// const Carousel: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   // Fonction pour ouvrir/fermer une section
//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 text-gray absolute top-36  ">
//       {faqItems.map((item, index) => (
//         <div key={index} className="border-b border-gray-700 py-4">
//           {/* Titre (cliquable) */}
//           <h3
//             className=" w-[458px] text-5xl font-Akkordeon  uppercase cursor-pointer flex justify-between items-center "
//             onClick={() => toggleFAQ(index)}
//           >
//             {item.question}
//             {/* <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span> */}
//           </h3>

//           {/* Réponse (affichée uniquement si openIndex === index) */}
//           {openIndex === index && (
//             <motion.p
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="mt-2 text-base font-montreal"
//             >
//               {item.answer}
//             </motion.p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Définition du type pour une question FAQ
interface FAQItem {
  question: string;
  answer: string;
}

// Liste des questions/réponses
const faqItems: FAQItem[] = [
  {
    question: "TECHNICAL SPECIFICATIONS",
    answer:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi vel ligula tincidunt venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "LOREM IPSUM",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi vel ligula tincidunt venenatis.",
  },
  {
    question: "DOLOR SIT AMET",
    answer:
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi vel ligula tincidunt venenatis. ",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fonction pour ouvrir/fermer une section
  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-2xl p-6 text-gray absolute top-36">
      {faqItems.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-4">
          <h3
            className=" text-4xl font-Akkordeon uppercase cursor-pointer flex justify-between items-center w-[458px]"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
   
          </h3>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="mt-2 w-[458px] text-base font-montreal">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default FAQAccordion;
