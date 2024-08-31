import Landing from "./Landing";

import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider>
      <Landing />
    </ThirdwebProvider>
  );
}

export default App;
