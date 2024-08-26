import Image from "next/image";

export default function AboutPageStory() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 px-4 md:px-40">
        <div className="max-w-xl">
          <p className="text-lg mb-4 leading-relaxed">
            Like so many others, it started with a dream -- a longing.
          </p>
        </div>
        <div className="max-w-xl">
          <p className="text-lg mb-4 leading-relaxed">
            Donuts weren&apos;t always this glamorous. Let&apos;s rewind to
            early 2000&apos;s, when the fluffy J.CO Donuts you love didn&apos;t
            exist yet. They were more dry, more cakey, and really much too
            sugary as they&apos;re doused in thick coats of sugar and artificial
            toppings. This is not what we&apos;re about.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
          <Image
            src="/donat.jpg"
            alt="JCO Donuts"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-800 text-white p-8 md:p-16 flex flex-col justify-center">
          <p className="text-lg mb-4 leading-relaxed">
            We&apos;re about creating mouthwatering combinations of all kinds of
            premium toppings to meld with our soft and fluffy donuts. We&apos;re
            about pairing these delectable donuts with their perfect
            complement--coffee.
          </p>
          <p className="text-lg leading-relaxed">
            We change and adapt to local tastes and flavors, and we love that
            each country brings new flavor discoveries and new cultures for us
            to explore. With over 300 stores worldwide, our passion for
            exploration and innovation will continue to fuel our dreams to share
            J.CO wherever you may be in the world, one Donut and Coffee at a
            time.
          </p>
        </div>
      </section>
    </>
  );
}
