import React, { useState } from "react";
import { InstagramLogo, DiscordLogo, TelegramLogo, Check } from "phosphor-react";
import "./ContactChoice.scss";

export default function ContactChoice() {
  // For click-to-copy feedback
  const [copied, setCopied] = useState({ discord: false, telegram: false });

  // Discord & Telegram usernames
  const discordUsername = "__taneesh_01";
  const telegramUsername = "@TaneeshFX";

  const handleCopy = (name, value) => {
    navigator.clipboard.writeText(value);
    setCopied((prev) => ({ ...prev, [name]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [name]: false })), 1600);
  };

  return (
    <section className="contact-choice-section">
      <h2>Contact Me On Your Preferred Platform</h2>
      <div className="contact-choice-buttons">
        <a
          href="https://www.instagram.com/t_a_n_e_e_s_h1/"
          target="_blank"
          rel="noopener"
          className="contact-choice-btn instagram"
        >
          <InstagramLogo size={32} /> Instagram
        </a>
        <button
          className="contact-choice-btn discord"
          onClick={() => handleCopy("discord", discordUsername)}
        >
          <DiscordLogo size={32} /> Discord:{" "}
          <span className="copy-username">
            {discordUsername}
            {copied.discord ? (
              <Check weight="bold" size={18} className="copied-icon" />
            ) : (
              <span className="copy-hint">Click to copy</span>
            )}
          </span>
        </button>
        <a
          href="https://t.me/+G3EYX770-dcxM2Zl"
          target="_blank"
          rel="noopener"
          className="contact-choice-btn telegram"
        >
          <TelegramLogo size={32} /> Telegram Group
        </a>
        <button
          className="contact-choice-btn telegram"
          onClick={() => handleCopy("telegram", telegramUsername)}
        >
          <TelegramLogo size={32} /> Telegram Username:{" "}
          <span className="copy-username">
            {telegramUsername}
            {copied.telegram ? (
              <Check weight="bold" size={18} className="copied-icon" />
            ) : (
              <span className="copy-hint">Click to copy</span>
            )}
          </span>
        </button>
      </div>
      <p className="contact-choice-tip">
        For Discord and Telegram username, click to copy and add/message directly. For Telegram group, join using the link above.
      </p>
    </section>
  );
}