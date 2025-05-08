import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Creative Front-End Developer & Visionary Web Designer</h3>
            <p className="text-muted-foreground">
              As an aspiring front-end developer, I am constantly seeking to
              improve my skills and abilities. I am dedicated to doing my best
              in every project, ensuring I grow with each challenge.
            </p>
            <p className="text-muted-foreground">
              I enjoy my profession as a front-end developer because it lets me
              focus on projects and create solutions. I’m also highly
              communicative, which helps me collaborate effectively with teams
              and clients, ensuring smooth progress and clear communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/public/projects/GOMURASHVILI.pdf" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-smibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating responsive websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Managing projects from start to finish using flexible and
                    efficient methods to ensure success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
