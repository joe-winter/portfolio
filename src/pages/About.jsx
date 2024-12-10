export default function About() {
  return (
    <section className="flex flex-col items-center justify-center mt-48 lg:mt-96">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hi, I’m Joe Winter, a passionate software engineer transitioning from
          a background in structural engineering. In 2023, I graduated from the
          University of Brighton with a master’s degree in civil engineering and
          worked as a structural engineer. However, I never felt satisfied with
          my work and knew this wasn’t the right path.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          In June 2024, I decided to make a change. I quit my job and started a
          bootcamp at Makers Academy. Right away, we began learning fundamental
          concepts like object-oriented design, test-driven development and pair programming.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          During the bootcamp, I participated in creating full-stack
          applications as part of a team. In one project, we worked with legacy
          code, understanding, refactoring, and building upon it. In another, we
          started a project entirely from scratch, where I to learned how to use
          web sockets so we could implement real time functionality.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          As a former structural engineer, I hope to bring my practical
          problem-solving skills and technical ability to software development,
          combining my analytical background with my passion for creating
          impactful, fun applications.
        </p>
      </div>
    </section>
  );
}
