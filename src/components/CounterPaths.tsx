import React, { useState, useEffect } from "react";

const CounterPaths: React.FC = () => {
  const [X, setX] = useState<number>(2);
  const [Y, setY] = useState<number>(2);
  const [paths, setPaths] = useState<number>(0);
  const [routes, setRoutes] = useState<string[]>([]);

  useEffect(() => {
    const validRoutes: string[] = [];
    countValidPaths(X, Y, "", 0, 0, validRoutes);
    setPaths(validRoutes.length);
    setRoutes(validRoutes);
  }, [X, Y]);

  const countValidPaths = (
    X: number,
    Y: number,
    currentRoute: string,
    consecutiveSteps: number,
    totalSteps: number,
    validRoutes: string[]
  ): void => {
    if (X === 0 && Y === 0) {
      validRoutes.push(currentRoute);
      return;
    }

    if (X > 0) {
      countValidPaths(
        X - 1,
        Y,
        currentRoute + "E",
        consecutiveSteps === 1 ? 0 : consecutiveSteps + 1,
        totalSteps + 1,
        validRoutes
      );
    }
    if (Y > 0) {
      countValidPaths(
        X,
        Y - 1,
        currentRoute + "N",
        consecutiveSteps === 2 ? 0 : consecutiveSteps + 1,
        totalSteps + 1,
        validRoutes
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-11/12">
      <div className="flex flex-col items-start">
        <label className="ml-2" htmlFor="X">
          X:{" "}
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          type="number"
          id="X"
          min={0}
          value={X}
          onChange={(e) => setX(parseInt(e.target.value))}
        />
      </div>
      <div className="flex flex-col items-start">
        <label className="ml-2" htmlFor="Y">
          Y:{" "}
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 "
          type="number"
          id="Y"
          min={0}
          value={Y}
          onChange={(e) => setY(parseInt(e.target.value))}
        />
      </div>
      <p className="mt-5">
        Number of valid paths: <span className="font-semibold">{paths}</span>{" "}
      </p>
      <p className="mt-5">
        Routes for each valid path:{" "}
        <span className="font-semibold">{routes.join(", ")}</span>{" "}
      </p>
    </div>
  );
};

export default CounterPaths;
