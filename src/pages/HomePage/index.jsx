import { useState, useEffect } from "react";

export default function HomePage() {
  const [token, setToken] = useState("");

  return (
    <div className="h-full bg-white px-8 py-6">
      <h1 className="text-5xl text-gray-800" onClick={() => {}}>
        Welcome back to{" "}
        <span className="font-bold text-black">
          Advo's
          <br /> admin
        </span>{" "}
        environment
      </h1>
      <div className="max-w-48 items-center">
        <span className="max-w-48">{token}</span>
      </div>
    </div>
  );
}
