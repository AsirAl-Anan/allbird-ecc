import React, { useState } from "react"
import { ChevronRight, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { cn } from "../../lib/utils"
import { Link } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <div className="border-b p-4">
                <Button variant="ghost" size="icon" className="absolute left-4 top-4">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
                <div className="flex justify-center">
                  <span className="font-bold">allbirds</span>
                </div>
              </div>
              <nav className="flex flex-col">
                <Link className="flex items-center justify-between border-b p-4 text-sm font-medium">
                  MEN
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link className="flex items-center justify-between border-b p-4 text-sm font-medium">
                  WOMEN
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link className="flex items-center justify-between border-b p-4 text-sm font-medium">
                  SOCKS
                </Link>
                <Link className="flex items-center justify-between border-b p-4 text-sm font-medium text-red-600">
                  SALE
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link className="flex items-center justify-between border-b p-4 text-sm font-medium">
                  SUSTAINABILITY
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link className="flex items-center justify-between border-b p-4 text-sm font-medium">
                  RESALE
                </Link>
                <Link className="flex items-center justify-between border-b p-4 text-sm font-medium">
                  STORES
                </Link>
                <Link className="flex items-center justify-between border-b p-4 text-sm">
                  Account
                </Link>
                <Link className="flex items-center justify-between p-4 text-sm">
                  Help
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Left Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>MEN</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-2">
                      <Link className="text-sm">Running Shoes</Link>
                      <Link className="text-sm">Everyday Sneakers</Link>
                      <Link className="text-sm">Slip-Ons</Link>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>WOMEN</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-2">
                      <Link className="text-sm">Running Shoes</Link>
                      <Link className="text-sm">Everyday Sneakers</Link>
                      <Link className="text-sm">Slip-Ons</Link>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  SOCKS
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  SALE
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link className="text-xl font-bold">allbirds</Link>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  SUSTAINABILITY
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  RESALE
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
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
        <div className="flex items-center space-x-4 lg:hidden">
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

      {/* Search Bar */}
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

// Simple Link component since we're not using Next.js
function Link({ href = "#", className, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}