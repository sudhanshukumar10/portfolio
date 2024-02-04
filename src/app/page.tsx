"use client";
import Image from "next/image";
import "./landing.css";
import { title } from "process";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { url } from "inspector";
import { MailOutline, Phone, PhoneAndroid, PhoneOutlined } from "@mui/icons-material";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };



  return (
    <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div
        className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
        onMouseMove={handleMouseMove}
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:fixed"
          style={{
            background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div>

        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Shriyansh Raj</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Flutter Engineer at Sunstone
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>

              

              <p className="mt-4 max-w-xs leading-normal flex items-center gap-22">
                <MailOutline sx={{height:20, marginRight: 1}} />
                <a href="mailto:iShreeyansh@gmail.com" className="hover:underline">
                   iShreeyansh@gmail.com
                   </a>
              </p>

              <p className="mt-4 max-w-xs leading-normal flex items-center gap-22">
                <PhoneAndroid sx={{height:20, marginRight: 1}} />
                <a href="tel:+919685962799" className="hover:underline">
                    +919685962799
                </a>
              </p>

              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3 active"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <SocialMedia />
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Bio />

            <section
          
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            ></section>

            <ol className="group/list">
              <li className="mb-12">
                <Experience
                  role="Flutter Engineer"
                  companyName={{
                    name: "Sunstone",
                    url: "https://hub.sunstone.in/",
                  }}
                  subtitle="Software Engineer"
                  description=<>
                    <DescriptionPoint
                      title="LMS & Content Library"
                      description={
                        <>
                          Developed a Learning Management System (LMS) and a
                          comprehensive content library for both mobile apps and
                          web platforms, featuring video progress tracking
                          capabilities.
                        </>
                      }
                    />

                    <DescriptionPoint
                      title="Bluetooth Low Enegery(BLE)"
                      description={
                        <>
                          Engineered an attendance automation system utilizing
                          Bluetooth Low Energy (BLE), enabling users to mark
                          attendance without the need for additional hardware.
                        </>
                      }
                    />

                    <DescriptionPoint
                      title="Firebase Services"
                      description={
                        <>
                          Implemented various Firebase services, including
                          Firebase Cloud Messaging (FCM), Remote Config,
                          Analytics, and Dynamic Links.
                        </>
                      }
                    />

                    <DescriptionPoint
                      title="Webview"
                      description={
                        <>
                          Extensively worked with webviews (Native and Flutter),
                          developing a media player, employing it as a widget,
                          and facilitating communication.
                        </>
                      }
                    />

                    <DescriptionPoint
                      title="Analytics & Tracking"
                      description={
                        <>
                          Analytics & Tracking: Gained experience with multiple
                          platforms such as Mixpanel, MoEngage, and Firebase.
                          Developed an algorithm for accurately calculating time
                          spent on pages.
                        </>
                      }
                    />

                    <DescriptionPoint
                      title="Deep Links & Dynamic link"
                      description={
                        <>
                          Established an infrastructure to manage deep links
                          using pattern matching and implemented Branch and
                          Firebase Dynamic Links. also implemented Deffered deep
                          linking for tracking ads app installs.
                        </>
                      }
                    />

                    <DescriptionPoint
                      title="CI/CD"
                      description={
                        <>
                          CI/CD: Set up an Azure pipeline integrated with GitHub
                          from scratch, enabling simultaneous deployment of
                          builds across iOS, Android, and web platforms.
                        </>
                      }
                    />

                    <DescriptionPoint
                      title="Native Development"
                      description={
                        <>
                          Contributed to the native development aspects of
                          Android, iOS, and web platforms.
                        </>
                      }
                    />

                    <DescriptionPoint
                      description={
                        <>
                          Addressed numerous critical bugs and made
                          contributions to open-source libraries.
                        </>
                      }
                    />
                  </>
                  technologies={[
                    { name: "Flutter" },
                    { name: "iOS" },
                    { name: "Android" },
                    { name: "Flutter Web" },
                    { name: "Dart" },
                    { name: "BLE" },
                    { name: "Getx" },
                    { name: "Firebase" },
                    { name: "CI/CD" },
                    { name: "Mixpanel MoEngage" },
                    { name: "LMS" },
                    { name: "Github" },
                  ]}
                  timePeriod="2022 - Present"
                  isPresent={true}
                />
              </li>

              <li className="mb-12">
                <Experience
                  role="SDE"
                  companyName={{
                    name: "Reliance Jio",
                    url: "https://jiomeetpro.jio.com/",
                  }}
                  subtitle="Flutter developer & Automation Engineer"
                  description= <>
                  <DescriptionPoint title="Automation Testing" description="Developed and maintained automation test scripts for the JioMeet Pro app using Cucumber and Java, ensuring the app&apos;s reliability and quality." />
                  <DescriptionPoint title="Jio News App" description="
                  Contributed to the development of the Jio News app, a digital newsstand that provides access to a wide range of newspapers and magazines. " />

                  </>
                  technologies={[
                    { name: "Flutter" },
                    { name: "Clean architecture" },
                    { name: "REST sevices" },
                    { name: "Cucumber" },
                    { name: "BDD" },
                    { name: "Windows Automation" },
                    { name: "Selenium" },
                    { name: "Java" },
                    { name: "Azure devops" },
                  ]}
                  timePeriod="Aug — May 2022 "
                />
              </li>





              <li className="mb-12">
                <Experience
                  role="Flutter Devevloper"
                  companyName={{
                    name: "Jsimple Technologies",
                    url: "https://www.jsimple.com/",
                  }}
                  subtitle="Flutter Architect"
                  description= <>
                  <DescriptionPoint description="I worked as the sole developer on the following projects:" />
                  <DescriptionPoint title="AI/ML" description="Implemented a facial recognition service to recognize user faces for marking attendance." />
                  
                  <DescriptionPoint title="Firebase" description="Integrated and implemented various Firebase services - FCM, Analytics, Deep linking" />
                 
                  <DescriptionPoint title="Geo-Fencing" description="Developed a system for marking attendance when a user enters a specific area of the office." />
                 
                  <DescriptionPoint title="Google Maps" description="Utilized Google Maps to display employees&apos; locations on the map along with additional information" />
                  
                  </>
                  technologies={[
                    { name: "Flutter" },
                    { name: "Clean architecture" },
                    { name: "Bloc" },
                    { name: "Firebase" },
                    { name: "HRMS" },
                    { name: "Geo Fencing" },
                    { name: "Google Maps" },
                    { name: "Machine Learning" },
                  ]}
                  timePeriod="Feb — Sep 2021 "
                />
              </li>


            </ol>

            <section />

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>

              <Project
                title="Formula Lockscreen"
                description="This unique lock screen app, born from my passion for education and innovation, boasts over 1000 downloads with an impressive 4.7-star rating. Every time users press the power button, they are greeted with randomly displayed math and physics formulas, turning the mundane task of unlocking a phone into a moment of learning. As the sole creator, I designed and implemented every aspect of the app, showcasing my expertise in app development. "
                image="/formula.png"
                url="https://play.google.com/store/apps/details?id=com.shriyansh.formula_lockscreen"
                technologies={[
                  { label: "Android" },
                  { label: "SqLite" },
                  { label: "Java" },
                  { label: "XML" },
                  { label: "Ed-Tech" },
                ]}
              />

              <Project
                title="Sunstone App"
                description="Extensively worked on Features like LMS, Live Classes, and many more. Created LMS from scratch, which is used by 10000+ students. "
                image="/sunstone.png"
                url="https://play.google.com/store/apps/details?id=com.sunstone.hub&hl=en_IN&gl=US"
                technologies={[
                  { label: "Flutter" },
                  { label: "Getx" },
                  { label: "Firebase" },
                  { label: "Mixpanel" },
                  { label: "Hive" },
                  { label: "Dart" },
                  { label: "Ed-Tech" },
                ]}
              />

<Project
                title="MP Transport"
                description="A simple app to get the details of the vehicle owner by entering the vehicle number. It scrapes the data from the MP transport website using headless webview and displays it in a user-friendly manner. It has 50,000+ downloads and a 4.5-star rating."
                image="/mptransport.png"
                url="https://play.google.com/store/apps/details?id=com.techhole.mp_transport&hl=en_IN&gl=US"
                technologies={[
                  { label: "Flutter" },
                  { label: "Admob" },
                  { label: "Scraper" },
                  
                ]}
              />
            </section>
          </main>
        </div>
      </div>
    </body>
  );
}

 function DescriptionPoint(props: {
  title?: string;
  description: any;
}) {
  return (
    <div className="mb-0 flex">
      <p className="mt-2 text-sm leading-normal">
        
       {props.title &&  <span className="mt-2 text-sm leading-normal text-slate-200">
      {props.title + ": "}
        </span>}
        
          {props.description}</p>
    </div>
  );

}


 function Experience(props: {
  /// starting date
  timePeriod: string;
  role: string;
  companyName: { name: string; url: string };
  subtitle: string;
  description: any;
  technologies: { name: string }[];
  isPresent?: boolean;
}) {
  function getYear(date: Date): string {
    return date.toISOString().split("-")[0];
  }

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {props.timePeriod}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href={props.companyName.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {props.role} ·{" "}
                <span className="inline-block">
                  {props.companyName.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
          <div>
            <div className="text-slate-500" aria-hidden="true">
              {props.subtitle}
            </div>
          </div>
        </h3>
        {props.description}
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {props.technologies.map((technology, index) => (
            <li key={index} className="mr-3 mb-2">
              <Chip label={technology.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

 function Project(props: {
  title: string;
  description: string;
  technologies: { label: string }[];
  url: string;
  image: string;
}){
return (
  <>
    <div>
      <ul className="group/list">
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href={props.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {props.title}
                    <span className="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">{props.description}</p>

              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              
              {
             props.technologies &&
              props.technologies!.map((technology, index) => (
                <li key = {index} className="mr-3 mb-2">
                  <Chip label={technology.label} />
                </li>
              ))}
            </ul>
            </div>{" "}
           
            <Image
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src={props.image}
              width={200}
              height={48}
              alt={""}
            ></Image>

            
          </div>
        </li>
      </ul>
    </div>
  </>
);

}

 function Chip(props: { label: string }) {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {props.label}
    </div>
  );
}

 function SocialMedia() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://github.com/Shriyanshx"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://www.linkedin.com/in/ishriyansh/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>
      </li>
    
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://instagram.com/iShriyansh"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram (opens in a new tab)"
          title="Instagram"
        >
          <span className="sr-only">Instagram</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
          </svg>
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://twitter.com/iShriyansh"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter (opens in a new tab)"
          title="Twitter"
        >
          <span className="sr-only">Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1227"
            fill="none"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  );
}

function Bio(props: {  }) {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p>
          <strong>Passionate and Versatile Software Developer</strong>
        </p>
        <p>
          With over 5 years of hands-on experience in the dynamic world of
          software development, I bring a wealth of expertise in creating robust
          and innovative solutions. My journey began in the fast-paced startup
          environment, where I honed my skills in Flutter, becoming adept at
          crafting cross-platform mobile applications with a focus on seamless
          user experiences.
        </p>
        <br />
        <p>
          During my tenure at Reliance Jio, I delved into the realm of
          automation testing using Cucumber, contributing to the enhancement of
          software quality and reliability. This experience provided me with a
          unique perspective on the importance of testing in the software
          development lifecycle.
        </p>
        <p>
          My technical repertoire includes proficiency in Flutter, GetX,
          Firebase, and native iOS/Android development. I thrive on challenges
          and have a proven track record of delivering high-quality code within
          demanding timelines.
        </p>
        <p>
          Beyond the lines of code, my passion for technology fuels a continuous
          drive for learning and staying abreast of the latest industry trends.
          I am committed to pushing boundaries and creating software that not
          only meets but exceeds expectations.
        </p>
        <p className="emoji">🚀👨‍💻</p>
        <p>Let&apos;s code for a future where innovation knows no bounds!</p>
      </div>
    </section>
  );
}
