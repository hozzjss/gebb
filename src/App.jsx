import "./App.css";
import { CheckWL } from "./components/CheckWL";
import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";

function App() {
  return (
    <>
      <div>
        <img src="/wmno.png" className="logo" alt="Vite logo" />
      </div>

      <h2 className="font-bold text-center text-2xl mt-10">GEB $WMNO8</h2>
      <CheckWL />
      {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
      <ConnectWallet />

      {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
      <ContractCallVote />
    </>
  );
}

export default App;
