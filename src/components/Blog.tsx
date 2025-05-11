import { useState } from "react";
import { BookOpen } from "lucide-react";
import { motion } from 'framer-motion'

const blogPosts = [
    {
        id: "1",
        title: "How I Built My Flipkart Clone",
        date: "April 5, 2025",
        summary:
            "A walkthrough of the technologies and challenges I faced while building a full-stack Flipkart clone using the MERN stack.",
        content: `
      <p>This blog post is a deep dive into the process of building a full-stack <strong>Flipkart clone</strong> using the MERN stack.</p>
      <p>We'll cover:</p>
      <ul>
        <li>Frontend React setup and Redux management</li>
        <li>Backend Node.js with Express</li>
        <li>Database management with MongoDB</li>
        <li>Authentication with JWT and sessions</li>
      </ul>
      <p>And more...</p>
    `,
        author: "Someshwar Holkar",
    },
    {
        id: "2",
        title: "Client Project Case Study: JBC Construction Website",
        date: "March 21, 2025",
        summary:
            "How I designed and delivered a clean, responsive construction company website as a client project.",
        content: `
      <p>In this post, I walk you through how I built a responsive website for <strong>JBC Construction</strong>, a client project.</p>
      <p>Key features included:</p>
      <ul>
        <li>Custom design for construction services</li>
        <li>Mobile-first design</li>
        <li>Contact forms with email integration</li>
      </ul>
      <p>This project helped me further hone my frontend and backend development skills.</p>
    `,
        author: "Someshwar Holkar",
    },
    {
        id: "3",
        title: "Firebase Basics with React",
        date: "Feb 10, 2025",
        summary:
            "Understanding how to integrate Firebase authentication and Firestore into your React apps.",
        content: `
      <p>This blog provides a step-by-step guide on integrating Firebase with a React app. I demonstrate how to use Firebase for:</p>
      <ul>
        <li>User authentication</li>
        <li>Cloud Firestore database</li>
        <li>Realtime data synchronization</li>
      </ul>
      <p>It's a beginner-friendly guide aimed at developers new to Firebase.</p>
    `,
        author: "Someshwar Holkar",
    },
];

export default function Blog() {
    const [selectedBlog, setSelectedBlog] = useState<null | typeof blogPosts[0]>(null);

    const showBlogDetail = (postId: string) => {
        const post = blogPosts.find((post) => post.id === postId);
        if (post) {
            setSelectedBlog(post);
        }
    };

    return (
        <section id="blog" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            My Blog's
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Explore my thoughts, case studies, and development learnings.
                        </p>
                    </motion.div>
                </div>

                {/* Blog Post List */}
                {selectedBlog === null ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-200 hover:scale-[1.03] transform transition-all duration-300"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-600 text-blue-700 dark:text-white mb-4">
                                    <BookOpen size={26} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{post.summary}</p>
                                <button
                                    onClick={() => showBlogDetail(post.id)}
                                    className="mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                                >
                                    Read More →
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        <button
                            onClick={() => setSelectedBlog(null)}
                            className="text-blue-600 dark:text-blue-400 mb-4 hover:underline"
                        >
                            Back to Blogs
                        </button>
                        <h2 className="text-4xl font-extrabold text-black dark:text-gray-100 tracking-tight">
                            {selectedBlog.title}
                        </h2>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">{selectedBlog.date}</p>
                        <div
                            className="mt-6 text-lg text-gray-600 dark:text-gray-300"
                            dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
