import React, { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  name: string;
  price: number;
  quantity: number;
  children?: ReactNode;
}

export const Product: React.FC<Props> = ({ name, price, quantity, children }: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Price: {price}</h6>
          <p className="card-text">Quantity: {quantity}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
