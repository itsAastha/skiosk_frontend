import { PaperClipIcon } from "@heroicons/react/20/solid";
import Footer from "../components/Footer";

const posts = [
  {
    name: "Ministry Of Agriculture and Farmers Welfare",
    Link: "https://pmkisan.gov.in/Documents/RevisedPM-KISANOperationalGuidelines(English).pdf",
    category: {
      name: "agriculture",
      href: "#",
      color: "bg-rose-100 text-rose-800",
    },
    Eligibility:
      "All landholding farmers families, which have cultivable land holding in their names are eligible to get benefit under the scheme.",
    Benefits:
      "Financial benefit of Rs. 6000 per annum per family payable in three equal installments of Rs 2000 each, every four months.",
  },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Example() {
  return (
    <div className="min-h-screen">
        <div className="overflow-hidden bg-neutral-100 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-xl font-medium leading-6 text-gray-900">
            Pradhan Mantri Kisan Samman Nidhi
          </h3>
          <p className="mt-1 max-w-2xl text-base text-gray-500">Agriculture</p>
        </div>
        {posts.map((post) => (
                <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">
                      Name of the scheme
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                     {post.name}
                    </dd>
                  </div>
                  <div className="bg-neutral-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">
                      Eligibility
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                      {post.Eligibility}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">Benefits</dt>
                    <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                    {post.Benefits}
                    </dd>
                  </div>
                  <div className="bg-neutral-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">Tags</dt>
                    <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
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
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">Link</dt>
                    <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                      <a
                        className="text-green-600"
                        href={post.Link}
                      >{post.Link}
                      </a>
                    </dd>
                  </div>
                  <div className="bg-neutral-100 px-4 py-5 sm:gap-4 sm:px-6 mt-6 space-y-6 text-gray-300 pb-10 ">
                    <p className="mt-1 text-base  break-normal text-gray-900 ">
                      Objective: The scheme aims to supplement the financial needs of
                      all landholding farmers’ families in procuring various inputs to
                      ensure proper crop health and appropriate yields, commensurate
                      with the anticipated farm income as well as for domestic needs.
                      Under the Scheme an amount of Rs.6000/- per year is released by
                      the Central Government online directly into the bank accounts of
                      the eligible farmers under Direct Benefit Transfer mode, subject
                      to certain exclusions. ﻿ Benefits and Eligibility conditions All
                      land holding eligible farmer families (subject to the prevalent
                      exclusion criteria) are to avail of the benefits under this
                      scheme, as per the cabinet decision taken in May 2019. The
                      revised Scheme is expected to cover around 2 crores more
                      farmers, increasing the coverage of PM-KISAN to around 14.5
                      crore beneficiaries. Under the scheme, financial benefit has
                      been provided to all Small and Marginal landholder farmer
                      families with total cultivable holding upto 2 hectares with a
                      benefit of Rs.6000 per annum per family payable in three equal
                      installments, every four months. ﻿ Exclusion Categories The
                      following categories of beneficiaries of higher economic status
                      shall not be eligible for benefit under the scheme: All
                      Institutional Landholders. Farmer families in which one or more
                      of its members belong to following categories Former and present
                      holders of constitutional posts Former and present Ministers/
                      State Ministers and former/present Members of LokSabha/
                      RajyaSabha/ State Legislative Assemblies/ State Legislative
                      Councils,former and present Mayors of Municipal Corporations,
                      former and present Chairpersons of District Panchayats. All
                      serving or retired officers and employees of Central/ State
                      Government Ministries /Offices/Departments and its field units
                      Central or State PSEs and Attached offices /Autonomous
                      Institutions under Government as well as regular employees of
                      the Local Bodies (Excluding Multi Tasking Staff /Class IV/Group
                      D employees) All superannuated/retired pensioners whose monthly
                      pension is Rs.10,000/-or more (Excluding Multi Tasking Staff /
                      Class IV/Group D employees) of above category All Persons who
                      paid Income Tax in last assessment year Professionals like
                      Doctors, Engineers, Lawyers, Chartered Accountants, and
                      Architects registered with Professional bodies and carrying out
                      profession by undertaking practices. ﻿
                    </p>
                    <p className="mt-1 text-base break-normal text-gray-900 ">
                      Online - Via CSC Following are the prerequisites for the
                      enrollment process: Aadhaar Card Landholding paper Saving bank
                      account The VLE will fill the complete details of Farmer
                      registration details like, State, district, subdistrict block,
                      and village, key-in the Aadhaar number, Name of beneficiary,
                      category, Bank detail, Land Registration ID and Date of birth as
                      printed on aadhaar card for authentication.. The VLE will fill
                      the Land details like Survey/ Kahta No., Khasra no. and area of
                      land as per mention in land holding papers. Upload the
                      supporting document like Land, Aadhar, Bank passbook. Self
                      declaration accept and save the application form. After save the
                      application form make payment through CSC ID. Check the
                      Beneficiary status through Aadhar number
                    </p>
                    <p className="mt-1 text-base break-normal text-gray-900 ">
                      Indicative Documents Aadhaar Card Landholding papers Savings
                      Bank Account.{" "}
                    </p>
                  </div>
                </dl>
              </div>
              ))}
      
        
      </div>
      <Footer />
    </div>
  );
}
