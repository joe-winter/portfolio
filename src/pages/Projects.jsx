import { useEffect, useState } from "react"

export default function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("/public/constants/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((e) => console.log("Error fecthing projects", e))
  }, [])

  console.log("Projects", projects)

  return (
    <div className="flex-auto justify-center p-96">
      <h4 className="text-black dark:text-white text-3xl font-bold p-10">
        Projects
      </h4>

      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          MakersUIGame
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          A multiplayer number guessing game with lobbies, round timers, and
          real-time updates, built using Node.js, React, and Socket.IO, and
          deployed via Render with CI/CD using GitHub Actions.
        </p>
      </div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Acebook
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          A Facebook clone made with Express, Node, React and MongoDB, utilising
          JWT tokens for authentication.
        </p>
      </div>
    </div>
  );
}
