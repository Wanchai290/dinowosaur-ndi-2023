import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  Button,
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
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climatausaur",
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
      <body className={"bg-gray-100 dark:bg-gray-900 " + inter.className}>
        <Navbar fluid rounded>
          <NavbarBrand as={Link} href="https://flowbite-react.com">
            <img
              src="/favicon.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </NavbarBrand>
          <div className="flex md:order-2">
            <DarkThemeToggle />
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href="#">
              About
            </NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        </Navbar>

        {children}
      </body>
    </html>
  );
}
