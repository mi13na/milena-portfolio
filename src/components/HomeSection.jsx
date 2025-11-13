import { P5Sketch } from "./P5Sketch";
import {Scroll, MoveDown} from "lucide-react";

export const HomeSection = () => {
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="mx-auto text-center z-10">
            <P5Sketch/>
            <h1 className="absolute pt-15 top-1/3 lg:top-1/2 left-1/2 -translate-x-1/2 text-8xl text-foreground">Hi, I'm Milena</h1>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-column items-center">
                {/* add bounce animation */}
                <Scroll className="h-5 w-5 text-primary-foreground"/>
                <MoveDown className="h-5 w-5 text-primary-foreground"/>
            </div>
        </div>
    </section>
}