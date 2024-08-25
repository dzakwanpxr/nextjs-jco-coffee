import Image from "next/image";

export default function HomePageStory() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 md:px-20">
        <div className="max-w-xl">
          <p className="text-lg mb-4">
            When we developed our donuts, we didn&apos;t stop there.
          </p>
        </div>
        <div className="max-w-xl">
          <p className="text-lg">
            We searched high and low for coffee that would pair perfectly with
            our donuts and finally we settled on fine selections of Arabica
            beans. Similar to wine, coffee beans are influenced by soil,
            altitude, and other climate factors that naturally make some coffee
            trees better than others.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
          <Image
            src="/arabica.jpeg"
            alt="JCO Donuts"
            fill
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-800 text-white p-8 md:p-16 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">WHY ARABICA?</h3>
          <p className="mb-4">
            Compared to Robusta coffee beans which often have a burnt-rubber
            taste and quality, Arabica beans are delicate, well-rounded,
            aromatic, and can be grown and processed in different ways to
            instill a variety of flavors. The choice for us was easy. We only
            use 100% of the finest quality Arabica beans at J.CO.
          </p>
          <p>
            Whatever your mood is, we&apos;ve roasted them to a perfect medium
            to extract a well-balanced flavor profile from each bean.
          </p>
        </div>
      </section>
    </>
  );
}
