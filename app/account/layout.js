import Navigation from '@/app/_components/SideNavigation'

export default function Layout({ children }) {
    return (
        <div className="grid grid-cols-[5rem_fr] lg:grid-cols-[16rem_1fr] h-full gap-12">
            <Navigation />
            <div className="py-1">{children}</div>
        </div>
    );
}
