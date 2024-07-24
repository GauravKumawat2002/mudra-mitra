import HeaderBox from "@/components/header-box";
import RightSideBar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";

export default function Home() {
  const user: User = {
    $id: "",
    email: "gauravkumawat830@gmail.com",
    userId: "",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    firstName: "Gaurav",
    lastName: "Kumawat",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome"
            subTitle="Access and manage your account and transactions efficiently."
            type="greeting"
            // user="Guest"
            user={user?.firstName || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={8099}
          />
        </header>
        Recent Transactions
      </div>
      <RightSideBar user={user} transactions={[]} banks={[{}, {}]} />
    </section>
  );
}
