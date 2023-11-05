import Image from "next/image";
import Card from "./Card";

export default function Overview(params) {
  return (
    <>
      <section className="overflow-auto h-screen w-screen">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={5000}
            height={5000}
            alt="Banner"
            className="h-[30em] object-cover object-center"
          />
          <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-black/30 from-20% via-black/50 via-50% to-black/70 to-70%"></div>
          <div className="absolute bottom-4 left-0 right-0 mx-auto p-6 max-w-xl text-center text-gray-100">
            <h1 className="text-4xl font-bold mb-2 tracking-tight">
              Technical Specifications
            </h1>
            <p className="text-gray-300">
              Organize is a system to keep your desk tidy and photo-worthy all
              day long. Procrastinate your work while you meticulously arrange
              items into dedicated trays.
            </p>
          </div>
        </div>
        <div className="ps-[7em] pe-12 py-8 space-y-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Today&apos;s Deals
          </h1>
          <div className="grid grid-cols-12 gap-y-24 gap-x-8 pb-52">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}
