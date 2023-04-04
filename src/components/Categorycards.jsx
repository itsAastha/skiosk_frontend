import Pagination from "./Pagination"

const categories = [
    {
      id: 1,
      name: 'Agriculture',
      description: 'These schemes aim to promote agriculture, increase productivity, and provide financial and technical assistance to farmers.',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      

    },
    { id: 2,
      name: 'Business',
      description: 'These schemes aim to promote entrepreneurship, small and medium enterprises, and provide financial assistance, training, and support for business development.',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1657569610696-d39f39600166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      
    },
    { id: 3,
        name: 'Finances',
        description: 'These schemes aim to promote financial inclusion, provide access to financial services, and support economic growth through financing of businesses and industries.',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        
      },
      { id: 4,
        name: 'Education',
        description: 'These schemes aim to provide access to education, improve the quality of education, and promote vocational training and skill development.',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        
      },
      { id: 5,
        name: 'Housing',
        description: ' These schemes aim to promote affordable housing, provide financial assistance for housing, and improve housing conditions for the poor and marginalized sections of society',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1553513790-18c199b89b08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1238&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        
      },
      { id: 6,
        name: 'Health',
        description: 'These schemes aim to provide access to healthcare, improve the quality of healthcare services, and promote public health initiatives.',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1526392195523-1f40e4e78117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        
      },
      {
        id: 7,
        name: 'Energy schemes',
        description: 'These schemes aim to promote the use of renewable energy sources, improve energy efficiency, and provide access to energy for all.',
        href: '#',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1678292016811-023b015959f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        
  
      },
      {
        id: 8,
        name: 'Social welfare schemes',
        description: 'These schemes aim to provide financial assistance and support for the marginalized and disadvantaged sections of society, such as women, children, senior citizens, and people with disabilities.',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1595566155631-9301633fc86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        
  
      },
      {
        id: 9,
        name: 'Infrastructure schemes',
        description: 'These schemes aim to promote the development of physical infrastructure, such as roads, bridges, airports, and railways, to improve connectivity and support economic growth.',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1655080746278-be1b9a3a38ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        
  
      },
    // More categories...
  ]
  
  export default function Example() {
    return (
      <div className="bg-gradient-to-l from-[#565637] to-[#213124]  ">
        <div className=" py-16 px-4  sm:px-6 lg:max-w-8xl lg:px-5 pb-32 m-auto  ">
          <h2 className=" text-4xl font-semibold text-gray-900 pb-7 text-transparent border-b border-neutral-600 bg-clip-text bg-neutral-300 px-10">Browse government schemes by Category</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 rounded-lg  bg-black bg-opacity-25 p-10 pb-10 shadow-lg">
            {categories.map((product) => (
              <div key={product.id} className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out">
                <div className="relative ">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg  ">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center "
                    />
                  </div>
                  <div className="relative mt-4 ">
                    <h3 className="text-xl font-medium hover:underline text-gray-300">{product.name}</h3>
                    <p className="mt-1 text-sm h-20 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] text-gray-300">{product.description}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-70"
                    />
                    <p className="relative text-lg font-semibold  text-neutral-300">{product.name}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-neutral-200 py-2 px-8 text-sm font-medium text-gray-700 hover:bg-gray-200"
                  >
                    Browse<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
            
          </div><Pagination/>
        </div>
       
      </div>
    )
  }
  