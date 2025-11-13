import {cn} from "@/lib/utils";
import { useState, useEffect } from "react";
import {House, BookOpen, ClipboardList, Folder, Mail, X, Menu} from "lucide-react";

const navItems = [
    {name: "Home", icon: <House/>, href: "#home"},
    {name: "About", icon: <BookOpen/>, href: "#about"},
    // {name: "Skills", icon: <ClipboardList/>, href: "#skills"},
    {name: "Projects", icon: <Folder/>, href: "#projects"},
    {name: "Contact", icon: <Mail/>, href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <nav 
                className={cn(
                    "fixed w-full z-40 transition-all duration-300 bg-primary",
                    isScrolled ? "fixed py-3 bg-primary/80 backdrop-blur-md shadow-xs" : ""
                )}
            >
                <div className="container">
                    <a href="#home">
                        <h1 className="p-10 text-6xl text-primary-foreground">Milena Synek</h1>
                    </a>

                    {/* desktop nav */}
                    <div className="hidden md:flex justify-center space-x-25 text-foreground lg:space-x-45">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="flex flex-col items-center text-foreground/80 hover:text-primary-foreground transition-colors duration-300">{item.icon}{item.name}</a>
                        ))}
                    </div>
                </div>
            </nav>
            {/* mobile nav */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden fixed top-5 right-5 z-50"> {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
            <div
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="flex flex-col items-center text-foreground/80 hover:text-primary-foreground transition-colors duration-300" 
                                onClick={ () => setIsMenuOpen(false)}>{item.icon}{item.name}</a>
                        ))}
                </div>
            </div>
        </>

        
    );
};