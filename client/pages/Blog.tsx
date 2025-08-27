import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Web Development Trends to Watch in 2025",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to new frameworks.",
      author: "Alex Johnson",
      date: "January 15, 2025",
      category: "Web Development",
      image: "/placeholder.svg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Mobile App Development",
      excerpt: "How emerging technologies are transforming mobile app development and user experiences.",
      author: "Emily Watson",
      date: "January 10, 2025",
      category: "Mobile Development",
      image: "/placeholder.svg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "UI/UX Design Best Practices for 2025",
      excerpt: "Essential design principles and practices that create exceptional user experiences.",
      author: "Sarah Chen",
      date: "January 5, 2025",
      category: "Design",
      image: "/placeholder.svg",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-brand-gradient bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Insights, tips, and trends from the world of web development, design, and technology.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <button className="mt-4 flex items-center text-brand-600 hover:text-brand-800 font-medium transition-colors">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
