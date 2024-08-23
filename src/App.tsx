import NetworkSwitcher, { Networks } from './components/NetworkSwitcher';

const networks: Networks = {
  polkadot: {
    url: 'https://polkadot.js.org/apps/?rpc=wss://rpc.ibp.network/polkadot',
    color: 'bg-pink-600',
    description: 'Polkadot network',
  },
  kusama: {
    url: 'https://polkadot.js.org/apps/?rpc=wss://rpc.ibp.network/kusama',
    color: 'bg-purple-600',
    description: 'Kusama network - Polkadot\'s canary network',
  },
  acala: {
    url: 'https://apps.acala.network/',
    color: 'bg-blue-600',
    description: 'Acala network - DeFi hub of Polkadot',
  },
  karura: {
    url: 'https://apps.karura.network/',
    color: 'bg-yellow-600',
    description: 'Karura network - DeFi hub of Kusama',
  },
  astar: {
    url: 'https://portal.astar.network/astar/dashboard',
    color: 'bg-indigo-600',
    description: 'Astar network - Smart contract platform for Polkadot',
  },
  moonbeam: {
    url: 'https://apps.moonbeam.network/moonbeam',
    color: 'bg-blue-400',
    description: 'Moonbeam network - Ethereum-compatible smart contract platform',
  },
  interlay: {
    url: 'https://interbtc.polka.run/',
    color: 'bg-green-600',
    description: 'Interlay network - Bitcoin bridge for Polkadot',
  },
  kintsugi: {
    url: 'https://kintsugi.polka.run/',
    color: 'bg-orange-600',
    description: 'Kintsugi network - Bitcoin bridge for Kusama',
  },
};

const defaultNetwork = 'kusama';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <NetworkSwitcher networks={networks} defaultNetwork={defaultNetwork} />
      </main>
    </div>
  );
}

export default App;
