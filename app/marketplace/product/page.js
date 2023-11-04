"use client";

import { Tab, Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Product(params) {
  return (
    <>
      <section className="my-16 grid grid-cols-12 gap-10 ps-28 p-12 overflow-y-auto h-screen pb-52">
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
              Basic T-shirt
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
          <div className="pb-4">
            <button className="flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700">
              Add to Bag
            </button>
          </div>
          <div className="divide-y divide-gray-300">
            <div className="pb-4">
              <Disclosure>
                <Disclosure.Button className="flex items-center justify-between py-2 w-full">
                  <h1>Features</h1>
                  <PlusIcon className="w-6 h-6 stroke-1" />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-600">
                  <ul className="list-disc px-4">
                    <li>Multiple strap configurations</li>
                    <li>Spacious interior with top zip</li>
                    <li>Leather handle and tabs</li>
                    <li>Stainless strap loops</li>
                    <li>Double stitched construction</li>
                  </ul>
                </Disclosure.Panel>
              </Disclosure>
            </div>
            <div className="py-4">
              <Disclosure>
                <Disclosure.Button className="flex items-center justify-between py-2 w-full">
                  <h1>Shipping</h1>
                  <PlusIcon className="w-6 h-6 stroke-1" />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-600">
                  <ul className="list-disc px-4">
                    <li>Free shipping on orders over $300</li>
                    <li>International shipping available</li>
                    <li>Expedited shipping options</li>
                    <li>Signature required upon delivery</li>
                  </ul>
                </Disclosure.Panel>
              </Disclosure>
            </div>
            <div className="py-4">
              <Disclosure>
                <Disclosure.Button className="flex items-center justify-between py-2 w-full">
                  <h1>Returns</h1>
                  <PlusIcon className="w-6 h-6 stroke-1" />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-600">
                  <ul className="list-disc px-4">
                    <li>Easy return requests</li>
                    <li>Pre-paid shipping label included</li>
                    <li>10% restocking fee for returns</li>
                    <li>60 day return window</li>
                  </ul>
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
