import React from "react";
import "./About.styles.css";
import AisakaImage from "./aisaka.jpeg";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="left-panel">
        {/* Add your anime girl image here */}
        <img src={AisakaImage} alt="Anime girl" />
      </div>
      <div className="right-panel">
        <h1>About だいたい</h1>
        <p>
          WAIINU
          トークンの世界へようこそ。そこでは、暗号通貨の遊び心のある側面を取り入れ、風変わりでミームにインスパイアされたデジタル資産でコミュニティを結び付けます!
          WAIINU は単なるトークンではありません。
          これは、進化し続けるブロックチェーン技術の世界をナビゲートするコミュニティ
          メンバーの顔に笑顔をもたらすことを目的とした気楽な運動です。
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
