import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { ChevronRight, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { cn } from "../../lib/utils"

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

  const navLinkClasses = "relative group"
  const underlineClasses = "absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"

  return (
    <header className=" w-full border-b bg-background" style={{position:'sticky', top:'0', zIndex:''}}>
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
              <SheetHeader className="border-b p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">allbirds</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
              </SheetHeader>
              <nav className="flex flex-col">
                <NavLink to="/men" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm font-medium`}>
                  MEN
                  <ChevronRight className="h-4 w-4" />
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/women" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm font-medium`}>
                  WOMEN
                  <ChevronRight className="h-4 w-4" />
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/socks" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm font-medium`}>
                  SOCKS
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/sale" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm font-medium text-red-600`}>
                  SALE
                  <ChevronRight className="h-4 w-4" />
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/sustainability" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm font-medium`}>
                  SUSTAINABILITY
                  <ChevronRight className="h-4 w-4" />
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/resale" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm font-medium`}>
                  RESALE
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/stores" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm font-medium`}>
                  STORES
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/account" className={`${navLinkClasses} flex items-center justify-between border-b p-4 text-sm`}>
                  Account
                  <span className={underlineClasses}></span>
                </NavLink>
                <NavLink to="/help" className={`${navLinkClasses} flex items-center justify-between p-4 text-sm`}>
                  Help
                  <span className={underlineClasses}></span>
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Left Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navLinkClasses}>
                  MEN
                  <span className={underlineClasses}></span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-2">
                      <NavLink to="/men/running-shoes" className={navLinkClasses}>
                        Running Shoes
                        <span className={underlineClasses}></span>
                      </NavLink>
                      <NavLink to="/men/everyday-sneakers" className={navLinkClasses}>
                        Everyday Sneakers
                        <span className={underlineClasses}></span>
                      </NavLink>
                      <NavLink to="/men/slip-ons" className={navLinkClasses}>
                        Slip-Ons
                        <span className={underlineClasses}></span>
                      </NavLink>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navLinkClasses}>
                  WOMEN
                  <span className={underlineClasses}></span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-2">
                      <NavLink to="/women/running-shoes" className={navLinkClasses}>
                        Running Shoes
                        <span className={underlineClasses}></span>
                      </NavLink>
                      <NavLink to="/women/everyday-sneakers" className={navLinkClasses}>
                        Everyday Sneakers
                        <span className={underlineClasses}></span>
                      </NavLink>
                      <NavLink to="/women/slip-ons" className={navLinkClasses}>
                        Slip-Ons
                        <span className={underlineClasses}></span>
                      </NavLink>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink to="/socks" className={`${navLinkClasses} inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}>
                    SOCKS
                    <span className={underlineClasses}></span>
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink to="/sale" className={`${navLinkClasses} inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}>
                    SALE
                    <span className={underlineClasses}></span>
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <NavLink to="/" className="text-xl font-bold">allbirds</NavLink>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink to="/sustainability" className={`${navLinkClasses} inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}>
                    SUSTAINABILITY
                    <span className={underlineClasses}></span>
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink to="/resale" className={`${navLinkClasses} inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}>
                    RESALE
                    <span className={underlineClasses}></span>
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink to="/stores" className={`${navLinkClasses} inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}>
                    STORES
                    <span className={underlineClasses}></span>
                  </NavLink>
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