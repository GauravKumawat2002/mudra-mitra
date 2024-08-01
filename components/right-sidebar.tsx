import Image from "next/image";
import Link from "next/link";
import BankCards from "./bank-cards";

export default function RightSideBar({
  user,
  transactions,
  banks,
}: RightSidebarProps) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName}&nbsp;
              {user.lastName ?? "Kumawat"}{" "}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus button"
              objectFit="cover"
            />
            <h2 className="text-14 font-sembold">Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCards
                key={banks.at(0)?.$id}
                account={banks.at(0)?.accountId}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={true}
              />
            </div>
            {banks.at(1) && (
              <div className="absolute -right-3 top-8 z-0">
                <BankCards
                  key={banks.at(1)?.$id}
                  account={banks.at(1)?.accountId}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={true}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
}
