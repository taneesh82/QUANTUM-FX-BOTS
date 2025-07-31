import React, { useEffect } from "react";

export default function PaymentConfirmation() {
  useEffect(() => {
    // Optional: Redirect after 5 seconds automatically
    const timer = setTimeout(() => {
      window.location.href = "https://www.instagram.com/t_a_n_e_e_s_h1/";
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="payment-confirm-section">
      <h2>Payment Complete!</h2>
      <p>
        Please click the button below or wait to be redirected to our Instagram DM.<br />
        <strong>Send a message saying "Payment Done"</strong> and upload your payment screenshot and transaction ID for instant activation.
      </p>
      <a
        href="https://www.instagram.com/t_a_n_e_e_s_h1/"
        target="_blank"
        rel="noopener"
        className="btn-glow"
        style={{ marginTop: "2em" }}
      >
        Go to Instagram DM
      </a>
      <p style={{ marginTop: "1em", color: "#13f2fe" }}>
        <strong>Don't forget:</strong> Screenshot + Transaction ID required for activation!
      </p>
    </section>
  );
}