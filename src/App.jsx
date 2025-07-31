import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactChoice from "./components/ContactChoice";
import PaymentConfirmation from "./components/PaymentConfirmation";
// ...other imports

<Router>
  <Routes>
    <Route path="/" element={<MainLandingPage />} />
    <Route path="/contact-choice" element={<ContactChoice />} />
    <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
    {/* ...other routes */}
  </Routes>
</Router>