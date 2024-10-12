import Link from "next/link";
import Navigation from "./_components/Navigation";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Home() {
    return (
        <main className="mt-24">
            <Image
                src={bg}
                fill
                placeholder="blur"
                quality={80}
                className="object-cover object-top"
                alt="Mountains and forests with two cabins"
            />

            <div className="relative z-10 text-center px-2 sm:px-4 md:px-8">
                <h1 className="text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-50 mb-4 sm:mb-6 md:mb-10 tracking-tight font-normal">
                    Welcome to paradise.
                </h1>
                <Link
                    href="/cabins"
                    className="bg-accent-500 px-4 py-3 xs:px-6 xs:py-4 sm:px-8 sm:py-6 text-primary-800 text-sm xs:text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all"
                >
                    Explore luxury cabins
                </Link>
            </div>
        </main>
    );
}
