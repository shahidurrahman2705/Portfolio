// src/components/Header.jsx
import Image from 'next/image';

export default function Header() {
    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/shahidurrahman2705',
            logo: '/github-logo.svg',
            bgColor: 'bg-gray-800',
            hoverColor: 'hover:bg-gray-700'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/shahidur-rahman-dip',
            logo: '/linkedin-logo.svg',
            bgColor: 'bg-blue-600',
            hoverColor: 'hover:bg-blue-700'
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/shahidur.dip',
            logo: '/facebook-logo.svg',
            bgColor: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600'
        }
    ];

    return (
        <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">Shahidur Rahman Dip</h1>
                    <p className="text-xl text-indigo-100 max-w-2xl">
                        Passionate Educator and Aspiring Programmer | Bridging Education and Technology | Specializing in C Programming and Academic Mentorship
                    </p>
                    <div className="mt-6 flex space-x-4 justify-center md:justify-start">
                        <a
                            href="#about"
                            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition"
                        >
                            About Me
                        </a>
                        <a
                            href="#projects"
                            className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-700 transition"
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Connect with Me Section */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        ${link.bgColor} ${link.hoverColor}
                                        text-white p-3 rounded-full shadow-lg transition-all duration-300 
                                        transform hover:-translate-y-1 hover:scale-110 inline-flex items-center justify-center
                                    `}
                                >
                                    <Image
                                        src={link.logo}
                                        alt={`${link.name} Logo`}
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-64 h-64 bg-white/20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                        src="/profile.jpg"
                        alt="Shahidur Rahman Dip"
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </header>
    );
}