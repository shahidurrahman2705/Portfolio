// src/components/SocialLinks.jsx
import Image from 'next/image';

export default function SocialLinks() {
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
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-800">Connect With Me</h2>
                <div className="flex justify-center space-x-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                ${link.bgColor} ${link.hoverColor}
                                text-white p-4 rounded-full shadow-lg transition-all duration-300 
                                transform hover:-translate-y-2 hover:scale-110 inline-flex items-center justify-center
                            `}
                        >
                            <Image
                                src={link.logo}
                                alt={`${link.name} Logo`}
                                width={32}
                                height={32}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}