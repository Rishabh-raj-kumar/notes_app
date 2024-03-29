import Header from "./components/header";
import React from "react";
import illustrator from './illustrator.png'
import {Link} from "react-router-dom"

export default function About() {
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={illustrator}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
              Hi I am Rishabh Kumar. 
            </h1>
            <p class="mb-8 leading-relaxed text-gray-300">
              I am a frontend web Developer and a student. I am of age 19 and love to find new oppurtunities.
              If you want to (hire me or work with me) you can contact for that. 
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-700 border-0 py-2 px-6 shadow-xl shadow-green-600 focus:outline-none hover:bg-black rounded text-lg">
                <Link to="/contact">CONTACT</Link>
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link to="/">HOME</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
