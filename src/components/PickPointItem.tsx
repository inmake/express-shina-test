import React from "react";
import PickPointBudgetItem from "./PickPointBudgetItem";

interface PickPoint {
  address: string;
  budgets: string[];
  selected: boolean;
  handleClick: any;
}

function PickPointItem({ address, budgets, selected, handleClick }: PickPoint) {
  return (
    <button
      className={[
        "w-full text-left p-4 bg-[#3A3D3E] hover:bg-[#404749] space-y-4 transition-colors",
        selected && "bg-[#404749]",
      ].join(" ")}
      onClick={handleClick}
    >
      <p className="text-xl">{address}</p>
      <div className="flex space-x-2">
        {budgets.map((budget, index) => (
          <PickPointBudgetItem key={index} budget={budget} />
        ))}
      </div>
    </button>
  );
}

export default PickPointItem;
