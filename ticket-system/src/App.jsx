import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketList from './components/TicketList'
import TaskStatus from './components/TaskStatus'
import Footer from './components/Footer'
import ticketsData from './data/tickets'

export default function App() {
  const [tickets, setTickets] = useState(ticketsData)
  const [tasks, setTasks] = useState([])
  const [resolved, setResolved] = useState([])

  const addToTask = (ticket) => {
    // avoid duplicates
    if (tasks.find(t => t.id === ticket.id)) return
    setTasks(prev => [...prev, { ...ticket, status: 'In-Progress' }])
    setTickets(prev => prev.filter(t => t.id !== ticket.id))
  }

  const completeTask = (ticket) => {
    setResolved(prev => [...prev, { ...ticket, status: 'Resolved' }])
    setTasks(prev => prev.filter(t => t.id !== ticket.id))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner inProgress={tasks.length} resolved={resolved.length} />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-6 flex-grow">
        <section className="lg:col-span-2">
          <h2 className="text-lg font-bold mb-4">Customer Tickets</h2>
          <TicketList tickets={tickets} addToTask={addToTask} />
        </section>
        <aside className="space-y-4">
          <TaskStatus tasks={tasks} completeTask={completeTask} />
          <div className="mt-2 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold mb-2">Resolved Task</h2>
            {resolved.length === 0 && <p className="text-sm text-gray-500">No resolved tasks yet</p>}
            {resolved.map(r => (
              <div key={r.id} className="text-sm text-gray-600">{r.title}</div>
            ))}
          </div>
        </aside>
      </main>
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  )
}
