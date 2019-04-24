import React from 'react'

const Pricing = () => (
  <article className="container">
    <h2 id="pricing" className="font-semibold my-8 text-4xl text-center">
      Pricing and payment
    </h2>
    <div className="flex flex-wrap">
      <section className="mx-auto overflow-hidden rounded sm:mb-6 sm:w-1/2 xl:w-1/4">
        <div className="flex flex-col h-full justify-between px-6 py-4 text-center">
          <div className="mb-3">
            <h3 className="font-bold text-gray-800 text-xl">Early Supporter License</h3>
            <p className="my-3 text-4xl text-center">
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
            className="block border-2 border-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white px-3 py-1 rounded shadow text-indigo-600 text-xl tracking-normal transition"
          >
            Get Discount!
          </a>
        </div>
      </section>
      <section className="mx-auto overflow-hidden rounded sm:mb-6 sm:w-1/2 xl:w-1/4">
        <div className="flex flex-col h-full justify-between px-6 py-4 text-center">
          <div>
            <h3 className="text-xl text-gray-800 font-bold">OSS Supporter License</h3>
            <p className="my-3 text-4xl text-center">
              $5<span className="text-gray-800 text-lg"> / month</span>
            </p>
            <p className="font-bold">For our supporters in 2018</p>
            <p className="text-base text-grey-darker">
              Single license Private and commercial usage Just become a $5{` `}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.patreon.com/kalessil"
              >
                Patron
              </a>
            </p>
            <small className="mt-2 inline-block">Use as long as staying a Patron</small>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/kalessil"
            className="block border-2 border-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white px-3 py-1 rounded shadow text-indigo-600 text-xl tracking-normal transition"
          >
            Become a Patron!
          </a>
        </div>
      </section>
      <section className="mx-auto overflow-hidden rounded sm:mb-6 sm:w-1/2 xl:w-1/4">
        <div className="flex flex-col h-full justify-between px-6 py-4 text-center">
          <div>
            <h3 className="text-xl text-gray-800 text-gray-800 font-bold">
              Personal License
            </h3>
            <p className="my-3 text-4xl text-center">
              $50<span className="text-gray-800 text-lg"> / year</span>
            </p>
            <p className="font-bold">For individuals</p>
            <p className="text-base text-grey-darker">
              Single 1-year license Private and commercial usage General support (5
              business days)
            </p>
            <small className="mt-2 inline-block">Free for PHP UGs leads</small>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/forms/MOCnGsapwE5r5oQn1"
            className="bg-light-blue-vivid-500 block border-2 border-light-blue-vivid-500 font-semibold hover:bg-light-blue-vivid-600 hover:border-light-blue-vivid-600 px-3 py-1 rounded shadow text-white text-xl tracking-normal transition"
          >
            Buy License!
          </a>
        </div>
      </section>
      <section className="mx-auto overflow-hidden rounded sm:mb-6 sm:w-1/2 xl:w-1/4">
        <div className="flex flex-col h-full justify-between px-6 py-4 text-center">
          <div>
            <div className="items-center inline-flex">
              <h3 className="text-xl text-gray-800 font-bold">
                Commercial&nbsp;License
              </h3>
              {` `}
              <span className="bg-indigo-500 leading-none ml-2 px-2 py-1 rounded-full text-white text-xs uppercase">
                New
              </span>
            </div>
            <p className="my-3 text-4xl text-center">
              $100<span className="text-gray-800 text-lg"> / year</span>
            </p>
            <p className="font-bold">For companies</p>
            <p className="text-base text-grey-darker">
              Volume 1-year licenses Commercial usage only Priority support (2 business
              days)
            </p>
            <small className="mt-2 inline-block">
              Volume-based discounts (buy 4, get 5)
            </small>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/forms/M9JJJVoPQBBbXQtX2"
            className="block border-2 border-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white px-3 py-1 rounded shadow text-indigo-600 text-xl tracking-normal transition"
          >
            Buy Licenses!
          </a>
        </div>
      </section>
    </div>
  </article>
)

export default Pricing
