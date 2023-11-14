import "./page.css";
import Heading from "./components/Header/Heading";
import Tabs from "./components/Tabs/Tabs";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main className="p-12 max-w-screen-lg w-full">
        <Heading />
        <Tabs />
      </main>
    </div>
  );
}