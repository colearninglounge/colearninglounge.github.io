import Image from "next/image";
import { Quote, Check, Abstract } from "./../Icons";

const AuthLeft = () => {
  return (
    <div className="hidden md:flex md:flex-col relative md:col-span-2 px-6 py-4">
      <Image
        className="object-cover"
        alt="authentication"
        src="/images/auth.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <img
        src="/images/logo.png"
        alt="colearning lounge logo"
        className="w-48 relative z-50"
      />
      <div className="flex-1 flex justify-center items-center">
        <div className="text-white relative">
          <Quote className="w-6 absolute -top-12 left-0" color="#197592" />
          <h4 className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
            arcu ut fermentum neque varius iaculis egestas. Cras convallis
            euismod risus nullam. Nunc ut vulputate imperdiet arcu. Sollicitudin
            turpis sed imperdiet et maecenas.{" "}
          </h4>
          <p className="flex items-center mt-6 font-semibold">
            Rob Cook <Check className="w-6 ml-4" />
          </p>
          <Abstract className="w-6 absolute -bottom-16 right-0" />
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;
