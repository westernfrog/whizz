import {
  BellAlertIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
  HeartIcon,
  PlusIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Interaction", icon: HeartIcon, href: "/" },
  { name: "Notification", icon: BellAlertIcon, href: "/" },
];

export default function Header() {
  return (
    <>
      <header className="sticky top-0 h-[70px] w-screen backdrop-blur-3xl ps-20 pe-6 border-b border-gray-300 flex items-center">
        <nav className="grid grid-cols-12 items-center justify-between px-4 w-full">
          <div className="col-span-6 rounded-xl flex items-center justify-start gap-3 w-full">
            <h1 className="text-2xl font-semibold text-emerald-800 tracking-tighter">
              Whizzed
            </h1>
          </div>
          <div className="col-span-6 flex items-center justify-end space-x-4">
            <div className="flex items-center gap-4">
              <button className="group mx-auto transition duration-300 ease-in-out rounded-full ring-1 ring-gray-300 hover:ring-0 hover:bg-gray-100 hover:shadow-inner transition duration-300 ease-in-out text-emerald-800 px-3 py-2 font-semibold text-sm tracking-tight flex items-center justify-center mx-2 gap-2">
                <SquaresPlusIcon className="w-6 h-6 stroke-emerald-800" />
                Create Product
              </button>
              <div className="group relative w-10 h-10 mx-auto bg-red-50 hover:bg-gray-100 ring-0 ring-gray-300 hover:ring-neutral-400 hover:shadow-inner transition duration-300 ease-in-out rounded-full flex items-center justify-center">
                <HeartIcon className="w-5 h-5 stroke-2 stroke-red-500" />
              </div>
              <div className="group relative w-10 h-10 mx-auto bg-amber-50 hover:bg-gray-100 ring-0 ring-gray-300 hover:ring-neutral-400 hover:shadow-inner transition duration-300 ease-in-out rounded-full flex items-center justify-center">
                <BellAlertIcon className="w-5 h-5 stroke-2 stroke-amber-500" />
              </div>
            </div>
            <div className="group rounded-xl ring-1 ring-gray-300 hover:ring-neutral-400 transition duration-300 ease-in-out shadow-inner hover:bg-gray-100">
              <input
                type="search"
                className="bg-transparent px-3 w-96 h-9 text-sm rounded-full border-0 focus:ring-0 placeholder:text-emerald-800 placeholder:text-sm placeholder:font-medium placeholder:tracking-tight group-hover:placeholder:text-emerald-800"
                placeholder="Search anything.."
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
