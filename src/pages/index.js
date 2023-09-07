import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <section class="text-black body-font">
        <div class="container mx-auto flex flex-col px-5 py-52 justify-center items-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            UNDER CONSTRUCTION
          </h1>
          <Image src="/bg.png" width={500} height={500} alt="" />
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <p class="mb-8 leading-relaxed">
              Our website is currently under construction, come back soon!
            </p>
            <div class="flex w-full justify-center items-end">
              <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left flex justify-end">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  class="w-4/5 bg-white rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Notify Me
              </button>
            </div>
            <p class="text-sm mt-2 text-gray-500 mb-8 w-full pr-10">
              Sign up now to get early notification of our launch date!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
