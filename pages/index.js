import Link from "next/link";
import styles from "../styles/minecraft.module.css";

export default function Home() {
  return (
    <div className={styles.minecraftBg}>
      <h1 className={styles.minecraftTitle}>AI Minecraft Helper</h1>
      <p className={styles.minecraftText}>
        Welcome! This site uses AI to answer your questions about Minecraft servers and the world of AI.<br/>
        <Link href="/about">Learn about the AI</Link>
      </p>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/serverinfo">
          <button className={styles.minecraftButton}>Ask the AI!</button>
        </Link>
      </div>
    </div>
  );
}