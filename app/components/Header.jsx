import {
  BellAlertIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
  HeartIcon,
  PlusIcon,
  Squares2X2Icon,
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
            <h1 className="text-2xl font-semibold text-lime-800 tracking-tighter">
              Whizzed
            </h1>
          </div>
          <div className="col-span-6 flex items-center justify-end space-x-4">
            <div className="flex items-center gap-4">
              <div className="group relative px-3 h-9 mx-auto bg-lime-50 hover:bg-lime-100 ring-1 ring-lime-200 hover:ring-lime-500 shadow-inner transition duration-300 ease-in-out rounded-xl flex items-center justify-center gap-2">
                <h1 className="text-sm font-medium text-lime-800 tracking-tight">
                  Create
                </h1>
                <PlusIcon className="w-5 h-5 stroke-lime-800" />
              </div>
              {navigation.map((item, index) => (
                <div
                  key={index}
                  className="group relative w-9 h-9 mx-auto bg-lime-50 hover:bg-lime-100 ring-1 ring-lime-200 hover:ring-lime-500 shadow-inner transition duration-300 ease-in-out rounded-xl flex items-center justify-center"
                >
                  <item.icon className="w-5 h-5 stroke-lime-800" />
                </div>
              ))}
            </div>
            <div className="group rounded-xl ring-1 ring-lime-200 hover:ring-lime-500 transition duration-300 ease-in-out shadow-inner bg-lime-50 hover:bg-lime-100">
              <input
                type="search"
                className="bg-transparent px-3 w-96 h-9 text-sm rounded-full border-0 focus:ring-0 placeholder:text-lime-800 placeholder:text-sm placeholder:font-medium placeholder:tracking-tight group-hover:placeholder:text-lime-800"
                placeholder="Search anything.."
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
