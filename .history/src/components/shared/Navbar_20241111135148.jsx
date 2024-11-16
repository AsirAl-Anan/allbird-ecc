import React, { useState } from "react"
import { ChevronRight, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { cn } from '../../lib/utils'

import { Button } from "../ui/button"
import { Input } from "./ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4">
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0">
              <SheetHeader className="border-b p-4">
                <div className="flex items-center justify-between">
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                  <Link href="/" className="mx-auto">
                    <span className="font-bold">allbirds</span>
                  </Link>
                  <Button variant="ghost" size="icon">
                    <ShoppingBag className="h-6 w-6" />
                    <span className="sr-only">Shopping cart</span>
                  </Button>
                </div>
              </SheetHeader>
              <nav className="flex flex-col">
                {[
                  "MEN",
                  "WOMEN",
                  "SOCKS",
                  "SALE",
                  "SUSTAINABILITY",
                  "RESALE",
                  "STORES",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="flex items-center justify-between border-b px-6 py-4 text-sm font-medium"
                  >
                    {item}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ))}
                <Link href="#" className="border-b px-6 py-4 text-sm">
                  Account
                </Link>
                <Link href="#" className="px-6 py-4 text-sm">
                  Help
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>MEN</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-2">
                      <Link href="#" className="text-sm">
                        Running Shoes
                      </Link>
                      <Link href="#" className="text-sm">
                        Everyday Sneakers
                      </Link>
                      <Link href="#" className="text-sm">
                        Slip-Ons
                      </Link>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>WOMEN</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-2">
                      <Link href="#" className="text-sm">
                        Running Shoes
                      </Link>
                      <Link href="#" className="text-sm">
                        Everyday Sneakers
                      </Link>
                      <Link href="#" className="text-sm">
                        Slip-Ons
                      </Link>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="#"
                >
                  SOCKS
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="#"
                >
                  SALE
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex flex-1 items-center justify-center md:flex-none">
          <Link href="/" className="font-bold">
            allbirds
          </Link>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="#"
                >
                  SUSTAINABILITY
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="#"
                >
                  RESALE
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="#"
                >
                  STORES
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="ghost" size="icon" onClick={toggleSearch}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>

        {/* Mobile Right Icons */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleSearch}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
      </div>

      {/* Sleek and Modern Search Bar */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full bg-background transition-all duration-300 ease-in-out",
          showSearch ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="container px-4 py-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-300 focus:border-primary focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
}