import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import BaseButton from "../base/BaseButton";
import MobileNav from "./MobileNav";

const Nav = () => {
  const history = useRouter();

  return (
    <nav className="w-full absolute z-50 left-1/2 transform -translate-x-1/2 top-0 flex justify-between items-center text-white container px-6 md:px-0 xl:px-12 mx-auto py-2">
      <Link href="/" exact>
        <a>
          <img
            src="/images/logo.png"
            alt="colearning lounge logo"
            className="w-48 max-w-48"
          />
        </a>
      </Link>

      <MobileNav />

      <div className="hidden md:flex md:justify-end md:items-center md:flex-1 md:space-x-6">
        <Link href="/" activeClassName="font-bold" exact>
          <a>
            <h4>Home</h4>
          </a>
        </Link>
        <Link href="/podcast" activeClassName="font-bold">
          <a>
            <h4>Podcast</h4>
          </a>
        </Link>
        <Link href="/blogs" activeClassName="font-bold">
          <a>
            <h4>Blogs</h4>
          </a>
        </Link>
        {/* <Link href="/jobs" activeClassName="font-bold">
          <a>
            <h4>Jobs</h4>
          </a>
        </Link> */}
        {/* <div className="cursor-pointer">
          <h4>Jobs</h4>
        </div> */}
        <Menu as="div" className="relative z-50">
          {({ open }) => (
            <>
              <Menu.Button className="flex items-center">
                <h4>Jobs</h4>
              </Menu.Button>

              <Transition
                enter="transform transition duration-100 ease-in"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-75 ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                show={open}
              >
                <Menu.Items
                  static
                  className="origin-top-left py-2 absolute left-0 mt-2 w-40 rounded shadow-lg bg-white text-socialHandle overflow-hidden"
                >
                  <div>
                    <Link href="/jobs" activeClassName="font-bold" exact>
                      <a>
                        <Menu.Item>
                          <h4 className="py-2 px-3 hover:bg-gray-100">
                            Seeking
                          </h4>
                        </Menu.Item>
                      </a>
                    </Link>
                    <Link href="/hiring" activeClassName="font-bold" exact>
                      <a>
                        <Menu.Item>
                          <h4 className="py-2 px-3 hover:bg-gray-100 border-t-2 border-eventDropdownBorder">
                            Hiring
                          </h4>
                        </Menu.Item>
                      </a>
                    </Link>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
        {/* <Link href="/hiring" activeClassName="font-bold">
          <a>
            <h4>Hiring</h4>
          </a>
        </Link> */}
        <Link href="/learning" activeClassName="font-bold">
          <a>
            <h4>Learning</h4>
          </a>
        </Link>
        {/* <BaseButton
          onClick={() => history.push("/signup")}
          text="Signup"
          classes="bg-white text-hero shadow-lg"
        /> */}
      </div>
    </nav>
  );
};

export default Nav;
