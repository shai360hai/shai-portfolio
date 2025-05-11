
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block text-primary">Shai Sasonker</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A passionate full stack developer specializing in creating beautiful, 
            responsive, and user-friendly websites and applications.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
