import { whiteList } from "../util/isWL";

import { useMemo } from "react";
import { userSession } from "../user-session";

export function CheckWL() {
  const mainnetAddress = useMemo(() => {
    if (userSession.isUserSignedIn()) {
      return userSession?.loadUserData()?.profile.stxAddress.mainnet || "";
    }
  }, []);

  const isListed = useMemo(() => {
    if (mainnetAddress) {
      return whiteList.has(mainnetAddress);
    }
  }, [mainnetAddress]);
  return (
    <div className="flex flex-col my-4 w-full">
      {mainnetAddress && (
        <div className="mt-4">
          {isListed
            ? "listed gebb once 💜"
            : "not listed gebb after block 141,017 😢 or choose different wallet"}
        </div>
      )}
    </div>
  );
}
