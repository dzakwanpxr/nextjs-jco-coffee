import Image from "next/image";

interface MilestoneItemProps {
  year: string;
  image: string;
  description: string;
}

export default function MilestoneItem({
  year,
  image,
  description,
}: MilestoneItemProps) {
  return (
    <div className="text-center">
      <span className="text-5xl font-bold text-gray-200 block mb-2">
        {year}
      </span>
      <div className="relative w-full h-64 mb-4">
        <Image
          src={image}
          alt={`Milestone ${year}`}
          fill
          sizes="100%"
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
