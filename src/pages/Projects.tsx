
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-featured online store built with React, Redux, and Stripe integration",
    tags: ["React", "Redux", "Node.js", "Stripe"],
    image: "https://placehold.co/600x400",
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps and forecasts",
    tags: ["JavaScript", "API", "CSS", "Responsive"],
    image: "https://placehold.co/600x400",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Productivity application with drag-and-drop interface and team collaboration features",
    tags: ["React", "TypeScript", "Firebase"],
    image: "https://placehold.co/600x400",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://placehold.co/600x400",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">My Projects</h1>
      <p className="text-lg text-muted-foreground mb-12">
        A collection of my recent work and personal projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video w-full bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
