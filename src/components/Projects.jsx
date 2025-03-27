// src/components/Projects.jsx
export default function Projects() {
    const projects = [
        {
            name: 'Interactive Portfolio',
            description: 'A modern portfolio website built with Next.js and Three.js, showcasing my technical skills and professional journey.',
            technologies: ['Next.js', 'React', 'Three.js', 'Tailwind CSS'],
            githubLink: '#'
        },
        {
            name: 'Educational Programming Tutorials',
            description: 'A series of comprehensive C Programming tutorials designed to help students understand complex programming concepts.',
            technologies: ['C', 'Educational Content', 'Tutorial Development'],
            githubLink: '#'
        }
    ];

    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{project.name}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.githubLink}
                                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}