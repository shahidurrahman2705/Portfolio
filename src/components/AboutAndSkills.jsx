// src/components/AboutAndSkills.jsx
export default function AboutAndSkills() {
    const skills = [
        { name: 'C Programming', level: 'Advanced' },
        { name: 'Mathematics', level: 'Expert' },
        { name: 'Teaching', level: 'Professional' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Next.js', level: 'Beginner' }
    ];

    return (
        <section id="about" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        I'm a dedicated educator with a passion for empowering students through technology.
                        My journey spans teaching C Programming and mathematics to students from Class 5 to A-Levels.
                        I believe in creating dynamic learning environments that inspire curiosity and foster academic excellence.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        As an aspiring programmer, I'm continuously expanding my technical skills,
                        bridging the gap between education and cutting-edge technology.
                    </p>
                </div>
                <div>
                    <h3 className="text-3xl font-semibold mb-6 text-gray-800">Skills</h3>
                    <div className="space-y-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-4">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-700">{skill.name}</span>
                                    <span className="text-gray-500">{skill.level}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-indigo-600 h-2.5 rounded-full"
                                        style={{ width: `${['Beginner', 'Intermediate', 'Advanced', 'Expert'].indexOf(skill.level) * 25 + 25}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}