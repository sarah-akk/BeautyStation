import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Users from "./pages/Users/Users";
import UserPayments from "./pages/Users/UserPayments";
import UserOffers from "./pages/Users/UserOffers";
import UserPaymentDetails from "./pages/Users/UserPaymentDetails";
import UserOfferDetails from "./pages/Users/UserOfferDetails";
import Subsections from "./pages/Sections/Subsections";
import AddSubsection from "./pages/Sections/AddSubsection";
import Sections from "./pages/Sections/Sections";
import Offers from "./pages/Offers/Offers";
import ServiceProviders from "./pages/ServiceProvider/ServiceProvider";
import ServiceProviderDetails from "./pages/ServiceProvider/serviceProviderDetails";
import OfferDetails from "./pages/Offers/OfferDetails";
import ProvidersRequest from "./pages/ProvidersRequest/ProvidersRequest";
import ServicesRequests from "./pages/ServicesRequests/ServicesRequests";
import IDphoto from "./pages/ProvidersRequest/IDphoto/IDphoto";
import BookingRequests from "./pages/BookingRequests/BookingRequests";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profits from "./pages/Profits/Profits";
import WithdrawalRequests from "./pages/WithdrawalRequests/WithdrawalRequests";
import Support from "./pages/Support/Support";
import Response from "./pages/Support/Response";
import Settings from "./pages/Settings/Settings";
import SocialInformations from "./pages/SocialInformations/SocialInformations";
// import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/Auth/Login";
import ForgitPassword from "./pages/Auth/ForgitPassword";
import Code from "./pages/Auth/Code";
import ChangePassword from "./pages/Settings/ChangePassword";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Splash />} />

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <Route path="auth" element={<Login />} />
          <Route path="/forget" element={<ForgitPassword />} />
          <Route path="/code" element={<Code />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="home" element={<Home />}>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="dashboard" element={<Dashboard />} />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="users" element={<Users />} />

            <Route path="users/:id/userpayments" element={<UserPayments />} />
            <Route path="users/:id/useroffers" element={<UserOffers />} />
            <Route
              path="users/:id/userpayments/:id"
              element={<UserPaymentDetails />}
            />
            <Route
              path="users/:id/useroffers/:id"
              element={<UserOfferDetails />}
            />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="sections/:id/subsections" element={<Subsections />} />
            <Route path="subsections" element={<Subsections />} />
            <Route path="subsections/add" element={<AddSubsection />} />

            <Route path="sections" element={<Sections />} />
            <Route
              path="sections/:id/subsections/add"
              element={<AddSubsection />}
            />
            <Route path="sections/:id/subsections/:id">
              <Route path="offers">
                <Route index element={<Offers />} />
              </Route>
              <Route path="offers/:id" element={<OfferDetails />} />
              <Route
                path="offers/:id/serviceProviderDetails"
                element={<ServiceProviderDetails />}
              />
            </Route>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="serviceProviders" element={<ServiceProviders />} />
            <Route
              path="serviceProviders/:id"
              element={<ServiceProviderDetails />}
            />
            <Route path="serviceProviders/:id/offers" element={<Offers />} />
            <Route
              path="serviceProviders/:id/offers/:id"
              element={<OfferDetails />}
            />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="providersRequest" element={<ProvidersRequest />} />
            <Route
              path="providersRequest/:id/serviceProviderDetails"
              element={<ServiceProviderDetails />}
            />
            <Route path="providersRequest/:id/IDphoto" element={<IDphoto />} />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="servicesRequests" element={<ServicesRequests />} />
            <Route
              path="servicesRequests/:id/serviceProviderDetails"
              element={<ServiceProviderDetails />}
            />
            <Route
              path="servicesRequests/:id/OfferDetails"
              element={<OfferDetails />}
            />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="bookingRequests" element={<BookingRequests />} />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="profits" element={<Profits />} />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="withdrawal" element={<WithdrawalRequests />} />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="support" element={<Support />} />
            <Route path="support/:id/response" element={<Response />} />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="support" element={<Support />} />
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="settings" element={<Settings />} />
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Route path="socialInformations" element={<SocialInformations />} />
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}
export default App;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
