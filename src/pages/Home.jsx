export default function Home({scrollToProjects, scrollToContact}) {

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-8 lg:px-24">
      <div className="text-center lg:text-left max-w-2xl">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Hi there, I&apos;m Joe Winter
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I&apos;m a software developer passionate about building engaging and
          functional applications. Explore my projects or feel free to reach
          out!
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button
            onClick={scrollToProjects}
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Projects
          </button>
          <button
            onClick={scrollToContact}
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="mb-8 lg:mb-0 lg:ml-12">
        <img
          src="/images/portrait.png"
          alt="Joe Winter Portrait"
          className="max-w-xs lg:max-w-md rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
