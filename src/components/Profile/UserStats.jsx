import { UsersIcon } from '@heroicons/react/24/outline'

const stats = [
    { name: 'Total Games Played', stat: '71,897', icon: UsersIcon,},
    { name: 'Total Wins', stat: '58.16%', icon: UsersIcon,},
    { name: 'Avg. Win Rate', stat: '24.57%', icon: UsersIcon,},
  ]
  
  export default function UserStats() {
    return (
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">User Name Here</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
  