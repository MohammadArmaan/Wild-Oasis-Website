import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    // title: "The Wild Oasis",
    title: {
        template: "The Wild Oasis | %s",
        default: "The Wild Oasis | Welcome",
    },
    description:
        "Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded be beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
            >
                <Header />

                <div className="flex-1 px-4 py-8 sm:px-8 sm:py-12 grid">
                    <main className="max-w-7xl mx-auto w-full">
                        <ReservationProvider>{children}</ReservationProvider>
                    </main>
                </div>
            </body>
        </html>
    );
}
