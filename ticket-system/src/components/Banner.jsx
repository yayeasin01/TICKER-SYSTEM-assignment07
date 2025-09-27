import React from 'react'

export default function Banner({ inProgress, resolved }) {
  return (
    <div className="grid grid-cols-2 gap-6 px-6 py-6">
      <div className="relative rounded-xl p-6 text-center text-white" style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%)' }}>
        <h2 className="text-lg font-medium opacity-90">In-Progress</h2>
        <p className="text-5xl font-bold mt-4">{inProgress}</p>
      </div>
      <div className="relative rounded-xl p-6 text-center text-white" style={{ background: 'linear-gradient(135deg,#10b981 0%,#059669 100%)' }}>
        <h2 className="text-lg font-medium opacity-90">Resolved</h2>
        <p className="text-5xl font-bold mt-4">{resolved}</p>
      </div>
    </div>
  )
}
