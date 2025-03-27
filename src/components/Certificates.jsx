// src/components/Certificates.jsx
export default function Certificates() {
    const teachingCredentials = [
        {
            subject: 'C Programming',
            level: 'Advanced',
            description: 'Comprehensive programming instruction for students from Class 5 to A-Levels',
            progress: 90
        },
        {
            subject: 'Mathematics',
            level: 'Expert',
            description: 'Specialized tutoring in advanced mathematical concepts',
            progress: 95
        },
        {
            subject: 'Academic Mentorship',
            level: 'Professional',
            description: 'Personalized guidance and academic support',
            progress: 85
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
                        Certificates & Teaching Credentials
                    </h2>

                    {/* IGCSE Certificates Section */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                            International General Certificate of Secondary Education (15/08/2023)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-3">Subject</th>
                                            <th className="p-3">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { subject: "Bangla", result: "6" },
                                            { subject: "Physics", result: "9" },
                                            { subject: "Further Pure Maths", result: "8" }
                                        ].map((row, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="p-3">{row.subject}</td>
                                                <td className="p-3 font-semibold">{row.result}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-3">Subject</th>
                                            <th className="p-3">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { subject: "Chemistry", result: "9" },
                                            { subject: "English Language B", result: "8" },
                                            { subject: "Mathematics B", result: "9" }
                                        ].map((row, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="p-3">{row.subject}</td>
                                                <td className="p-3 font-semibold">{row.result}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Teaching Credentials Section */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                            Teaching Expertise
                        </h3>
                        <div className="space-y-6">
                            {teachingCredentials.map((credential, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            {credential.subject}
                                        </h4>
                                        <span className="text-gray-600">{credential.level}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        {credential.description}
                                    </p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-indigo-600 h-2.5 rounded-full"
                                            style={{ width: `${credential.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}