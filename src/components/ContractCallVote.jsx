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
const ContractCallVote = () => {
  const { doContractCall } = useConnect();

  function vote() {
    doContractCall({
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
    });
  }

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div>
      <p>Gebb via Smart Contract</p>
      <button className="Vote" onClick={() => vote("🍊")}>
        Gebb
      </button>
    </div>
  );
};

export default ContractCallVote;
