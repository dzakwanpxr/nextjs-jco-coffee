import AboutPageHeader from "@/components/About/AboutPageHeader";
import AboutPageStory from "@/components/About/AboutPageStory";
import AboutPageMilestones from "@/components/About/AboutPageMilestones";
import { milestones } from "@/shared/data/milestones";

export default function About() {
  return (
    <main className="about-page">
      <AboutPageHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutPageStory />
        <AboutPageMilestones milestones={milestones} />
      </div>
    </main>
  );
}
