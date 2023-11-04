"use client";

import {
  CursorArrowRaysIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState, useRef } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";

const navigation = [
  { name: "Book Rides", href: "/" },
  { name: "Book Tours", href: "/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <header className="sticky top-0 h-[70px] w-screen backdrop-blur-3xl ps-20 pe-3 border-b border-gray-300 flex items-center">
        <nav className="grid grid-cols-12 items-center justify-between px-4 w-full">
          <div className="col-span-4 rounded-xl flex items-center justify-start gap-3 w-full">
            <h1 className="text-2xl font-semibold text-lime-950 tracking-tighter">
              Travel Anywhere!
            </h1>
          </div>
          <div className="col-span-4 flex items-center justify-center gap-20">
            {navigation.map((item, index) => (
              <div key={index} className="">
                <h1 className="font-semibold tracking-tight">{item.name}</h1>
              </div>
            ))}
          </div>
          <div className="col-span-4 ms-auto">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-sm font-semibold bg-lime-50 hover:bg-lime-100 transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner"
            >
              <CursorArrowRaysIcon className="w-6 h-6" />
              Create Ride/Tour
            </button>
          </div>
        </nav>
      </header>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-[#f5f5f5] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl h-[38em]">
                  <Tab.Group>
                    <Tab.List className="flex items-center justify-between divide-x border-b text-gray-800 border-lime-800 divide-lime-800 font-bold">
                      <Tab className="w-full p-6 flex items-center justify-center gap-2 bg-lime-100">
                        <MapPinIcon className="w-5 h-5 stroke-2" />
                        Create Ride
                      </Tab>
                      <Tab className="w-full p-6 flex items-center justify-center gap-2">
                        <MapIcon className="w-5 h-5 stroke-2" />
                        Create Tour
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="p-6">
                      <Tab.Panel>
                        <form className="space-y-5" action="#" method="POST">
                          <div className="flex-col gap-6">
                            <label
                              htmlFor="location"
                              className="leading-6 text-sm"
                            >
                              Location
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-300 px-3">
                                <input
                                  type="text"
                                  name="location"
                                  id="location"
                                  autoComplete="false"
                                  className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="Kharar"
                                />
                                <span className="flex select-none items-center pl-3 sm:text-sm">
                                  <MapPinIcon className="w-5 h-5" />
                                </span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <label
                                htmlFor="details"
                                className="leading-6 text-sm"
                              >
                                Description
                              </label>
                            </div>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-300 px-3">
                                <textarea
                                  type="text"
                                  name="deatils"
                                  id="details"
                                  autoComplete="false"
                                  className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="Details of this ride"
                                  rows={2}
                                  style={{ resize: "none" }}
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-between gap-5">
                              <div className="mt-4 w-full">
                                <label
                                  htmlFor="details"
                                  className="leading-6 text-sm"
                                >
                                  Start date
                                </label>
                                <div className="mt-2 w-full">
                                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-300 px-3">
                                    <input
                                      type="date"
                                      name="deatils"
                                      id="details"
                                      autoComplete="false"
                                      className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                      placeholder="Details of this ride"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 w-full">
                                <label
                                  htmlFor="details"
                                  className="leading-6 text-sm"
                                >
                                  End date
                                </label>
                                <div className="mt-2">
                                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-300 px-3">
                                    <input
                                      type="date"
                                      name="deatils"
                                      id="details"
                                      autoComplete="false"
                                      className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 w-full">
                              <label
                                htmlFor="details"
                                className="leading-6 text-sm"
                              >
                                Number of members
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-300 px-3">
                                  <input
                                    type="range"
                                    name="members"
                                    id="members"
                                    min="0"
                                    max="5"
                                    step="0.5"
                                    className="w-full border-0 bg-lime-200 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 w-full">
                              <label
                                htmlFor="details"
                                className="leading-6 text-sm"
                              >
                                Budget
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-300 px-3">
                                  <input
                                    type="number"
                                    name="budget"
                                    id="budget"
                                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Budget"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <button
                              type="submit"
                              className="flex my-6 w-full justify-center rounded-md bg-lime-200 px-3 py-1 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-lime-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Book
                            </button>
                          </div>
                        </form>
                      </Tab.Panel>
                      <Tab.Panel>Content 2</Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
