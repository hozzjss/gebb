import { validateStacksAddress } from "@stacks/transactions";
import { useState } from "react";
import { whiteList } from "../util/isWL";

import { useMemo } from "react";

export function CheckWL() {
  const [val, setVal] = useState("");
  const isValid = useMemo(() => validateStacksAddress(val), [val]);
  const isListed = useMemo(() => {
    if (isValid) {
      return whiteList.has(val);
    }
  }, [isValid, val]);
  return (
    <div className="flex flex-col my-4 w-full">
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="yo stx address"
        className="p-1 px-2"
      />
      <div className="mt-4">
        {val && !isValid && <p>invalid address 🤬</p>}
        {val && isValid ? (
          <p>
            {isListed
              ? "listed gebb once 💜"
              : "not listed gebb after block 141,017 😢"}
          </p>
        ) : null}
      </div>
    </div>
  );
}
