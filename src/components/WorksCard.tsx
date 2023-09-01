interface WorksCardProps {
  title: string;
  imageSrc: string;
}

export default function WorksCard({ title, imageSrc }: WorksCardProps) {
  return (
    <div className="relative border w-max">
      <img src={imageSrc} />
      <div className="absolute bottom-0 pl-8 py-8 w-full border">
        <span className="text-4xl text-white uppercase">{title}</span>
      </div>
    </div>
  );
}
