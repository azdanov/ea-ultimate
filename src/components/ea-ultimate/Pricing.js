import React from 'react'

const Pricing = () => (
  <article className="container">
    <h2 id="pricing" className="my-8 font-semibold text-center text-4xl">
      Pricing and payment
    </h2>
    <div className="flex flex-wrap">
      <section className="md:w-1/2 lg:w-1/4 mx-auto sm:mb-6 rounded overflow-hidden">
        <div className="px-6 py-4 text-center h-full flex flex-col justify-between">
          <div className="mb-3">
            <h3 className="font-bold text-gray-800 text-xl">Early Supporter License</h3>
            <p className="text-center text-4xl my-3">
              $30
              <span className="text-lg text-gray-800"> / year</span>
            </p>
            <p className="font-bold">For our supporters in 2017</p>
            <p className="text-grey-darker text-base">
              Single 1-year license Private and commercial usage.
            </p>
            <small className="inline-block mt-2">
              Request processing up to 5 business days
            </small>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/forms/MOCnGsapwE5r5oQn1"
            className="block tracking-normal border-2 border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white font-semibold text-xl py-1 px-3 rounded shadow transition"
          >
            Get Discount!
          </a>
        </div>
      </section>
      <section className="md:w-1/2 lg:w-1/4 mx-auto sm:mb-6 rounded overflow-hidden">
        <div className="px-6 py-4 text-center h-full flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-gray-800 text-xl">OSS Supporter License</h3>
            <p className="text-center text-4xl my-3">
              $5<span className="text-lg text-gray-800"> / month</span>
            </p>
            <p className="font-bold">For our supporters in 2018</p>
            <p className="text-grey-darker text-base">
              Single license Private and commercial usage Just become a $5{` `}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.patreon.com/kalessil"
              >
                Patron
              </a>
            </p>
            <small className="inline-block mt-2">
              License available after confirmed billing
              <span className="block">Use as long as staying a Patron</span>
            </small>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/kalessil"
            className="block tracking-normal border-2 border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white font-semibold text-xl py-1 px-3 mt-5 rounded shadow transition"
          >
            Become a Patron!
          </a>
        </div>
      </section>
      <section className="md:w-1/2 lg:w-1/4 mx-auto sm:mb-6 rounded overflow-hidden md:shadow-2xl">
        <div className="px-6 py-4 text-center h-full flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-gray-800 text-gray-800 text-xl">
              Personal License
            </h3>
            <p className="text-center text-4xl my-3">
              $50<span className="text-lg text-gray-800"> / year</span>
            </p>
            <p className="font-bold">For individuals</p>
            <p className="text-grey-darker text-base">
              Single 1-year license Private and commercial usage General support (5
              business days)
            </p>
            <small className="inline-block mt-2">Free for PHP UGs leads</small>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/forms/MOCnGsapwE5r5oQn1"
            className="block tracking-normal bg-light-blue-vivid-500 hover:bg-light-blue-vivid-600 text-white font-semibold text-xl py-1 px-3 rounded shadow transition"
          >
            Buy License!
          </a>
        </div>
      </section>
      <section className="md:w-1/2 lg:w-1/4 mx-auto sm:mb-6 rounded overflow-hidden">
        <div className="px-6 py-4 text-center h-full flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center">
              <h3 className="font-bold text-gray-800 text-xl">
                Commercial&nbsp;License
              </h3>
              {` `}
              <span className="text-white leading-none rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs ml-2">
                New
              </span>
            </div>
            <p className="text-center text-4xl my-3">
              $100<span className="text-lg text-gray-800"> / year</span>
            </p>
            <p className="font-bold">For companies</p>
            <p className="text-grey-darker text-base">
              Volume 1-year licenses Commercial usage only Priority support (2 business
              days)
            </p>
            <small className="inline-block mt-2">
              Volume-based discounts (buy 4, get 5)
            </small>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/forms/M9JJJVoPQBBbXQtX2"
            className="block tracking-normal border-2 border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white font-semibold text-xl py-1 px-3 mt-5 rounded shadow transition"
          >
            Buy Licenses!
          </a>
        </div>
      </section>
    </div>
  </article>
)

export default Pricing
