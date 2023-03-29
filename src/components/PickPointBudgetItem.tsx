import React from "react";

function PickPointBudgetItem({ budget }: { budget: string }) {
  return <div className="bg-[#282C2D] text-sm px-3 py-1 rounded">{budget}</div>;
}

export default PickPointBudgetItem;
