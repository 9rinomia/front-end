import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col font-sans text-black shadow-xl">
      <div className="h-[10%] bg-white w-full flex items-center p-4 shadow-xl">
        <div className="flex">
          <img
            src="/nestlogo.jpeg"
            alt="Centered Image"
            class="mb-4 mx-auto w-20 p-4"
          />
          <p className="text-xl font-bold p-10">index</p>
        </div>

        <input
          type="text"
          className="border border-gray-300 rounded-md ml-auto p-2 text-sm w-40"
          placeholder="Search..."
        />
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm shadow-lg">
          Logout
        </button>
      </div>

      <div className="h-[90%] w-full flex">
        <div className="w-[15%] bg-white h-full p-4 shadow-2xl">
          <button
            className="font-medium text-left mb-3 w-full"
            onClick={() => router.back()}
          >
            Back
          </button>

          <a
            href="http://localhost:3000/task2"
            className="font-medium text-left mb-3 w-full block"
          >
            Task2
          </a>
          <a
            href="http://localhost:3000/task3"
            className="font-medium text-left mb-3 w-full block"
          >
            Task3
          </a>
          <a
            href="http://localhost:3000/week3"
            className="font-medium text-left w-full block"
          >
            Week3
          </a>
        </div>

        <div className="w-[85%] h-full bg-gray-50 p-6">
          <p className="text-2xl font-semibold mb-6">Minori 11v</p>

          <a
            href="http://localhost:3000/task1"
            className="font-medium text-left mb-3 w-full block bg-white p-4 shadow-xl rounded-md"
          >
            Task1
          </a>

          <a
            href="http://localhost:3000/task2"
            className="font-medium text-left mb-3 w-full block bg-white p-4 shadow-xl rounded-md"
          >
            Task2
          </a>
          <a
            href="http://localhost:3000/week3"
            className="font-medium text-left mb-3 w-full block bg-white p-4 shadow-xl rounded-md"
          >
            Task3
          </a>
          <a
            href="http://localhost:3000/helpp"
            className="font-medium text-left w-full block bg-white p-4 shadow-xl rounded-md"
          >
            Week4
          </a>
        </div>
      </div>
    </div>
  );
}
