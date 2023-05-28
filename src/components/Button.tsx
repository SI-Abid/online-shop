import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      {/* add item and remove item button  */}
      <div className="row">
        <div className="col-sm-3">
          <button className="btn btn-primary" onClick={onClick}>
            {children}
          </button>
        </div>
      </div>
    </div>
  );
};
