import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4 text-center">
        Hi there, I&apos;m Joe Winter
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-xl">
        I&apos;m a software developer passionate about building engaging and
        functional applications. Explore my projects or feel free to reach out!
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/projects")}
          className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Projects
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Contact Me
        </button>
      </div>
      <img src="/public/images/portrait.png" alt="portrait" className="max-w-72 rounded-2xl" />
    </div>
  );
}
