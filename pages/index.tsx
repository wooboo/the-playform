import React from "react";
import Link from "next/link";
import Image from "next/image";

// components

import Navbar from "../components/Navbars/AuthNavbar";
import Footer from "../components/Footers/Footer";
import Hero from "../components/Landing/Hero";
import LandingCard from "../components/Cards/LandingCard";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
                <div className="pr-12">
                  <h1 className="text-5xl font-semibold text-white">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-slate-200">
                    This is a simple example of a Landing Page you can build
                    using Notus NextJS. It features multiple CSS components
                    based on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-auto w-full h-16 overflow-hidden pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-slate-200"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 -mt-24 bg-slate-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
                <LandingCard
                  title="Awarded Agency"
                  icon={<i className="fas fa-award"></i>}
                  iconClassName="text-white bg-red-400"
                >
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </LandingCard>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <LandingCard
                  title="Free Revisions"
                  icon={<i className="fas fa-retweet"></i>}
                  iconClassName="text-white bg-sky-400"
                >
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                </LandingCard>
              </div>

              <div className="w-full px-4 pt-6 text-center md:w-4/12">
                <LandingCard
                  title="Verified Company"
                  icon={<i className="fas fa-fingerprint"></i>}
                  iconClassName="text-white bg-emerald-400"
                >
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </LandingCard>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-slate-500">
                  <i className="text-xl fas fa-user-friends"></i>
                </div>
                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600">
                  Don&apos;t let your uses guess by attaching tooltips and
                  popoves to any element. Just make sure you enable them first
                  via JavaScript.
                </p>
                <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-slate-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you&apos;re good to go. Just make sure you enable them first
                  via JavaScript.
                </p>
                <Link href="/">
                  <a href="#pablo" className="mt-8 font-bold text-slate-700">
                    Check Notus NextJS!
                  </a>
                </Link>
              </div>

              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-slate-700">
                  <Image
                    width={1051}
                    height={701}
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 block w-full h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-current text-slate-700"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="mt-2 font-light text-white text-md">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <Image
                  width="634"
                  height="951"
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="md:pr-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center rounded-full shadow-lg text-slate-500 bg-slate-200">
                    <i className="text-xl fas fa-rocket"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you&apos;re good to go.
                  </p>
                  <ul className="mt-6 list-none">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-slate-500 bg-slate-100">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-slate-500 bg-slate-100">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-slate-500 bg-slate-100">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-24 text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="m-4 text-lg leading-relaxed text-slate-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <Hero
                image="/img/team-1-800x800.jpg"
                name="Ryan Tompson"
                role="Web Developer"
              />
              <Hero
                image="/img/team-2-800x800.jpg"
                name="Romina Hadid"
                role="Marketing Specialist"
              />
              <Hero
                image="/img/team-3-800x800.jpg"
                name="Alexa Smith"
                role="UI/UX Designer"
              />
              <Hero
                image="/img/team-4-470x470.png"
                name="Jenna Kardi"
                role="Founder and CEO"
              />
            </div>
          </div>
        </section>

        <section className="relative block pb-20 bg-slate-800">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-slate-800"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 mx-auto lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="mt-4 mb-4 text-lg leading-relaxed text-slate-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-12">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-slate-800">
                  <i className="text-xl fas fa-medal"></i>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-slate-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-slate-800">
                  <i className="text-xl fas fa-poll"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-slate-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-slate-800">
                  <i className="text-xl fas fa-lightbulb"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-slate-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-slate-800">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-slate-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="mt-1 mb-4 leading-relaxed text-slate-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mt-8 mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-slate-600"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-slate-600"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-slate-600"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="w-full px-3 py-3 text-sm bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-800 active:bg-slate-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
