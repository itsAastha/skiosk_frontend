import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

const About = () => {
  return (
    <div >
      <Navbar/>
    <div className="relative bg-gradient-to-l from-[#384427] to-[#51482c]">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-black opacity-40 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-neutral-400" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className=" overflow-hidden rounded-2xl pt-64 p-50 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1608366911548-961eab992f89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="absolute inset-0  mix-blend-multiply " />
              <div className="absolute inset-0 bg-gradient-to-t  opacity-20" />
              <div className="relative px-8">
                <div>
                 
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0  ">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20 ">
            <h2 className="text-3xl font-bold tracking-tight text-transparent border-b border-neutral-500 pb-4 bg-clip-text bg-gradient-to-r from-[#d7dad1] to-[#9d9d7e]">
            Discover Government Schemes That Can Empower Your Village

            </h2>
            <div className="mt-6 space-y-6 text-gray-300 pb-10">
              <p className="text-lg">
              Welcome to our website, dedicated to providing villagers in India with detailed information about the various government schemes and programs that can help empower your village. We understand that accessing government schemes and programs can be difficult, which is why we have created this platform to make it easy for you to find the assistance you need.
              </p>
              <p className="text-base leading-7">
              India has numerous government schemes and programs that cater to the needs of villagers, and our website provides comprehensive information on all of them. From financial support to start a small business to healthcare programs, education, and training opportunities, our website covers all the schemes and programs that can benefit your village.

              </p>
              <p className="text-base leading-7">
              Our platform is designed to help you access the information you need easily. We have categorized the schemes and programs based on their type of assistance, making it easy for you to find the ones that are relevant to your needs.
              So, explore our website and discover the government schemes that can empower your village. We're here to provide you with the information and resources you need to improve your quality of life and contribute to the development of your community.
              
              </p>
              <h1 className="font-semibold text-[#d6d8bf]">-Kiosk team</h1>
            </div>
          </div>
        </div>
      </div><Footer/>
    </div>
    </div>
  )
}

export default About