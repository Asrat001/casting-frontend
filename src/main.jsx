
import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {QueryClientProvider,QueryClient} from 'react-query'

const queryClient= new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <QueryClientProvider client={queryClient}>
     <App/>
    </QueryClientProvider>
   
  
);