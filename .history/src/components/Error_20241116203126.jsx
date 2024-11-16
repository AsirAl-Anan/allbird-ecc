import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { HardHat, ShoppingBag } from 'lucide-react'

export default function ErrorPage() {
  const navigate = useNavigate()

  const handleGoToAllProducts = () => {
    navigate('/products')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <HardHat className="mr-2 h-6 w-6" />
            Page Under Construction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            We're sorry, but the page you're looking for is currently under construction. 
            Please check back later or visit our products page.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleGoToAllProducts} className="flex items-center">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Go to All Products
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}