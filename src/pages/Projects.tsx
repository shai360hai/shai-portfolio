
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application using OpenWeather API with real-time data and dynamic UI.",
    tags: ["React", "API", "Tailwind CSS"],
    link: "https://github.com/shai360hai/myweatherapp",
  },
  {
    title: "Lyrics Fetcher",
    description:
      "A Python script that fetches song lyrics using the Lyrics.ovh API with simple CLI interaction.",
    tags: ["Python", "API", "CLI"],
    link: "https://github.com/shai360hai/Lyrics-Fetcher-Lyrics.ovh-Python",
  },
  {
    title: "Sifria - Book Management App",
    description:
      "A full-stack book management system built with React and Firebase for managing a personal library.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "https://github.com/shai360hai/Sifria",
  },
  {
    title: "Friendflix",
    description:
      "A simple React app that allows users to add and rate movies with their friends — like a social watchlist.",
    tags: ["React", "Hooks", "JavaScript"],
    link: "https://github.com/shai360hai/friendflix",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        My Projects
      </h1>
      <p className="text-lg text-muted-foreground mb-12">
        A collection of my recent work and personal projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="transition hover:shadow-lg">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={`${index}-${tag}-${i}`}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
