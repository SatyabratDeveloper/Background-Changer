import { useState } from "react";

function App() {
    const [color, setColor] = useState("red");

    const colorVariants = {
        red: "bg-red-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        lime: "bg-lime-500",
        green: "bg-green-500",
        cyan: "bg-cyan-500",
        blue: "bg-blue-500",
        purple: "bg-purple-500",
        violet: "bg-violet-500",
        pink: "bg-pink-500",
        white: "bg-white",
        black: "bg-black",
    };

    return (
        <div className={`h-screen ${colorVariants[color]} duration-300`}>
            <div className="fixed flex justify-center bottom-0 inset-x-0 m-10">
                <div className="flex flex-wrap justify-center gap-5 bg-gray-200 rounded-lg px-6 py-5 sm:px-20 sm:py-10">
                    <button
                        onClick={() => setColor("red")}
                        className="bg-red-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Red
                    </button>
                    <button
                        onClick={() => setColor("orange")}
                        className="bg-orange-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Orange
                    </button>
                    <button
                        onClick={() => setColor("yellow")}
                        className="bg-yellow-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Yellow
                    </button>
                    <button
                        onClick={() => setColor("lime")}
                        className="bg-lime-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Lime
                    </button>
                    <button
                        onClick={() => setColor("green")}
                        className="bg-green-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Green
                    </button>
                    <button
                        onClick={() => setColor("cyan")}
                        className="bg-cyan-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Cyan
                    </button>
                    <button
                        onClick={() => setColor("blue")}
                        className="bg-blue-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Blue
                    </button>
                    <button
                        onClick={() => setColor("purple")}
                        className="bg-purple-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Purple
                    </button>
                    <button
                        onClick={() => setColor("violet")}
                        className="bg-violet-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Violet
                    </button>
                    <button
                        onClick={() => setColor("pink")}
                        className="bg-pink-500 h-10 w-28 rounded-md text-white font-medium"
                    >
                        Pink
                    </button>
                    <button
                        onClick={() => setColor("white")}
                        className="bg-white h-10 w-28 rounded-md font-medium"
                    >
                        White
                    </button>
                    <button
                        onClick={() => setColor("black")}
                        className="bg-black h-10 w-28 rounded-md text-white font-medium"
                    >
                        Black
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
