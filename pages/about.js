import styles from "../styles/minecraft.module.css";

export default function About() {
  return (
    <div className={styles.minecraftBg}>
      <h1 className={styles.minecraftTitle}>About Our AI</h1>
      <div className={styles.minecraftText}>
        <p>
          Our AI chatbot helps you find information about Minecraft servers and answers your general questions.<br/>
          Powered by advanced natural language processing and real-time data, it can:
        </p>
        <ul>
          <li>Check server status, player count, version, MOTD</li>
          <li>Guide you with Minecraft tips and tricks</li>
          <li>Explain how the AI works</li>
        </ul>
        <p>
          <b>How does it work?</b><br/>
          The AI uses public APIs and its own knowledge base to answer your questions.
          It's designed to be friendly and easy to use!
        </p>
      </div>
    </div>
  );
}