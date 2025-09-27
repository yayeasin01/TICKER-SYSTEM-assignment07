import React from 'react'
import { toast } from 'react-toastify'

export default function TicketList({ tickets, addToTask }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tickets.map(ticket => (
        <div key={ticket.id} className="border rounded-lg p-4 bg-white shadow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold">{ticket.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{ticket.id} • {ticket.createdAt}</p>
            </div>
            <span className={`px-2 py-1 rounded text-sm ${ticket.status === 'In-Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
              {ticket.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
          <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
            <span className="font-medium">{ticket.priority}</span>
            <span>{ticket.customer}</span>
          </div>
          <button
            onClick={() => {
              addToTask(ticket)
              toast.info('Added to Task Status')
            }}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded"
          >
            Add to Task
          </button>
        </div>
      ))}
    </div>
  )
}
