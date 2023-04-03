import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: " What kind of government schemes and programs are available for villagers in India??",
    answer:
      "The Indian government offers a range of schemes and programs for villagers, covering various aspects of life, such as agriculture, healthcare, education, finance, and more. Some of the popular schemes include Pradhan Mantri Jan Dhan Yojana, Pradhan Mantri Fasal Bima Yojana, Pradhan Mantri Awas Yojana, Ayushman Bharat Yojana, and more.",
  },
  {
    question: "How can I find out which government schemes and programs are relevant to me?",
    answer:
      "Our website provides comprehensive information on all the government schemes and programs available to villagers in India. We have categorized them based on their type of assistance, making it easy for you to find the ones that are relevant to your needs. You can also use our search bar to find specific schemes or programs.",
  },
  {
    question: "How can I apply for government schemes and programs?",
    answer:
      "The application process for government schemes and programs varies depending on the scheme. Some schemes allow online applications, while others require physical applications. We have provided detailed information on each scheme, including the application process, eligibility criteria, and documents required. You can also contact your local government representative or the concerned department for further assistance.",
  },
  {
    question: "Do I need to pay any fee to apply for government schemes and programs?",
    answer:
      "No, you do not need to pay any fee to apply for government schemes and programs. These schemes and programs are designed to provide financial and other types of assistance to those in need, and they are provided by the government free of cost.",
  },
  {
    question: "Can I apply for multiple government schemes and programs at the same time?",
    answer:
      "Yes, you can apply for multiple government schemes and programs at the same time, as long as you meet the eligibility criteria for each scheme. However, it is essential to ensure that you do not violate any rules or regulations while applying for multiple schemes.",
  },
  {
    question: "How can I check the status of my application for government schemes and programs?",
    answer:
      "The process of checking the status of your application varies depending on the scheme. Some schemes allow you to check the status online, while others require you to contact the concerned department. We have provided detailed information on each scheme, including the process of checking the status of your application.",
  },
];


export default function Example() {
    return (
      <div className="bg-gradient-to-r from-[#565637] to-[#213124]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-30 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-300">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-300">
                          <span className="text-base font-semibold leading-7 ">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300 py-5">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  