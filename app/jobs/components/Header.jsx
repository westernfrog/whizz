
import { PlusIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Header(params) {

    const navigation = [
        { name: "Opportunities", href: "jobs/opportunities" },
        { name: "Scholarships", href: "/" },
      ];
    return (<>
         <header className="sticky top-0 h-[70px] w-screen backdrop-blur-3xl ps-20 pe-3 border-b border-gray-300 flex items-center">
        <nav className="grid grid-cols-12 items-center justify-between px-4 w-full">
          <div className="col-span-4 rounded-xl flex items-center justify-start gap-3 w-full">
            <h1 className="text-2xl font-semibold text-lime-950 tracking-tighter">
              Get Placed!!
            </h1>
          </div>
          <div className="col-span-4 flex items-center justify-center gap-20">
            {navigation.map((item, index) => (
              <div key={index} className="">
                <Link href={item.href} className="font-semibold tracking-tight">{item.name}</Link>
              </div>
            ))}
          </div>
          <div className="col-span-4 ms-auto">
            <div className="flex items-center justify-end gap-4">
              <button className="flex items-center gap-2 text-sm font-semibold bg-lime-50 hover:bg-lime-100 transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner">
                <span className="text-sm font-semibold">Post a Job</span>
                <PlusIcon className="w-5 h-5  stroke-lime-800" />
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold bg-lime-50 hover:bg-lime-100 transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner">
                <span className="text-sm font-semibold">Sign In</span>
                <UserCircleIcon className="w-5 h-5 stroke-lime-800" />
              </button>
            </div>
                
          </div>
        </nav>
      </header>
    </>)
};
