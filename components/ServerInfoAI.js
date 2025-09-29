import { useState } from "react";
import styles from "../styles/minecraft.module.css";

const fetchServerInfo = async (server) => {
  const res = await fetch(
    `https://api.mcsrvstat.us/2/${server}`
  );
  if (!res.ok) return null;
  return await res.json();
};

export default function ServerInfoAI() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setResponse("");
    if (input.toLowerCase().includes("ai")) {
      setResponse(
        "Our AI uses natural language processing and connects to Minecraft server APIs to help you find real-time data. Ask about any server or general Minecraft questions!"
      );
      setLoading(false);
      return;
    }
    // Assume input is a server IP or domain
    const info = await fetchServerInfo(input);
    if (!info || !info.online) {
      setResponse("Could not find server or server is offline.");
    } else {
      setResponse(
        `Server: ${input}\nStatus: ${info.online ? "Online" : "Offline"}\nPlayers: ${info.players?.online || 0}/${info.players?.max || "?"}\nVersion: ${info.version || "Unknown"}\nMOTD: ${info.motd?.clean?.join(" ") || "None"}`
      );
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        className={styles.minecraftInput}
        type="text"
        placeholder="Ask about a server or the AI itself..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={styles.minecraftButton} onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>
      <pre className={styles.minecraftResponse}>{response}</pre>
    </div>
  );
}