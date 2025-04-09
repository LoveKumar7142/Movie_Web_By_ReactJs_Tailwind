
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About <span className="text-blue-600">CineCraft</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your gateway to everything cinema — from timeless classics to the latest blockbusters.
          </p>
        </div>

        {/* Project Description */}
        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-500">🎬 What is CineCraft?</h2>
          <p>
            CineCraft is a dynamic movie discovery platform developed by <strong>Love Kumar</strong>, a passionate MCA student and frontend developer. Built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>OMDb API</strong>, it helps users explore, search, and learn about movies in the most interactive way possible.
          </p>
          <p>
            The project focuses on clean UI, responsive layouts, and real-time search functionality — perfect for movie lovers.
          </p>
        </div>

        {/* Technologies */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">🛠️ Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>OMDb Movie API</li>
            <li>Vite (for lightning-fast dev environment)</li>
          </ul>
        </div>

        {/* Dev Info */}
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">👨‍💻 About the Developer</h2>
          <p>
            I’m <strong>Love Kumar</strong>, a developer who loves turning ideas into reality with code. I&apos;m currently pursuing MCA and building fun, powerful web apps like CineCraft.
          </p>
          <p className="mt-2">
            Let&apos;s connect on 👉{" "}
            <a
              href="https://www.linkedin.com/in/love-kumar-327299212/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>

          {/* Example for internal link (if needed in future) */}
          {/* <p className="mt-4">
            Want to reach out? Visit our{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact Page
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
