import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => (
  <button className="btn btn-dark" onClick={onClick}>
    {children}
  </button>
);
