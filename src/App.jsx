import { useState } from 'react';
import reactLogo from './assets/react.svg'
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {

  const [lawyers, setLawyers] = useState([]);

  const getLawyers = async () => {
    const lawyers = await API.get("restAuthApi", "/list-lawyers?type=personal");
    setLawyers(lawyers);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 h-screen">
      <div className='flex flex-row space-x-8'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="w-20 animate-bounce" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="w-20 animate-bounce" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl my-2 font-semibold text-white">Vite + React</h1>
      <div className="flex flex-col my-2 justify-center items-center space-y-3">
        <button onClick={getLawyers} className="bg-gray-800 border-gray-600 rounded py-2 px-4 w-48 text-gray-500 font-semibold hover:text-gray-400 hover:shadow-lg">Create lawyer</button>
      </div>
      <div className="flex flex-col my-2 justify-center items-center space-y-3">
        {lawyers.map(lawyer => (
          <div key={lawyer.id} className="flex flex-col space-y-2">
            <p className="text-gray-600 font-semibold">{lawyer.name}</p>
            <p className="text-gray-600 font-semibold">{lawyer.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
