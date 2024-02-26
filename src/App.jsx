import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";

function App() {
  return (
    <>
      <div>
        <img src="/wmno.png" className="logo" alt="Vite logo" />
      </div>

      <h2>GEB $WMNO8</h2>

      {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
      <ConnectWallet />

      {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
      <ContractCallVote />
    </>
  );
}

export default App;
