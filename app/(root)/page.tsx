import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Jevon",
    lastName: "Voo",
    email: "keatvun191@gmail.com",
  };
  const banks = [{ currentBalance: 500.5 }, { currentBalance: 123.5 }];

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Trans
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;
