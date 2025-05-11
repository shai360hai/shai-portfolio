
const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hello! I'm Shai, a full stack developer with a passion for creating beautiful and functional web experiences.
            With 1 years of experience in the field, I specialize in building responsive websites and applications
            that are not only visually appealing but also highly performant and accessible.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in web development began when I was in college, tinkering with HTML and CSS to create simple websites.
            That curiosity has evolved into a full-fledged career, working with modern technologies like React, TypeScript, and Tailwind CSS.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me hiking in the mountains, playing on the ps5, or experimenting with new recipes in the kitchen.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js", "Redux", "Node.js", "Git"].map((skill) => (
              <span 
                key={skill} 
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-muted rounded-lg p-6">
            <div className="aspect-square rounded-lg bg-secondary mb-6"></div>
            <h2 className="text-xl font-semibold mb-2">Shai Sasonker</h2>
            <p className="text-muted-foreground mb-4">Full stack Developer</p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Location:</span> Isreal
              </p>
              <p className="text-sm">
                <span className="font-medium">Experience:</span> 1+ years
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span> shai360hai@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
