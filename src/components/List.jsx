import React from "react";

const List = ({children}) => (
  <section className="overflow-y-scroll w-full pt-8 md:w-2/6 h-48 md:h-80 xl:h-96 flex flex-col md:items-end items-center justify-center">
    <div className="h-48 md:h-80 xl:h-96 w-full flex flex-col md:items-end items-center">
      {children}
    </div>
  </section>
);

export default List;
