import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeModeScript,
} from "flowbite-react";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climatosaur",
  description:
    "Une appli ludique pour lutter contre de réchauffement climatique et la désinformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <ThemeModeScript />
      </Head>
      <body
        className={
          " text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 h-screen " +
          inter.className
        }
      >
        <Navbar fluid rounded>
          <NavbarBrand as={Link} href="/">
            <img
              src="/favicon.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Climatosaur
            </span>
          </NavbarBrand>
          <div className="flex md:order-2">
            <DarkThemeToggle />
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="/" active>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href="#">
              About
            </NavbarLink>
            <NavbarLink as={Link} href="/sources">
              Sources
            </NavbarLink>
            <NavbarLink
              as={Link}
              href="https://github.com/Leikoe/dinowosaur-ndi-2023"
            >
              Github
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>

        {children}
      </body>
    </html>
  );
}
