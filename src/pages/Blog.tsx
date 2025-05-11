
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Getting Started with React Hooks",
    excerpt: "An introduction to React Hooks and how they can simplify your code",
    date: "May 10, 2023",
    readTime: "5 min read",
    image: "https://placehold.co/600x400",
    link: "#"
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt: "How Tailwind CSS has changed the way I style web applications",
    date: "April 22, 2023",
    readTime: "4 min read",
    image: "https://placehold.co/600x400",
    link: "#"
  },
  {
    title: "Optimizing React Applications",
    excerpt: "Advanced techniques to improve performance in your React apps",
    date: "March 15, 2023",
    readTime: "8 min read",
    image: "https://placehold.co/600x400",
    link: "#"
  },
  {
    title: "Building Accessible Websites",
    excerpt: "Why accessibility matters and how to implement it in your projects",
    date: "February 28, 2023",
    readTime: "6 min read",
    image: "https://placehold.co/600x400",
    link: "#"
  },
];

const Blog = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Blog</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Thoughts, learnings, and insights from my journey as a developer
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <Card key={index}>
            <div className="aspect-[3/2] w-full bg-muted">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex gap-2 items-center text-sm text-muted-foreground mb-1">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline">
                <a href={post.link}>Read More</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
