import { showConnect } from "@stacks/connect";

import { userSession } from "../user-session";

function authenticate() {
  showConnect({
    appDetails: {
      name: "Gebb",
      icon: window.location.origin + "/wmno.png",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  if (userSession.isUserSignedIn()) {
    return (
      <button className="w-full" onClick={disconnect}>
        Disconnect Wallet
      </button>
    );
  }
  return (
    <button className="w-full" onClick={authenticate}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
