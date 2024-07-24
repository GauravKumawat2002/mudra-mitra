import Sidebar from "@/components/left-sidebar";
import MoblieNav from "@/components/mobile-nav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn: User = {
    firstName: "Gaurav",
    lastName: "Kumawat",
    $id: "",
    email: "",
    userId: "",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        {/*Mobile Nav default view */}
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={24} height={24} alt="menu icon" />
          {/* Mobile nav sheet */}
          <MoblieNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
//
