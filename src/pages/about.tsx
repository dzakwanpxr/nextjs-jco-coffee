import AboutPageHeader from "@/components/About/AboutPageHeader";
import AboutPageStory from "@/components/About/AboutPageStory";
import AboutPageMilestones from "@/components/About/AboutPageMilestones";

interface Milestone {
  id: number;
  year: string;
  description: string;
  image: string;
}

export default function About() {
  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2006",
      description:
        "J.CO's first store was opened in May 2006 in Indonesia as a result of many years of research & development and true labor of love over our products.",
      image: "/m1.jpg",
    },
    {
      id: 2,
      year: "2007",
      description: "First branch opened in Malaysia.",
      image: "/m2.jpg",
    },
    {
      id: 3,
      year: "2008",
      description: "First branch opened in Singapore.",
      image: "/m3.jpg",
    },
    {
      id: 4,
      year: "2012",
      description: "First branch opened in Philippines.",
      image: "/m4.jpg",
    },
    {
      id: 5,
      year: "2016",
      description:
        "First branch opened in Hong Kong. Our 10th year anniversary.",
      image: "/m5.jpg",
    },
    {
      id: 6,
      year: "2018",
      description: "First branch opened in Saudi Arabia.",
      image: "/m6.jpg",
    },
  ];

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
