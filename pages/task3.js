import Image from 'next/image';
import { useRouter } from "next/router";



export default function Task2() {
  const router = useRouter();
  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="bg-orange-200 h-[600px] w-[900px] p-4 rounded-lg border border-gray-400">
        <div className='flex justify-between items-center pt-5 pl-5'>
          <button
            onClick={() => router.back()}
            className="bg-orange-300 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-500 transition duration-300"
          >
            Back
          </button>
          <div>
            <p className="text-3xl text-black font-bold text-center mb-2">Our Blog</p>
            <div className="h-1 w-28 bg-black mx-auto mb-8"></div>
          </div>
          
          <div className='pl-20'></div>
        </div>


        <div className="flex justify-center space-x-6">
          <div className="bg-transparent h-80 w-80 shadow-md flex flex-col items-center p-4">
            <div className="relative h-48 w-60 mb-4">
              <Image
                src="/acat.jpeg"
                alt="Post 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-center font-semibold text-pink-400">Post 1 Headline</p>
            <p className="text-center text-sm text-gray-600">Sample text for post 1. Lorem ipsum dolor sit amet.</p>
            <button className="bg-red-400 text-white py-1 px-4 text-xs hover:bg-red-700 mt-4">Read More</button>
          </div>

          <div className="bg-white h-[450px] w-80 shadow-md flex flex-col items-center p-4">
            <div className="relative h-48 w-60 mb-4">
              <Image
                src="/catt.JPG"
                alt="Post 2"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <p className="text-center font-semibold text-orange-300">Post 2 Headline</p>
            <p className="text-center text-sm text-gray-600">Sample text for post 2. Lorem ipsum dolor sit amet.</p>
            <button className="bg-red-500 text-white py-1 px-4 rounded-full text-xs hover:bg-red-600 mt-4">Read More</button>
          </div>

          <div className="bg-transparent h-80 w-80 shadow-md flex flex-col items-center p-4">
            <div className="relative h-48 w-60 mb-4">
              <Image
                src="/bcat.jpeg"
                alt="Post 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-center font-semibold text-purple-400">Post 3 Headline</p>
            <p className="text-center text-sm text-gray-600">Sample text for post 3. Lorem ipsum dolor sit amet.</p>
            <button className="bg-red-400 text-white py-1 px-4 text-xs hover:bg-red-700 mt-4">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
