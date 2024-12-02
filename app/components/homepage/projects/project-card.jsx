import * as React from "react";
import Image from 'next/image';
function ProjectCard({ project }) {
  return (
    <div className="border-[#1b2c68a0] relative rounded-lg border bg-[#061630] w-full p-4">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#1ba67c] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>

      {/* Buttons Section */}
      <div className="px-4 py-3 flex justify-center space-x-4">
        {/* GitHub Button with local logo */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#2a3d4f] text-white rounded px-6 py-2 mt-2 hover:bg-[#061630] w-full max-w-[240px] justify-center"
        >
          <Image
            src="/github.png" // Reference to the image in the public folder
            alt="GitHub"
            width={24} // Specify the desired width in pixels
            height={24} // Specify the desired height in pixels
            className="mr-3" // Tailwind classes for margin and other styles
          />
          GitHub
        </a>

        {/* Click to see the project Button with logo */}
        <a
          href="https://https-github-com-marigone-musliu-quiz-game-app-photos.vercel.app/"
          className="inline-flex items-center bg-[#2a3d4f] text-white rounded px-6 py-2 mt-2 hover:bg-[#061630] w-full max-w-[290px] justify-center"
        >
          <Image
            src="/view.jpg" // Reference to your custom logo
            alt="Contact Us"
            width={24} // You can replace with the desired width in pixels
            height={24} // You can replace with the desired height in pixels
            className="mr-3" // Tailwind classes for margin and other styles
          />
          View the Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
