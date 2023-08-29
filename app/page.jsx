import React, { Suspense } from "react";
import TodosList from "./todos/TodosList";

function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading 1</p>}>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading 1</p>}>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
