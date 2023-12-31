import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobs",
  description: "Generated by create next app",
};

export default function TravelLayout({ children }) {
  return (
    <section className="overflow-x-hidden">
        <Header />
      {children}
    </section>
  );
}