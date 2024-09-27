import {ContactBar, Footer, Navbar} from "@/components/layout";

export default function WebLayout({
                                      children,
                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full">
            <ContactBar/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}
