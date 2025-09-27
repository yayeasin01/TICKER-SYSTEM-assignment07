import React from 'react'
import { toast } from 'react-toastify'

export default function TaskStatus({ tasks, completeTask }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold mb-3">Task Status</h2>
      {tasks.length === 0 && <p className="text-sm text-gray-500">No active tasks</p>}
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between items-center mb-2">
          <div className="text-sm">
            <div className="font-medium">{task.title}</div>
            <div className="text-xs text-gray-500">{task.id}</div>
          </div>
          <button
            onClick={() => {
              completeTask(task)
              toast.success('Task Completed')
            }}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  )
}
