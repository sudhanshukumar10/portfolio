"use client";
import "./landing.css";
import { useState } from "react";
import { MailOutline, Padding, PhoneAndroid } from "@mui/icons-material";
import SocialMedia from "./widgets/social_media_icons";
import Bio from "./widgets/bio";
import Experience from "./widgets/experience";
import LinkArrow from "./widgets/svgs";
import Project from "./widgets/project";
import DescriptionPoint from "./widgets/description_point";
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';

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

             <Image src = "/sudhanshu.jpeg" alt="Shriyansh Raj" width={200} height={200} style={{borderRadius : "50%", marginBottom: 16,}}/>

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Sudhanshu Kumar</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Backend Engineer at Sunstone
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
              I build fast, scalable, and reliable backend systems that power seamless digital experiences.
              </p>

              <p className="mt-4 max-w-xs leading-normal flex items-center gap-22">
                <MailOutline sx={{ height: 20, marginRight: 1 }} />
                <a
                  href="sudhanshukumarsde@gmail.com"
                  className="hover:underline"
                >
                  sudhanshukumarsde@gmail.com
                </a>
              </p>

              <p className="mt-4 max-w-xs leading-normal flex items-center gap-22">
                <PhoneAndroid sx={{ height: 20, marginRight: 1 }} />
                <a href="tel:+919798804445" className="hover:underline">
                  +919798804445
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
            <div className="github-commit">

            <GitHubCalendar username="sudhanshukumar10" />
            </div>

            <Bio />
            <Experiences />
            <Projects />
          </main>
        </div>
      </div>
    </body>
  );
}

function Experiences() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <ol className="group/list">
        <li className="mb-12">
          <Experience
            role="Backend Engineer"
            companyName={{
              name: "Sunstone",
              url: "https://hub.sunstone.in/",
            }}
            subtitle="Software Engineer"
            description=<>
              <DescriptionPoint
                title="FRT(FFF: Fastest Finger First)"
                description={
                  <>
                    I developed a calling system named FRT that helps in making calls to leads more efficiently. The system decides which leads to call based on different parameters like preferred language, lead score, and other filters. This ensures that the right leads are contacted at the right time, increasing the chances of a successful conversation.
FRT helps automate and organize the calling process, making it faster and more targeted. It also allows flexibility to handle different types of leads based on their behavior and preferences.
                  </>
                }
              />

              <DescriptionPoint
              title="Dashboards"
              description={
                <>
                I've also designed and developed multiple dashboards to provide clear, actionable insights and improve business visibility.
These dashboards help teams make data-driven decisions by turning complex data into simple, visual summaries. 
                </>
              }
              />

              <DescriptionPoint
              title="Leaderboard"
              description={
                <>
                Developed a dynamic leaderboard system to track and reward student engagement.
The leaderboard ranks students based on the coins they earn through various activities such as marking attendance, completing assignments, paying fees, and more. Each activity awards different types of coins, encouraging consistent participation and creating a healthy sense of competition.
</>
              }/>
              <DescriptionPoint
                title="Firebase Services"
                description={
                  <>
                    Implemented various Firebase services, including Firebase
                    Cloud Messaging (FCM), Remote Config, Analytics, and Dynamic
                    Links.
                  </>
                }
              />

              <DescriptionPoint
                title="Analytics & Tracking"
                description={
                  <>
                    Analytics & Tracking: Gained experience with multiple
                    platforms such as Mixpanel, MoEngage, and Firebase.
                    Developed an algorithm for accurately calculating time spent
                    on pages.
                  </>
                }
              />

              <DescriptionPoint
                title="CI/CD"
                description={
                  <>
                    CI/CD: Set up an Azure pipeline integrated with GitHub from
                    scratch, enabling simultaneous deployment of builds across
                    platforms.
                  </>
                }
              />

              <DescriptionPoint
                description={
                  <>
                    Addressed numerous critical bugs and made contributions to
                    open-source libraries.
                  </>
                }
              />
            </>
            technologies={[
              { name: "Node.js" },
              { name: "javascript" },
              { name: "TypeScript" },
              { name: "SQL" },
              { name: "Redash" },
              { name: "Kibana" },
              { name: "Sentry" },
              { name: "Firebase" },
              { name: "CI/CD" },
              { name: "Mixpanel MoEngage" },
              { name: "Sequelize" },
              { name: "Github" },
              {name: "git"}
            ]}
            timePeriod="2023 - Present"
            isPresent={true}
          />
        </li>
      </ol>

      <div className="mt-12">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full <span className="inline-block">Résumé</span>
            <LinkArrow />
          </span>
        </a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
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
          { label: "Node.js" },
          { label: "Admob" },
          { label: "Scraper" },
        ]}
      />
    </section>
  );
}
