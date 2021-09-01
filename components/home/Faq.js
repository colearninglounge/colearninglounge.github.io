import { useState } from "react";
import FaqCollection from "./faq/FaqCollection";
const faq = {
  dashboard: [
    {
      question: `Like contributing?`,
      answers: [
        "1. Answer questions on our community groups",
        "2. Solve problems for example from Kaggle and share the code on git",
        "3. Create a blog post about your topic of interest",
      ],
    },
  ],
  admin: [
    {
      question: `Like contributing as an admin?`,
      answers: [
        "1. Answer questions on our community groups",
        "2. Solve problems for example from Kaggle and share the code on git",
        "3. Create a blog post about your topic of interest",
      ],
    },
  ],
  providers: [
    {
      question: `Like contributing as a provider?`,
      answers: [
        "1. Answer questions on our community groups",
        "2. Solve problems for example from Kaggle and share the code on git",
        "3. Create a blog post about your topic of interest",
      ],
    },
  ],
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="mt-24 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <div className="">
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="min-w-1/2 md:max-w-2/3 mx-auto mt-16">
          <div className="flex items-baseline">
            <button
              className={`p-2 border-b-2 border-gray-400 ${
                activeTab === "dashboard" && "bg-gray-200 border-red-500"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`p-2 border-b-2 border-gray-400 ${
                activeTab === "admin" && "bg-gray-200 border-red-500"
              }`}
              onClick={() => setActiveTab("admin")}
            >
              Admin
            </button>
            <button
              className={`p-2 border-b-2 border-gray-400 ${
                activeTab === "providers" && "bg-gray-200 border-red-500"
              }`}
              onClick={() => setActiveTab("providers")}
            >
              Providers
            </button>
          </div>
          <FaqCollection dropdowns={faq[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
