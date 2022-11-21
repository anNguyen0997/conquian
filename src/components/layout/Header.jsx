import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  StarIcon,
  SparklesIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const gamesList = [
  {
    name: 'Conquian',
    description: "Conquian, also known as “Coon Can”, or the Konkar game, is a rummy style game originating from Mexico in the 1800s. This game is believed to be the originator of modern rummy.",
    to: '/conquian',
    icon: StarIcon,
  },
  {
    name: '[COMING SOON] Tiến Lên',
    description: "Tiến Lên is a shedding card game that's sometimes called the national card game of Vietnam! In English, it's known as Thirteen. Simliar to Poker, it's a fairly simple game, but does require some strategy to play it well.",
    to: '/tienlen',
    icon: SparklesIcon,
  },

]
// const suggestMoreGames = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]

const gamesRules = [
  {
    name: 'How to Play: Conquian',
    description: 'From GatherTogetherGames.com',
    href: 'https://gathertogethergames.com/conquian',
    icon: StarIcon,
  },
  {
    name: 'How to Play: Tiến Lên',
    description: 'From GatherTogetherGames.com',
    href: 'https://gathertogethergames.com/thirteen',
    icon: SparklesIcon,
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only"></span>
              <img
                className="h-12 w-auto sm:h-14"
                src="https://cdn-icons-png.flaticon.com/512/1055/1055837.png"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Games List</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {gamesList.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* FUTURE FEATURE - SUGGEST MORE GAMES */}
                        {/* <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to="/aboutus" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About Us
            </Link>
            {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Docs
            </a> */}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                    )}
                  >
                    <span>How to Play</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {gamesRules.map((item) => (
                            <a
                              key={item.name}
                              href={item.href} target="_blank" rel="noreferrer noopener"
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}

                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              to="/register"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055837.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {gamesList.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/aboutus" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  About Us
                </Link>

                <a href="https://github.com/anNguyen0997/conquian" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  GitHub
                </a>
                {gamesRules.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <Link
                  to="/register"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing player?{' '}
                  <Link to="/login" className="text-red-600 hover:text-red-500">
                    Sign in
                  </Link>
                  <p className="mt-8 text-center text-base text-gray-400">"Team Rocket" from DigitalCrafts, Cohort of August, 2022</p>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
