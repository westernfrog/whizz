import Image from "next/image";
import Link from "next/link";

export default function Card(params) {
  return (
    <>
      <Link
        href="/marketplace/product"
        className="group relative col-span-3 h-96 ring-1 ring-gray-300 rounded-lg"
      >
        <Image
          src="https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={5000}
          height={5000}
          alt=""
          className="w-full h-full object-cover object-center rounded-lg"
        />
        <div className="absolute w-full h-full inset-0 group-hover:bg-white/20  bg-gradient-to-b from-black/30 from-20% via-black/20 via-70% to-black/30 to-80% rounded-lg"></div>
        <div className="mt-3 tracking-tight space-y-1 text-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">Basic Tshirt</h1>
            <p className="text-gray-500">Red</p>
          </div>
          <p className="font-semibold">$20</p>
        </div>
      </Link>
    </>
  );
}
