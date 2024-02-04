export default function DescriptionPoint(props: {
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