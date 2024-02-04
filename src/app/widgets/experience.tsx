import Chip from "./chip";
import LinkArrow from "./svgs";

export default function Experience(props: {
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
                    <LinkArrow/>
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