"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Product(params) {
  return (
    <>
      <section className="grid grid-cols-12 gap-10 ps-24 p-8 overflow-y-auto h-screen">
        <div className="col-span-6">
          <Tab.Group>
            <div className="flex items-start gap-4 w-full">
              <Tab.Panels className="w-full">
                {images.map((item, index) => (
                  <Tab.Panel
                    key={index}
                    className="w-full h-[30em] bg-white/20"
                  >
                    <Image
                      src={item}
                      width={5000}
                      height={5000}
                      alt=""
                      className="w-full h-full object-cover object-center rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
              <Tab.List className="flex flex-col items-start justify-center gap-4">
                {images.map((item, index) => (
                  <Tab className="relative" key={index}>
                    <Image
                      src={item}
                      width={5000}
                      height={5000}
                      alt=""
                      className="w-40 h-32 object-cover object-center rounded-lg"
                    />
                    <div className="absolute w-full h-full inset-0 group-hover:bg-white/20 bg-gradient-to-b from-black/30 from-20% via-black/20 via-70% to-black/30 to-80% rounded-lg"></div>
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </Tab.Group>
        </div>
        <div className="col-span-6 space-y-6 px-8">
          <div className="space-y-3">
            <h1 className="font-semibold text-4xl tracking-tight">
              Basic T-shit
            </h1>
            <p className="text-3xl">$140</p>
          </div>
          <div>
            <p className="text-gray-700">
              The Zip Tote Basket is the perfect midpoint between shopping tote
              and comfy backpack. With convertible straps, you can hand carry,
              should sling, or backpack this convenient and spacious bag. The
              zip top and durable canvas construction keeps your goods protected
              for all-day use.
            </p>
          </div>
          <div>
            <button className="flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700">
              Add to Bag
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
