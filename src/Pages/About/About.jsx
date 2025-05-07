import React from 'react';

const About = () => {
    return (
        <div className="flex items-center justify-center flex-col min-h-screen p-6 bg-slate-50">
            <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-indigo-600 text-center">
                INTRODUCTION
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-slate-700 mt-5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 text-justify max-w-6xl">
                I am a 20-year-old software engineering student at Gandaki College of Engineering and Science,
                affiliated with Pokhara University. Originally from Khudi, Lamjung, I grew up in Pokhara,
                where I completed my SEE and +2 in science at Gandaki Boarding School. From a young age,
                I have been captivated by technology and innovation. I thrive on solving complex problems
                through code and have a deep passion for software development. My expertise lies in front-end
                technologies like HTML and CSS, and I am currently mastering the MERN stack at Skill Shikshya
                to build full-fledged web applications.
                <br />
                <br />
                Academically, I have always been a dedicated and high-achieving student.
                I secured excellent grades in both SEE and +2, excelling in subjects like mathematics and computer science,
                which further fueled my passion for technology. My ability to grasp complex concepts and apply them
                practically has set me apart throughout my academic journey. At university, I actively participate in
                coding competitions, hackathons, and technical seminars to enhance my problem-solving and software
                development skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Sushantmg"
                    className="text-white inline-block bg-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg font-medium text-center"
                >
                    Github
                </a>
                <a
                    href="/contact"
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg font-medium text-center"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}

export default About;
