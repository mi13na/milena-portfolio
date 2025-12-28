import { useState, useEffect } from "react";

export const AboutSection = () => {
    const [isLang, setIsLang] = useState(true);

    const languages = ["Python", "Java", "JavaScript", "PHP", "SQL"];
    const technologies = ["Git", "React Native", "React", "Vue.js", "Unix/Linux"];

    const currentList = isLang? languages: technologies;

    return (
        <section className="py-24 px-4 relative mb-12">
            <div className="container mx-auto max-w-5xl">
                <h2 id="about" className="text-primary-foreground text-3xl md:text-4xl font-bold mb-12 text-center">
                    About Me Test
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* about */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Problem-Solver & CS Student</h3>
                        <p className="text-muted-foreground">
                            As a third-year studying CS at NYU, I possess both foundational knowledge
                            and the understanding of relevant applications.  I have demonstrated my skills during 
                            past internships and through involvement in various extra-curricular 
                            activities such as Tech@NYU and the NYU radio's tech team.
                        </p>
                        <p className="text-muted-foreground">
                            I enjoy employing my creativity
                            towards building impactful technology and thinking up sturdy, longlasting
                            solutions.  From semi-conductor work to full-stack web programming to game development, 
                            I love learning new technologies and broadening my skillset.  When I'm not on my computer, 
                            I'm dancing ballet, experimenting with recipes, or crafting.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="button">Get In Touch</a>
                            <a 
                                href="MilenaSynekResume.pdf"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                    {/* skills */}
                    <div>
                        <div className="flex gap-3">
                            <button 
                                className="w-1/3 rounded-t-lg bg-primary text-primary-foreground hover:translate-y-2 p-2 active:bg-primary-500 min-w-[130px]"
                                onClick={() => setIsLang(true)} 
                            >
                                Languages
                            </button>
                            <button 
                                className="w-1/3 rounded-t-lg bg-primary text-primary-foreground hover:translate-y-2 p-2 min-w-[130px]" 
                                onClick={() => setIsLang(false)}
                            >
                                Technologies
                            </button>
                        </div>
                        <div>
                            <div className="w-full bg-primary rounded-tr-3xl rounded-br-3xl rounded-bl-3xl grid grid-cols-3 gap-3 gap-y-12 p-6 min-h-[300px] place-content-center">
                                {currentList.map((item, index) => (
                                    <div
                                        key={index}
                                        className="button bg-primary-foreground rounded-full text-background flex items-center justify-center h-12"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    

                    {/* <div className="grid grid-cols-1 gap-6">
                        <div className="p-6 card-hover rounded-full bg-primary">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary-foreground"/>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Web Development</h4>
                                        <p>Creating responsive websites and web applications with modern frameworks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 card-hover rounded-full bg-primary">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary-foreground"/>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 card-hover rounded-full bg-primary">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
    
}