import styles from "./Banner.module.css";
import banner from "./banner.png";

function Banner({ img, color }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url("/src/Components/Banner/banner.pngbanner-${img}.png")` }}
    >
      <div className={styles.gradient} style={{ background: `${color}` }}>
        
      </div>
    </div>
  );
}

export default Banner;
