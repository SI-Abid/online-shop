import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => (
  <button className="btn btn-dark m-1" onClick={onClick}>
    {children}
  </button>
);
