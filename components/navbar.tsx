"use client";
import React from "react";
import {
  Navbar as HeroNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { Logo } from "./UI/logo";

import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const NavMenu = siteConfig.navItems.map((item, index) => (
    <NavbarItem key={index}>
      <Link color="foreground" href={item.href}>
        {item.label}
      </Link>
    </NavbarItem>
  ));

  const Menu = siteConfig.navItems.map((item, index) => (
    <NavbarItem key={index} className="">
      <Link
        className="text-2xl font-semibold"
        color="foreground"
        href={item.href}
      >
        {item.label}
      </Link>
    </NavbarItem>
  ));

  return (
    <HeroNav onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NavMenu}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact" variant="flat">
            Call us
          </Button>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="flex gap-20 pt-10 ">{Menu}</NavbarMenu>
    </HeroNav>
  );
}
