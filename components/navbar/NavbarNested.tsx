"use client"
import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconReport,
  IconMoneybag,
  IconCards,
  IconCashOff,
} from "@tabler/icons-react";
// import { UserButton } from "../UserButton/UserButton";

// import { Logo } from "./Logo";
import classes from "./NavbarNested.module.css";
import Image from "next/image";
import pageHeaderPic from "./dashboard.png";
import { LinksGroup } from "./../NavbarLinksGroup/NavbarLinksGroup";
// import Page from "../app/bankbalances/page";

const menuData = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Investments",
    icon: IconMoneybag,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/" },
      { label: "Bank Balances", link: "bankbalances", icon: IconCards },
      { label: "Stocks", link: "/" },
      { label: "Others", link: "/" },
    ],
  },
  {
    label: "Expenses",
    icon: IconCashOff,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/" },
      { label: "Expenses", link: "/" },
      { label: "Recurring", link: "/" },
    ],
  },
  {
    label: "Credit Cards",
    icon: IconCards,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "My Cards", link: "/" },
    ],
  },

  //   { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Reports", icon: IconReport },
  {
    label: "Security",
    icon: IconLock,
  },
];

export function NavbarNested() {
  const links = menuData.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <>
            {/* <Image
              src={pageHeaderPic}
              alt="Dashboard"
              width={50}
              height={30}
            ></Image> */}
            <p className={classes.pageHeading}>Finance Tracker</p>
          </>
          {/* <Code fw={700}>v1.0.0</Code> */}
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      {/* <div className={classes.footer}>
        <UserButton />
      </div> */}
    </nav>
  );
}
