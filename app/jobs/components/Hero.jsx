import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
export default function Hero(params) {
  return (
    <>
      <section className="flex items-center  gap-8 text-lime-950 ps-24 pe-8 my-8">
        <div className="ml-40 me-auto mt-10">
          <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900    sm:leading-none">
            End Your Job Hunt
          </h2>
          <p className="text-base text-gray-700 md:text-xl w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id
            nemo maiores esse facilis quos.
          </p>
          <div className="flex gap-5">
            <div className="flex w-max h-12 my-10 items-center gap-2 text-sm font-semibold   transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner">
              500+ Jobs
            </div>
            <div className="flex w-max my-10 items-center gap-2 text-sm font-semibold  transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner">
              210+ Internships
            </div>
            <div className="flex w-max my-10 items-center gap-2 text-sm font-semibold  transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner">
              310+ Hired
            </div>
          </div>
        </div>
        <div className="ms-auto mr-60">
          <img
            src="./images/job-hunt.png"
            width={250}
            height={100}
            alt="jobs"
          />
        </div>
      </section>
      <div className="flex justify-center">
      <Link href="./jobs/opportunities" className="flex w-52 h-12 items-center justify-center my-2 text-sm font-semibold bg-lime-50  transition duration-300 ease-in-out px-4 py-2 rounded-xl ring-1 ring-lime-800 shadow-inner">View Oportunities</Link>
      </div>
    </>
  );
}
