export default function Bio(props: {}) {
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
          Experienced software developer with over 5 years focused on creating
          robust solutions. Specializing in Flutter for cross-platform mobile
          apps and NestJS for full-stack development. Proficient in Flutter,
          GetX, Firebase, and native iOS/Android. Passionate about technology,
          innovation, and delivering high-quality solutions.
        </p>
        <p className="emoji">🚀👨‍💻</p>
        <p>Let&apos;s code for a future where innovation knows no bounds!</p>
      </div>
    </section>
  );
}
