import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

function Cabin({ cabin }) {
    const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

    return (
        <div className="border border-primary-800 py-5 px-4 lg:py-8 lg:px-10 mb-16">
            <div className="relative w-full h-60 md:h-80 lg:h-[400px] mb-8 lg:mb-0">
                <Image
                    src={image}
                    alt={`Cabin ${name}`}
                    layout="fill"
                    className="object-cover rounded-md"
                    priority={true}
                />
                <h3 className="absolute bottom-4 left-4 text-white font-black text-2xl md:text-4xl lg:text-5xl bg-primary-950 bg-opacity-60 px-4 py-2 rounded-md w-[80%] lg:w-[60%]">
                    Cabin {name}
                </h3>
            </div>

            <div className="lg:pl-4">
                <p className="text-sm md:text-base lg:text-lg text-primary-300 mb-6 mt-6 lg:mb-10">
                    <TextExpander>{description}</TextExpander>
                </p>

                <ul className="flex flex-col gap-3 mb-5 lg:mb-7">
                    <li className="flex gap-2 lg:gap-3 items-center">
                        <UsersIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
                        <span className="text-sm md:text-lg">
                            For up to <span className="font-bold">{maxCapacity}</span> guests
                        </span>
                    </li>
                    <li className="flex gap-2 lg:gap-3 items-center">
                        <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
                        <span className="text-sm md:text-lg">
                            Located in the heart of the <span className="font-bold">Dolomites</span> (Italy)
                        </span>
                    </li>
                    <li className="flex gap-2 lg:gap-3 items-center">
                        <EyeSlashIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
                        <span className="text-sm md:text-lg">
                            Privacy <span className="font-bold">100%</span> guaranteed
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cabin;
