import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AppSideBar from "../components/AppSideBar/AppSideBar";
import CreateProposalScreen from "../components/CreateProposalScreen/CreateProposalScreen";
import DummyScreen from "../components/DummyScreen/DummyScreen";
import ErrorView, { ErrorType } from "../components/ErrorView/ErrorView";
import OverviewScreen from "../components/OverviewScreen/OverviewScreen";
import ProposalDetailScreen from "../components/ProposalDetailScreen/ProposalDetailScreen";
import ProposalScreen from "../components/ProposalScreen/ProposalScreen";
import WalletConnectingScreen from "../components/WalletConnectingScreen/WalletConnectingScreen";
import { useWallet, ConnectionStatus } from "../providers/WalletProvider";
import AppRoutes from "./AppRoutes";

const AppSideBarOutlet: React.FC = () => {
  return (
    <AppSideBar>
      <Outlet />
    </AppSideBar>
  );
};

const AppRouter: React.FC = () => {
  const wallet = useWallet();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppSideBarOutlet />}>
          <Route path={AppRoutes.Overview} element={<OverviewScreen />} />
          <Route path={AppRoutes.Dummy} element={<DummyScreen />} />
          <Route path={AppRoutes.Proposals} element={<ProposalScreen />} />
          <Route
            path={AppRoutes.NewProposal}
            element={<CreateProposalScreen />}
          />
          <Route
            path={AppRoutes.ProposalDetail}
            element={<ProposalDetailScreen />}
          />
        </Route>

        <Route path="*" element={<ErrorView type={ErrorType.NotFound} />} />
      </Routes>

      {wallet.status === ConnectionStatus.Connecting && (
        <WalletConnectingScreen />
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
