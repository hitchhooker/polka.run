import { useState } from 'react';

export interface Network {
  url: string;
  color: string;
  description: string;
}

export interface Networks {
  [key: string]: Network;
}

interface NetworkSwitcherProps {
  networks: Networks;
  defaultNetwork: string;
}

export function NetworkSwitcher({ networks, defaultNetwork }: NetworkSwitcherProps) {
  const [selectedNetwork, setSelectedNetwork] = useState(defaultNetwork);

  const handleNetworkChange = (newNetwork: string) => {
    setSelectedNetwork(newNetwork);
  };

  if (!networks[selectedNetwork]) {
    return (
      <div role="alert">
        <h2>Error</h2>
        <p>Invalid network selected</p>
      </div>
    );
  }

  return (
    <div className="font-sans h-screen flex flex-col">
      <header className="bg-gray-100 p-4 flex items-center justify-between shadow-md">
        <select 
          value={selectedNetwork} 
          onChange={(e) => handleNetworkChange(e.target.value)}
          className="w-200px p-2 border rounded"
        >
          {Object.entries(networks).map(([key, network]) => (
            <option key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </option>
          ))}
        </select>
        <a
          href={networks[selectedNetwork].url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open in new tab
        </a>
      </header>
      <main className="flex-grow">
        <iframe
          src={networks[selectedNetwork].url}
          className="w-full h-full border-none"
          title={`${selectedNetwork} UI`}
        />
      </main>
      <footer className="bg-gray-100 p-2 text-center text-sm text-gray-600">
        Community-hosted version - with easier geoblocks
      </footer>
    </div>
  );
}

export default NetworkSwitcher;
