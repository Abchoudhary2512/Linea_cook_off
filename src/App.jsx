import Landing from "./Landing";

import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  const contractAddress = '0x2B15063A6F8a11d18404C801F295b1d19dCC8574';
  return (
    <ThirdwebProvider>
      <Landing contractAddress={contractAddress} />
    </ThirdwebProvider>
  );
}

export default App;
