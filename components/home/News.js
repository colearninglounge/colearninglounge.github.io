import NewsCollection from "./news/NewsCollection";
import BaseButton from "./../base/BaseButton";

const News = () => {
  return (
    <div className="mt-20 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        In the News
      </h2>
      <NewsCollection />
      <div className="flex justify-center">
        <BaseButton
          text="View more News"
          classes="bg-primary text-white mt-12"
        />
      </div>
    </div>
  );
};

export default News;
