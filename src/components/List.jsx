import React from "react";

const List = ({children}) => (
  <section className="overflow-y-scroll w-full pt-4 pb-7 lg:w-2/6 lg:h-auto flex flex-col lg:items-end items-center justify-center">
    <div className="h-48 lg:h-96 w-full flex flex-col lg:items-end items-center">
      {children}
    </div>
  </section>
);

export default List;
