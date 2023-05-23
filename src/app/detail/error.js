"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log({ error });
  }, [error]);
  return (
    <div>
      Error 0<button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
