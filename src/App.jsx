import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla 2018",
    image: "https://via.placeholder.com/400x250",
    price: "$12,500",
    mileage: "45,000 km",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Honda Vezel 2017",
    image: "https://via.placeholder.com/400x250",
    price: "$16,000",
    mileage: "60,000 km",
    location: "Chittagong, Bangladesh",
  },
];

export default function DriveSureMotors() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">DriveSure Motors</h1>
        <p className="text-gray-600">Drive with Confidence. Buy with Trust.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cars.map((car) => (
          <Card key={car.id} className="rounded-2xl shadow-md">
            <img
              src={car.image}
              alt={car.name}
              className="rounded-t-2xl w-full h-52 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{car.name}</h2>
              <p className="text-gray-700 mb-1">{car.price}</p>
              <p className="text-gray-500 text-sm mb-2">
                {car.mileage} – {car.location}
              </p>
              <div className="flex gap-3 mt-3">
                <Button variant="outline" className="flex gap-2">
                  <Phone size={16} /> Call
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <Mail size={16} /> Email
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <MessageSquare size={16} /> WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DriveSure Motors. All rights reserved.
      </footer>
    </div>
  );
}
