export default function About() {
  return (
    <section className="flex flex-col items-center justify-center mt-48">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hi, I’m Joe Winter, a passionate Software Engineer transitioning from a
          career in Civil Engineering. With a Master&apos;s degree in Civil
          Engineering and professional experience designing and analyzing
          structures, I developed a strong foundation in problem-solving, critical
          thinking, and teamwork.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          In 2024, I decided to follow my growing interest in technology and
          completed the rigorous Makers Academy bootcamp, where I honed my skills
          in full-stack development. Over 12 weeks, I gained hands-on experience
          with tools and technologies like JavaScript, React, Python, Kotlin,
          PostgreSQL, and MongoDB, as well as key development practices such as
          Test-Driven Development (TDD), pair programming, and agile workflows.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          At Makers, I discovered a love for creating software that brings people
          together. From building multiplayer games using Socket.IO to designing
          responsive and dynamic frontends with React and TailwindCSS, I enjoyed
          collaborating in teams to tackle complex challenges.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          As a former structural engineer, I bring a unique perspective to
          software development. My experience creating precise designs and
          enhancing workflows with custom tools has translated seamlessly into
          writing clean, efficient, and maintainable code.
        </p>
      </div>
    </section>
  );
}