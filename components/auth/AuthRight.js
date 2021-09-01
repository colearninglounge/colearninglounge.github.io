import Link from "next/link";
import { ArrowLeft } from "../Icons";

const AuthRight = ({ type = "signup", children, history }) => {
  return (
    <div className="flex flex-col col-span-3 p-10">
      <div className="flex items-center justify-between">
        <p
          className="flex items-center cursor-pointer text-gray-600"
          onClick={history.back}
        >
          <ArrowLeft className="w-2 mr-2" /> Back
        </p>
        <Link href="/">
          <a className="text-gray-600">Home</a>
        </Link>
      </div>
      <div className="flex-1 divide-y divide-gray-200 md:w-1/2 mx-auto text-gray-600 pt-10">
        <div className="py-6">
          <h2 className="text-gray-900 text-2xl font-semibold">
            {type === "signup"
              ? "Register your Account!"
              : type === "login"
              ? "Login into your Account"
              : "Forgot Password"}
          </h2>
          <h3 className="mt-2">
            For the purpose of industry regulation, your details are required.
          </h3>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthRight;
