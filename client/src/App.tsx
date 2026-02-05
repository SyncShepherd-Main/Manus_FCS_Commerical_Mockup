import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CommercialFoundationRepairHub from "./pages/CommercialFoundationRepairHub";
import WarehouseFoundationRepair from "./pages/WarehouseFoundationRepair";
import RetailFoundationRepair from "./pages/RetailFoundationRepair";
import OfficeBuildingFoundationRepair from "./pages/OfficeBuildingFoundationRepair";
import ApartmentFoundationRepair from "./pages/ApartmentFoundationRepair";
import ChurchFoundationRepair from "./pages/ChurchFoundationRepair";
import RestaurantFoundationRepair from "./pages/RestaurantFoundationRepair";
import IndustrialFoundationRepair from "./pages/IndustrialFoundationRepair";
import HealthcareFoundationRepair from "./pages/HealthcareFoundationRepair";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/commercial-foundation-repair"} component={CommercialFoundationRepairHub} />
      <Route path={"/commercial/warehouse-foundation-repair"} component={WarehouseFoundationRepair} />
      <Route path={"/commercial/retail-foundation-repair"} component={RetailFoundationRepair} />
      <Route path={"/commercial/office-building-foundation-repair"} component={OfficeBuildingFoundationRepair} />
      <Route path={"/commercial/apartment-foundation-repair"} component={ApartmentFoundationRepair} />
      <Route path={"/commercial/church-foundation-repair"} component={ChurchFoundationRepair} />
      <Route path={"/commercial/restaurant-foundation-repair"} component={RestaurantFoundationRepair} />
      <Route path={"/commercial/industrial-foundation-repair"} component={IndustrialFoundationRepair} />
      <Route path={"/commercial/healthcare-foundation-repair"} component={HealthcareFoundationRepair} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
