import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import RoutePaths from "../../constants/RoutePaths";
import BaseButton from "../base/BaseButton";
import { CloseNav, Hamburger } from "./../Icons";
import { useRouter } from "next/router";
import { useState } from "react";

const MobileNav = () => {
  const history = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <Menu as="div" className="relative z-50 block md:hidden">
        {({ open }) => (
          <>
            <Menu.Button className="font-medium flex items-center bg-transparent transform transition-all duration-300 bg-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-offset-gray-600">
              {open ? (
                <CloseNav className="w-6" />
              ) : (
                <Hamburger className="w-6" />
              )}
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
                className="origin-top-right py-2 absolute right-0 mt-2 w-56 rounded shadow-lg bg-gray-300 text-gray-600 ring-1 ring-green-400 ring-opacity-5 focus:outline-none  divide-y divide-pink-700 overflow-hidden"
              >
                <div>
                  <Link
                    href="/"
                    className="hover:bg-gray-400"
                    activeClassName="font-bold"
                    exact
                  >
                    <Menu.Item>
                      <a>
                        <h4 className="py-2 px-3 hover:bg-gray-400">Home</h4>
                      </a>
                    </Menu.Item>
                  </Link>
                  <Link
                    href="/podcast"
                    className="hover:bg-gray-400"
                    activeClassName="font-bold"
                    exact
                  >
                    <Menu.Item>
                      <a>
                        <h4 className="py-2 px-3 hover:bg-gray-400">Podcast</h4>
                      </a>
                    </Menu.Item>
                  </Link>
                  <Link
                    href="/blogs"
                    className="hover:bg-gray-400"
                    activeClassName="font-bold"
                    exact
                  >
                    <Menu.Item>
                      <a>
                        <h4 className="py-2 px-3 hover:bg-gray-400">Blogs</h4>
                      </a>
                    </Menu.Item>
                  </Link>
                  <div
                    onClick={() => setShowDropdown((state) => !state)}
                    className="hover:bg-gray-400 cursor-pointer"
                    activeClassName="font-bold"
                    exact
                  >
                    {/* <a> */}
                    <h4 className="py-2 px-3 hover:bg-gray-400">Jobs</h4>
                    {/* </a> */}
                  </div>
                  {showDropdown && (
                    <>
                      <Link
                        href="/jobs"
                        className="hover:bg-gray-400"
                        activeClassName="font-bold"
                        exact
                      >
                        <Menu.Item>
                          <h4 className="py-2 px-3 hover:bg-gray-400">
                            Seeking
                          </h4>
                        </Menu.Item>
                      </Link>
                      <Link
                        href="/hiring"
                        className="hover:bg-gray-400"
                        activeClassName="font-bold"
                        exact
                      >
                        <Menu.Item>
                          <h4 className="py-2 px-3 hover:bg-gray-400">
                            Hiring
                          </h4>
                        </Menu.Item>
                      </Link>
                    </>
                  )}
                  <Link
                    href="/learning"
                    className="hover:bg-gray-400"
                    activeClassName="font-bold"
                    exact
                  >
                    <Menu.Item>
                      <a>
                        <h4 className="py-2 px-3 hover:bg-gray-400">
                          Learning
                        </h4>
                      </a>
                    </Menu.Item>
                  </Link>
                  <Menu.Item>
                    <BaseButton
                      rounded={false}
                      onClick={() => history.push("/signup")}
                      text="Signup"
                      classes="bg-white text-hero shadow-lg w-4/5 mx-auto mt-2"
                      center
                      up={false}
                    />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default MobileNav;
