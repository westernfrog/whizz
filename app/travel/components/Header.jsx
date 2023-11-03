import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Book Rides", href: "/" },
  { name: "Book Tours", href: "/" },
];

export default function Header() {
  return (
    <>
      <header className="sticky top-0 h-[70px] w-screen backdrop-blur-3xl ps-20 pe-6 border-b border-gray-300 flex items-center">
        <nav className="grid grid-cols-12 items-center justify-between px-4 w-full">
          <div className="col-span-4 rounded-xl flex items-center justify-start gap-3 w-full">
            <h1 className="text-2xl font-semibold text-lime-800 tracking-tighter">
              Whizzed
            </h1>
          </div>
          <div className="col-span-4 flex items-center justify-center gap-16">
            {navigation.map((item, index) => (
              <div key={index} className="">
                <h1 className="text-lime-800 font-semibold tracking-tight">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
          <div className="col-span-4 ms-auto">
            <button className="flex items-center gap-2 text-lime-800 text-sm font-semibold bg-lime-50 hover:bg-lime-100 transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner">
              <CursorArrowRaysIcon className="w-6 h-6" /> Create Ride/Tour
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
