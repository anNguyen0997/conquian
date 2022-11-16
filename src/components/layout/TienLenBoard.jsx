import { Link } from 'react-router-dom'

export default function TienLenBoard() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-col bg-white pt-24 pb-24  items-center justify-center">
          <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-shrink-0 justify-center">
              <a href="/" className="inline-flex ">
                <span className="sr-only">Card</span>
                <img
                  className="h-24 w-auto"
                  src="https://cdn-icons-png.flaticon.com/512/1055/1055846.png?w=1380&t=st=1668629317~exp=1668629917~hmac=44edf1c1ed8621a3cf5962e1135aa52d2467ad6a84e823ff59db68653941a0d5"
                  alt=""
                />
              </a>
            </div>
            <div className="py-12">
              <div className="text-center">
                <p className="text-base font-semibold text-red-600">Sorry!</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">We're not done yet!</h1>
                <p className="mt-2 text-base text-gray-500">This game isn't ready yet! Come back later.</p>
                <div className="mt-6">
                  <Link to="/" className="text-base font-medium text-red-600 hover:text-red-500">
                    Go back home
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
       </div>
      </>
    )
  }
  