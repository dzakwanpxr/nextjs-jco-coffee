import MilestoneItem from "./MilestoneItem";

interface Milestone {
  id: number;
  year: string;
  description: string;
  image: string;
}

interface AboutPageMilestonesProps {
  milestones: Milestone[];
}

export default function AboutPageMilestones({
  milestones,
}: AboutPageMilestonesProps) {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-center text-3xl mb-12 text-[#661d0a]">
        OUR MILESTONES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {milestones.map((milestone) => (
          <MilestoneItem
            key={milestone.id}
            year={milestone.year}
            image={milestone.image}
            description={milestone.description}
          />
        ))}
      </div>
    </section>
  );
}
