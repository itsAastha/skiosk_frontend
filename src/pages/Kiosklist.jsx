import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import Footer from "../components/Footer";
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
const posts = [
    {
      title: 'Rashtriya Krishi Vikas Yojana',
      href: '#',
      description:
        'To strengthen the farmers efforts through the creation of required pre and post-harvest agri-infrastructure that increases access to quality inputs, storage, market facilities etc. and enables farmers to make informed choices. To provide autonomy, and flexibility to States to plan and execute schemes as per local/ farmers needs. To promote value chain addition linked production models that will help farmers increase their income as well as encourage production/productivity. To mitigate the risk of farmers with a focus on additional income generation activities - like integrated farming, mushroom cultivation, beekeeping, aromatic plant cultivation, floriculture etc. To empower youth through skill development, innovation and agri-entrepreneurship-based agribusiness models that attract them to agriculture.',
      ministry: 'Ministry Of Agriculture and Farmers Welfare',
      img:'https://images.unsplash.com/photo-1626516008114-7dd309103a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',

    },
    {
      title: 'PM Swamitva Yojana',
      href: '#',
      description: 'Ownership/Swamitva Cards is provided to rural property owners villagers can avail bank finance using their property card as collateral as these cards serve as an official document. ',
      ministry: 'Ministry Of Agriculture and Farmers Welfare',
      img:'https://images.unsplash.com/photo-1523980077198-60824a7b2148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        title: 'PM Swamitva Yojana',
        href: '#',
        description: 'Ownership/Swamitva Cards is provided to rural property owners villagers can avail bank finance using their property card as collateral as these cards serve as an official document. ',
        ministry: 'Ministry Of Agriculture and Farmers Welfare',
        img:'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      },
      {
        title: 'PM Swamitva Yojana',
        href: '#',
        description: 'Ownership/Swamitva Cards is provided to rural property owners villagers can avail bank finance using their property card as collateral as these cards serve as an official document. ',
        ministry: 'Ministry Of Agriculture and Farmers Welfare',
        img:'https://images.unsplash.com/photo-1629213680648-b2b713d82dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
  ]

export default function Example() {
  return (
    <div>
        <Navbar/>
        <div className="bg-neutral-100 px-6 pt-10 pb-20 lg:px-8  lg:pb-28 min-h-screen">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Agriculture</h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
            <p className="text-xl text-gray-500">These schemes aim to promote agriculture, increase productivity, and provide financial and technical assistance to farmers.</p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
              <input
                  type="text"
                  name="search"
                  id="search"
                  className="appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-[#51482c] focus:outline-none focus:ring-[#51482c] lg:max-w-xs"
                  placeholder="Search"
                />
              </div>
              <div className="mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto">
                <div
                  type="button"
                  className="flex w-full items-center justify-center rounded-full border border-transparent bg-yellow-800 px-4 py-2 text-base font-medium text-white hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-[#51482c] focus:ring-offset-2 sm:inline-flex sm:w-auto "
                >
                  <MagnifyingGlassIcon className=" h-4 w-4 text-gray-200 " aria-hidden="true" />
               
                 
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 pb-10 ">
          {posts.map((post) => (
            <div key={post.title}>
                <a href="#" className="flex flex-col items-center hover:scale-110 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={post.img}></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{post.title}</h5>
                <p className="mb-3 font-normal h-32 text-gray-700 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">{post.description}</p>
                    </div>  
                  </a>

   
            </div>
          ))}
        </div>
        <Pagination/>
      </div>
    </div>
        <Footer/>
    </div>
  );
}
