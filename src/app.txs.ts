import { Toaster } from "@/components/ui/toaster";

import { Toaster as Sonner } from "@/components/ui/sonner";

import { Tooltip Provider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";

import DonateFood from "./pages/DonateFood";

import CompostGuide from "./pages/CompostGuide";

import RecyclePlastic from "./pages/RecyclePlastic";

import Dashboard from "./pages/Dashboard";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (

<QueryClientProvider client={queryClient}>

<TooltipProvider>

<Toaster />

<Sonner />

<BrowserRouter>

<Routes>

<Route path="/" element={<Index />} />

<Route path="/donate-food" element={<DonateFood />} />

<Route path="/compost-guide" element={<CompostGuide />} />

<Route path="/recycle-plastic" element={<RecyclePlastic />} />

<Route path="/dashboard" element={<Dashboard />} />

{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

<Route path="*" element={<NotFound />} />

</Routes>

</BrowserRouter>

</TooltipProvider>

</QueryClientProvider>

);

export default App;





