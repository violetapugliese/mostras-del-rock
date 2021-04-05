import React from "react";

const Main = ({children}) => (
  <main className="h-3/4 xl:px-60 lg:px-24 lg:flex lg:items-start lg:justify-between bgImg pt-24">
    {children}
  </main>
);

export default Main;
