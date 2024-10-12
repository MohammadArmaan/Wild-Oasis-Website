import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
    const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-primary-800">
            <div className="relative h-64 sm:h-auto">
                <Image
                    src={image}
                    fill
                    alt={`Cabin ${name}`}
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col justify-between bg-primary-950">
                <div className="p-5"> 
                    <h3 className="text-accent-500 font-semibold text-xl sm:text-2xl mb-3">
                        Cabin {name}
                    </h3>

                    <div className="flex gap-3 items-center mb-2">
                        <UsersIcon className="h-5 w-5 text-primary-600" />
                        <p className="text-base sm:text-lg text-primary-200">
                            For up to{" "}
                            <span className="font-bold">{maxCapacity}</span>{" "}
                            guests
                        </p>
                    </div>

                    <p className="flex gap-3 justify-end items-baseline">
                        {discount > 0 ? (
                            <>
                                <span className="text-2xl sm:text-3xl font-[350]">
                                    ₹{regularPrice - discount}
                                </span>
                                <span className="line-through font-semibold text-primary-600">
                                    ₹{regularPrice}
                                </span>
                            </>
                        ) : (
                            <span className="text-2xl sm:text-3xl font-[350]">
                                ₹{regularPrice}
                            </span>
                        )}
                        <span className="text-primary-200">/ night</span>
                    </p>
                </div>

                <div className="border-t border-primary-800"> 
                    <Link
                        href={`/cabins/${id}`}
                        className="block py-4 text-center hover:bg-accent-600 transition-all hover:text-primary-900 w-full" 
                    >
                        Details & reservation &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CabinCard;
