import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => (
  <div className="row">
    <div className="col-sm-3">
      <button className="btn btn-dark" onClick={onClick}>
        {children}
      </button>
    </div>
  </div>
);
