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

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-[100] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <SheetContent side="left" className="z-[200] w-[300px] p-0">
                {/* Rest of mobile menu content remains the same */}
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Left Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavigationMenu className="z-[150]">
              <NavigationMenuList>
                {/* Navigation items remain the same */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <NavLink to="/" className="text-xl font-bold">allbirds</NavLink>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavigationMenu className="z-[150]">
              <NavigationMenuList>
                {/* Right navigation items remain the same */}
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
            "absolute left-0 right-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[90]",
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
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </div>
  )
}