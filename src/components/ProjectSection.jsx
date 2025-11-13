import {Play} from "lucide-react";
import { useState } from "react";
import { RestaurantBattle } from "./RestaurantBattle";

const projectObj = {
    restaurantBattle: {
        name: "Restaurant Battle",
        type: 'carousel',
        text: ["As a member of Tech@NYU's TechTreks cohort, we were tasked with working with a small group to develop a full-stack web-app.  Our group chose to develop a gameified restaurant picker that utilises Google's Places API to fetch nearby restaurants and serve them to users in a creative manner.",
                "We decided to use ReactNative to allow for both desktop and mobile users to enjoy our product and to allow for a seamless UI.  We implemented a SQL database to store users' login information, favorites, playlists, and more.",
                "Ultimately, we presented our web-app for around 50 listeners, complete with a live, functional demo and received great feedback."
        ],
        slides: [
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight1.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight2.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight3.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight4.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight5.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight6.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight7.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight8.png"
            },
            {
                type: 'image',
                src: "/milena-portfolio/images/foodFight9.png"
            },
            {
                type: 'video',
                src: "/milena-portfolio/images/foodFight.mp4"
            }
        ]
    },
    chefsPlaza: {
        name: "Chef's Plaza",
        type: "single",
        text: ["For my Interactive Computing midterm, I teamed up with a group of classmates to develop my very first game!  We were inspired by Papa's Games and Good Pizza Great Pizza and wanted to make a cooking game of our own",
                "As one of the main developers for this project, I worked with p5.js to implement game mechanics from Draggable and Dockable classes to the actual drag and drop mechanics of the cupcakes and the smoothies.",
                "I published our project as an Indie game to itch.io where it continues to capture plays daily."
        ],
        image: "/milena-portfolio/images/chefsPlaza.png"
    }
}

export const ProjectSection = () => {
    const [selectedValue, setSelectedValue] = useState("restaurantBattle");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const content = projectObj[selectedValue];

    return (
        <section className="container mb-24">
            <h2 id="projects" className="text-primary-foreground text-3xl md:text-4xl font-bold mb-8 text-center">
                    Projects
            </h2>
            <select
                name="projects"
                id="project-select"
                value={selectedValue}
                onChange={handleChange}
                className="button p-4 mb-8"
            >
                <option value="restaurantBattle">Restaurant Battle</option>
                <option value="chefsPlaza">Chef's Plaza</option>
            </select>
            {/* <div className="button relative mb-12 w-1/3 min-w-[200px] p-4 bg-primary rounded-full flex justify-center items-center mx-auto">
                <span>Dropdown</span>
                <span className="absolute right-6"><ChevronDown/></span>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[400px]">
                <div className="grid grid-cols-1 space-y-4">
                    <h3 className="text-2xl font-semibold">{content.name}</h3>
                    {content.type === "carousel" ? (
                        <RestaurantBattle data={content}/>
                    ) : (
                        <div className="relative group">
                            <a href="https://mi13na.itch.io/chefs-plaza"><img src={content.image} className="rounded-3xl hover:scale-105 duration-300"/></a>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><Play className="w-25 h-25"/></div>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 group-hover:scale-105 transition duration-300 pointer-events-none rounded-3xl"></div>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 space-y-4">
                    {content.text.map((value, index) => (
                        <p key={index}>{value}</p>
                    )) }
                </div>
                
            </div>
        </section>
    );
}