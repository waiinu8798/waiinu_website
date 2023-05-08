import React from "react";
import Claim from "../../components/Claim";
import "./MainContent.styles.css";

import waiinuImage from "./waiinu-image.jpeg";

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="description">
        <h2>WAIINUについて</h2>
        <p>
          WAIINU（ワイフイヌ）は、ワイフの世界に触発された分散型暗号通貨です。
          コミュニティに参加して、WAIINU革命の一員になりましょう！
        </p>
      </section>
      <Claim />
      <img
        className="waiinu-image"
        src={waiinuImage}
        alt="WAIINU illustration"
      />
      <section className="info-cards">
        {/* Add as many cards as you like */}
        <div className="card">
          <h3>トークノミクス</h3>
          <p>
            WAIINUは、合計供給量が69兆4200億トークンのミームコインです。
            各ウォレットは最大10億トークンを請求できます。WAIINUのユニークなトークノミクスで楽しみましょう！
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
