const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    
    readingTime: '6 min',
  },
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    
    readingTime: '6 min',
  },
  
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    
    readingTime: '4 min',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    
    readingTime: '11 min',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent publications</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
