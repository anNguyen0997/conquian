import React from 'react'
import teamimage1 from '../../asset/teamimg/1BFBF73E-263A-40A1-9AFF-7833FAD49C90-2.jpg'
import teamimage2 from '../../asset/teamimg/95E26AD8-5E04-4E81-A71B-D06730887256-2.jpg'
import teamimage3 from '../../asset/teamimg/PXL_20220313_211012637-2.jpg'


const people = [
    {
      name: 'Jonathan Batalla',
      role: 'Developed the game, board and its logic',
      imageUrl:
      teamimage1,
        bio: '',
      linkedinUrl: 'https://www.linkedin.com/in/jonathan-batalla-2b2052249/',
    },
    {
      name: 'An Nguyen',
      role: 'Developed the back-end using MySQL, including back-end login & registration validation',
      imageUrl: teamimage2,
        bio: '',
      linkedinUrl: 'https://www.linkedin.com/in/an-nguyen09/',
    },
    {
      name: 'Khanh Trinh',
      role: 'Developed the front-end using React.JS, TailwindCSS, & Headless UI',
      imageUrl:
        teamimage3,
        bio: '',
      linkedinUrl: 'https://www.linkedin.com/in/kqtrinh87/',
    },

  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-decoration-line: underline underline-offset-4 decoration-red-600">Our Team</h2>
              <p className="text-xl text-gray-500">
                This is our final capstone project from DigitalCrafts, developed by our team, all from the Greater Houston area of Texas. 
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="rounded-lg object-cover shadow-lg border-solid border-2 border-red-400" src={person.imageUrl} alt="Oh no" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-red-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>
                      <ul role="list" className="flex space-x-5">

                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  