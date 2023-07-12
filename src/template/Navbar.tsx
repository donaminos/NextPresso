import { GithubIcon, NEXTPRESSO_GITHUB_REPO } from "./GithubIcon";
export const Navbar = () => (
  <div className="flex flex-col text-gray-900 font-mono font-roboto">
    <nav
      className="flex justify-around py-3 bg-white/80
          backdrop-blur-md shadow-md w-full
          fixed top-0 left-0 right-0"
    >
      <a className="flex items-center hover:opacity-75" href="/">
        <span className="text-base font-semibold">NextPresso.js</span>
      </a>

      <div className="flex gap-3 font-medium">
        <a
          className="text-sm contrast-more:text-gray-700 whitespace-nowrap p-2"
          href="/docs"
        >
          <span className="inset-x-0 text-center">Docs</span>
        </a>
        <a
          className="text-sm contrast-more:text-gray-700 whitespace-nowrap p-2 text-gray-600 hover:text-gray-80"
          href="/about"
        >
          <span className="inset-x-0 text-center">About</span>
        </a>
        <a
          href={NEXTPRESSO_GITHUB_REPO}
          target="_blank"
          className="p-2 text-current hover:text-gray-80"
        >
          <GithubIcon />
        </a>
      </div>
    </nav>
  </div>
);
