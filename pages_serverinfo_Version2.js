import ServerInfoAI from "../components/ServerInfoAI";
import styles from "../styles/minecraft.module.css";

export default function ServerInfoPage() {
  return (
    <div className={styles.minecraftBg}>
      <h1 className={styles.minecraftTitle}>Ask the AI About Minecraft Servers</h1>
      <ServerInfoAI />
    </div>
  );
}