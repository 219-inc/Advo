import React from "react";
import { Helmet } from "react-helmet";

import Switch from "@/components/Switch";

import { sections } from "@/constants";

function index() {
  return (
    <div className="bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Astro | Content</title>
      </Helmet>
      <div className="px-6 md:py-0 py-3">
        <h1 className="text-5xl text-black font-semibold">App Content</h1>
        <h4 className="text-gray-500 my-2 mb-3">
          Manage the content shown in app
        </h4>
      </div>
      <hr />
      <div className="h-full p-6 bg-gray-100">
        {/* <div className='flex flex-col md:flex-row justify-between space-y-3 md:space-x-6 md:space-y-0 w-full'> */}
        <div className="grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-2 gap-4 w-full">
          {sections.map((section) => (
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <p className="text-gray-500 my-2">{section.subTitle}</p>
              <div className="flex flex-col space-y-3 mt-2">
                {section.items.map((method) => (
                  <Switch method={method} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
