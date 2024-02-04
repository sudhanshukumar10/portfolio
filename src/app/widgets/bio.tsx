export default function Bio(props: {  }) {
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
  