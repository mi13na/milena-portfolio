import {Mail, Linkedin, MapPin} from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="mb-12">
            <h3 className="text-primary-foreground text-3xl md:text-4xl font-bold mb-12 text-center">Contact</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 m-8 gap-10">
                <div className="relative bg-primary p-4 rounded-3xl button"><MapPin className="bg-primary-foreground text-background w-12 h-12 p-2 rounded-xl"/>
                    <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg">New York, NY</p>
                </div>
                <a href="https://www.linkedin.com/in/milena-synek-696a962a9"><div className="relative bg-primary p-4 rounded-3xl button"><Linkedin className="bg-primary-foreground text-background w-12 h-12 p-2 rounded-xl"/>
                    <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg">Connect</p>
                </div></a>
                <a href="mailto:mks9879@nyu.edu"><div className="relative bg-primary p-4 rounded-3xl button"><Mail className="bg-primary-foreground text-background w-12 h-12 p-2 rounded-xl"/>
                    <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg">mks9879@nyu.edu</p>
                </div></a>
            </div>
        </section>
    )
}