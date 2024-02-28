import { useConnect } from "@stacks/connect-react";
import { StacksMainnet } from "@stacks/network";
import {
  AnchorMode,
  FungibleConditionCode,
  PostConditionMode,
  createAssetInfo,
  makeContractFungiblePostCondition,
} from "@stacks/transactions";

import { userSession } from "../user-session";

const fisContractAddress = "SP31596TY1N33159BQCVEC9H16HP0KQ2VTD140157";

const wmnoContractAddress = "SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ";

const providers = {
  xverse: window?.XverseProviders?.StacksProvider,
  leather: window?.LeatherProvider,
};
const ContractCallVote = () => {
  const { doContractCall } = useConnect();

  /**
   *
   * @param {'xverse' | 'leather'} providerName
   */
  function vote(providerName) {
    doContractCall(
      {
        network: new StacksMainnet(),
        anchorMode: AnchorMode.OnChainOnly,
        contractAddress: fisContractAddress,
        contractName: "fis-com-fis-sev",
        functionName: "claim",
        functionArgs: [],
        postConditionMode: PostConditionMode.Deny,
        postConditions: [
          makeContractFungiblePostCondition(
            fisContractAddress,
            "fis-com-fis-sev",
            FungibleConditionCode.Equal,
            14206942069,
            createAssetInfo(
              wmnoContractAddress,
              "wrapped-nothing-v8",
              "wrapped-nthng"
            )
          ),
        ],
        onFinish: (data) => {
          console.log("onFinish:", data);
          window
            .open(`https://explorer.hiro.so/txid/${data.txId}`, "_blank")
            .focus();
        },
        onCancel: () => {
          console.log("onCancel:", "Transaction was canceled");
        },
      },
      providers[providerName]
    );
  }

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div className="w-full mt-12">
      <h2 className="text-center text-xl font-bold mb-2">
        Gebb via Smart Contract
      </h2>
      {!!providers.leather && (
        <button className="mt-4" onClick={() => vote("leather")}>
          Gebb leather
        </button>
      )}
      {!!providers.xverse && (
        <button className="mt-4" onClick={() => vote("xverse")}>
          Gebb Xverse
        </button>
      )}
      {!providers.leather && !providers.xverse && (
        <button className="mt-4" onClick={() => vote()}>
          Gebb
        </button>
      )}
    </div>
  );
};

export default ContractCallVote;
