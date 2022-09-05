import { useState } from "react";
import {Helmet} from "react-helmet";

import { useForm } from "react-hook-form";

export default function HoroscopePage() {
  const [chosenEmoji, setChosenEmoji] = useState('🌟');
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data["mood_of_day"] = chosenEmoji;
    console.log(data);
  };

  return (
    <div className="px-6 py-3 bg-white h-full">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Astro | Horoscope</title>
      </Helmet>
      <h1 className="text-5xl text-black font-semibold">Horoscope</h1>
      <h4 className="text-gray-500 my-2 mb-3">Add day wise horoscope</h4>
      <hr />
      <div className="mt-6">
        <form className="w-full max-w-6xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-between w-full space-x-6">
            <div className="w-1/2">
              <div className="flex flex-wrap -mx-3">
                {/* horoscope */}
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Zodiac Sign
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      name="zodiac"
                      value={"Aries"}
                      {...register('zodiacSign')}
                    >
                      <option value="Aries">Aries</option>
                      <option value="Taurus">Taurus</option>
                      <option value="Gemini">Gemini</option>
                      <option value="Cancer">Cancer</option>
                      <option value="Leo">Leo</option>
                      <option value="Virgo">Virgo</option>
                      <option value="Libra">Libra</option>
                      <option value="Scorpio">Scorpio</option>
                      <option value="Sagittarius">Sagittarius</option>
                      <option value="Capricon">Capricorn</option>
                      <option value="Aquarius">Aquarius</option>
                      <option value="Pisces">Pisces</option>
                    </select>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Date
                  </label>

                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                    <input
                      datepicker=""
                      type="date"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Select date"
                      {...register("luckyDate")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3  md:mb-0">
                  <label
                    className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Lucky Color
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    {...register("luckyColor")}
                  />
                </div>

                <div className="w-full md:w-1/3 px-3  md:mb-0">
                  <label
                    className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    id="grid-state"
                  >
                    Lucky Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    min={0}
                    max={9}
                    {...register("luckyNumber")}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3  md:mb-0">
                <label className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Lucky Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="time"
                  {...register("luckyTime")}
                />
              </div>
              <div className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                <label className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Love
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  rows={5}
                  {...register("love")}
                ></textarea>
              </div>
              <div className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                <label className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Carrer
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  rows={5}
                  {...register("career")}
                ></textarea>
              </div>
            </div>
            <div className="w-1/2 -mt-8">
              <div className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                <label className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Money
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  rows={5}
                  {...register("money")}
                ></textarea>
              </div>
              <div className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                <label className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Health
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  rows={5}
                  {...register("health")}
                ></textarea>
              </div>
              <div className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                <label className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Travel
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  rows={5}
                  {...register("travel")}
                ></textarea>
              </div>
              <div className="flex justify-end mt-6 mb-6">
                <button className="bg-blue-500 w-full sm:w-1/3 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
