"use client";

import {
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  MapIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

const navigation = [
  { name: "Community", icon: Squares2X2Icon, href: "/" },
  { name: "Explore", icon: GlobeAltIcon, href: "/" },
  { name: "Events", icon: CalendarDaysIcon, href: "/" },
  { name: "Jobs", icon: BriefcaseIcon, href: "/jobs" },
  { name: "Marketplace", icon: BuildingStorefrontIcon, href: "/marketplace" },
  { name: "Travel", icon: MapIcon, href: "/travel" },
  { name: "Profile", icon: UserCircleIcon, href: "/" },
  { name: "Settings", icon: Cog6ToothIcon, href: "/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden lg:block bg-[#f8f8f8] ring-1 ring-black/20 shadow-inner w-[70px] h-screen">
        <nav className="flex flex-col items-center justify-center gap-6 py-5 h-full">
          <Link
            href="/"
            className="rounded-xl flex items-center justify-center mb-4"
          >
            <SparklesIcon className="w-9 h-9 fill-green-800 stroke-0" />
          </Link>
          <div className="space-y-3">
            {navigation.slice(0, 6).map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative w-11 h-11 mx-auto bg-gray-50 hover:bg-gray-200 ring-1 ring-gray-300 hover:ring-gray-500 shadow transition duration-300 ease-in-out rounded-xl flex items-center justify-center"
              >
                <item.icon className="w-6 h-6 stroke-gray-700" />
                <div className="hidden group-hover:block absolute left-14 mb-12 bg-gray-200 backdrop-blur-xl ring-1 ring-gray-300 shadow-inner text-gray-700 px-2 py-1 rounded-lg">
                  <p className="text-xs font-medium">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center justify-end items-end h-full space-y-3">
            {navigation.slice(6, navigation.length).map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative w-11 h-11 bg-gray-50 hover:bg-gray-200 ring-1 ring-gray-300 hover:ring-gray-500 shadow transition duration-300 ease-in-out rounded-xl flex items-center justify-center"
              >
                <item.icon className="w-6 h-6 stroke-gray-700" />
                <div className="hidden group-hover:block absolute left-14 mb-12 bg-gray-200 ring-1 ring-gray-300 shadow-inner text-gray-700 px-2 py-1 rounded-lg">
                  <p className="text-xs font-medium">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden block relative z-10"
          onClose={setOpen}
        >
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-y-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <header className="ring-1 ring-gray-200 shadow-inner w-[70px] h-screen bg-[#ffffff]">
                      <nav className="flex flex-col items-center justify-center gap-6 py-5 h-full">
                        <div className="rounded-xl flex items-center justify-center mb-5">
                          <SparklesIcon className="w-9 h-9 fill-gray-800 stroke-0" />
                        </div>
                        <div className="space-y-3">
                          {navigation.slice(0, 5).map((item, index) => (
                            <div
                              key={index}
                              className="group relative w-11 h-11 mx-auto bg-gray-50 hover:bg-gray-200 ring-1 ring-gray-200 hover:ring-gray-400 shadow-inner transition duration-300 ease-in-out rounded-xl flex items-center justify-center"
                            >
                              <item.icon className="w-6 h-6 stroke-gray-700" />
                              <div className="hidden group-hover:block absolute left-14 mb-12 bg-gray-50 ring-1 ring-gray-300 shadow-inner text-gray-700 px-2 py-1 rounded-lg">
                                <p className="text-xs font-medium">
                                  {item.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col items-center justify-end items-end h-full space-y-3">
                          {navigation
                            .slice(5, navigation.length)
                            .map((item, index) => (
                              <div
                                key={index}
                                className="group relative w-11 h-11 bg-gray-50 hover:bg-gray-200 ring-1 ring-gray-200 hover:ring-gray-400 shadow-inner transition duration-300 ease-in-out rounded-xl flex items-center justify-center"
                              >
                                <item.icon className="w-6 h-6 stroke-gray-700" />
                                <div className="hidden group-hover:block absolute left-14 mb-12 bg-gray-50 ring-1 ring-gray-300 shadow-inner text-gray-700 px-2 py-1 rounded-lg">
                                  <p className="text-xs font-medium">
                                    {item.name}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </nav>
                    </header>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
