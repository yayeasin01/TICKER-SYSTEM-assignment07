import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="font-bold text-xl">CS — Ticket System</h1>
      <div className="flex gap-4 items-center text-sm">
        <a className="hover:underline" href="#">Home</a>
        <a className="hover:underline" href="#">FAQ</a>
        <a className="hover:underline" href="#">Changelog</a>
        <a className="hover:underline" href="#">Blog</a>
        <a className="hover:underline" href="#">Download</a>
        <a className="hover:underline" href="#">Contact</a>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">+ New Ticket</button>
      </div>
    </nav>
  )
}
