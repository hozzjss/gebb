import { whiteList } from "../util/isWL";

import { useMemo } from "react";
import { userSession } from "../user-session";
import { useEffect, useState, useCallback } from "react";
import { Configuration, InfoApi } from "@stacks/blockchain-api-client";

export function CheckWL() {
  const [blockHeight, setBlockHeight] = useState(0);
  const getBlockHeight = useCallback(async () => {
    const config = new Configuration();
    const infoApi = new InfoApi(config);
    const info = await infoApi.getCoreApiInfo();
    setBlockHeight(info.stacks_tip_height);
  }, []);

  useEffect(() => {
    getBlockHeight();
  }, [getBlockHeight]);

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
  const isGEBHeight = useMemo(() => blockHeight >= 141_017, [blockHeight]);
  return (
    <div className="flex flex-col my-4 w-full">
      {mainnetAddress && (
        <div className="mt-4">
          {isGEBHeight ? (
            <p className="font-bold text-2xl">
              FREE FOR ALL CALL AS MUCH AS YOU WANT GAS WAR MFS 🔥🔥🔥🔥
            </p>
          ) : (
            <p>
              {isListed
                ? "listed gebb once 💜"
                : "not listed gebb after block 141,017 😢 or choose different wallet"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
