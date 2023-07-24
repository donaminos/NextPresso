import Image from "next/image";

export const HeroSection = () => (
  <header className="mb-8 border-b border-gray-200 pb-10 text-center">
    <div className="flex items-center">
      <a className="width-500 hover:opacity-75 m-auto" href="/">
        <Image
          src="/nextpresso-logo-w-name.png"
          width={550}
          height={150}
          alt="NextProsso"
          priority
        />
      </a>
    </div>

    <p className="text-center text-xl text-black">
      The Next blog for indie hackers
    </p>
  </header>
);
