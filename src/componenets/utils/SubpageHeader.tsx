
interface SubpageProps {
  name: string;
}

export function subpageHeader(subpageProps: SubpageProps) {
  return <h1 className="m-8 text-3xl font-bold text-center flex-auto  ">{subpageProps.name}</h1>
}

export default subpageHeader;