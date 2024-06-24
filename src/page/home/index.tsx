import {motion} from "framer-motion"
import {useState} from "react";
import {Slider} from "@/component/ui/slider";

export default function HomePage() {
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const [rotate, setRotate] = useState(50);


    return (
        <div className="flex items-center justify-center pt-10">
            <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 h-screen">
                <div>
                    <motion.div
                        className="w-[200px] h-[200px] border border-red-700 rounded-lg border-dotted"
                        animate={{
                            x,
                            y,
                            rotate
                        }}
                        transition={{
                            type: "spring"
                        }}
                    />
                </div>
                <div className="flex items-center flex-col gap-3">
                    <Slider
                        defaultValue={[x]}
                        max={100}
                        step={1}
                        onValueChange={x => setX(x[0])}
                    />
                    <Slider
                        defaultValue={[y]}
                        max={100}
                        step={1}
                        onValueChange={x => setY(x[0])}
                    />
                    <Slider
                        defaultValue={[rotate]}
                        max={100}
                        step={1}
                        onValueChange={x => setRotate(x[0])}
                    />
                </div>
            </div>
        </div>
    )
}
