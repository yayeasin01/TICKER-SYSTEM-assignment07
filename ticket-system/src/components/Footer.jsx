import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-8 mt-8">
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white font-bold">CS — Ticket System</h3>
          <p className="text-sm mt-2">A simple ticket dashboard demo built with React + Tailwind.</p>
        </div>
        <div>
          <h3 className="text-white font-bold">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Products</li>
            <li>Customer Service</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold">Information</h3>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-6">© 2025 CS — Ticket System. All rights reserved.</p>
    </footer>
  )
}
