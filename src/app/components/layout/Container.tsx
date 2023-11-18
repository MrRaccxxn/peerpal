import React, { ReactNode } from "react";

const Container = (props: { className?: string; children: ReactNode }) => {
  return (
    <div
      className={`container h-full max-w-6xl p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
