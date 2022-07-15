import "./App.css";
import { useState } from "react";

const zooPreferences = {
  "0111": "旭山動物園",
  "1111": "円山動物園",
  "0011": "ズーラシア",
  "1101": "野毛山動物園",
  "1110": "京都市動物園",
  "0101": "多摩動物公園",
  "1000": "埼玉子ども動物公園",
  "1001": "東武動物公園",
  "0010": "千葉市動物公園",
  "0100": "安佐動物公園",
  "1011": "長崎バイオパーク",
  "0110": "ネオパークオキナワ",
  "1100": "Zoológico de Luján",
  "0001": "San Diego Zoo",
  "0000": "Zoo Negara Malaysia",
  "1010": "Currumbin Wildlife Sanctuary",
};

const zooInfo = {
  "旭山動物園": [
    "日本一有名な？動物園\n園内隅々まで楽しめるよ",
    "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/",
    "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/zuroku/arctic/d056202_d/img/001.jpg"
  ],
  "円山動物園": [
    "アクセス良し！",
    "https://www.city.sapporo.jp/zoo/",
    "https://www.city.sapporo.jp/zoo/images/yoyakufuyou.jpg"
  ],
  "ズーラシア": [
    "毎年年パス買ってます！！\n是非是非是非、園内広いよ。",
    "https://www.hama-midorinokyokai.or.jp/zoo/zoorasia/",
    "https://www.hama-midorinokyokai.or.jp/zoo/zoorasia/assets_c/2022/06/9f04e36ec59525dc0ad41dade10770fcca4868ac-thumb-2000x1000-142867.jpg"
  ],
  "野毛山動物園": [
    "無料！",
    "https://www.hama-midorinokyokai.or.jp/zoo/nogeyama/",
    "https://www.hama-midorinokyokai.or.jp/zoo/nogeyama/assets_c/2022/06/ad8ec131026c69eb73c61bebc64599a16b5c3ab1-thumb-2000x1000-142769.jpg"
  ],
  "京都市動物園": [
    "ゴリラやチンパンジー見るならここ！\nよくケンカしてるよ",
    "https://www5.city.kyoto.jp/zoo/",
    "https://www5.city.kyoto.jp/zoo/assets/images/top/visitor-fee.jpg"
  ],
  "多摩動物公園": [
    "オランウータン見るならここ！\n芸能人お忍びで行きがち",
    "https://www.tokyo-zoo.net/zoo/tama/",
    "https://www.tokyo-zoo.net/Encyclopedia/Species/Y.BORUNEOORAU-TANN_1023.jpg"
  ],
  "埼玉子ども動物公園": [
    "クオッカはここか、オーストラリアの島でしか見れない！",
    "https://www.parks.or.jp/sczoo/",
    "http://www.parks.or.jp/sczoo/guide/files/630/000630/att_0000005.jpg"
  ],
  "東武動物公園": [
    "ホワイトタイガーかわいすぎ！\n天使だよー",
    "https://www.tobuzoo.com/",
    "https://www.tobuzoo.com/fs/3/2/8/4/_/________01.png"
  ],
  "千葉市動物公園": [
    "レッサーパンダが有名だけど、総合点高めで、結構おすすめ。",
    "https://www.city.chiba.jp/zoo/",
    "https://www.city.chiba.jp/zoo/images/midokoro-newface.jpg"
  ],
  "安佐動物公園": [
    "めちゃくちゃおすすめ。\nどの動物も近い。",
    "http://www.asazoo.jp/",
    "http://www.asazoo.jp/605abbddba4893ab746e7ec53086185484a154a3.jpg"
  ],
  "長崎バイオパーク": [
    "YouTube人気！\nカピバラ天国！",
    "http://www.biopark.co.jp/",
    "http://www.biopark.co.jp/images/fade/fade_img02.jpg"
  ],
  "ネオパークオキナワ": [
    "ショーがおもしろい！\n根源的な恐怖な場所あり。",
    "https://www.neopark.co.jp/",
    "https://www.neopark.co.jp/wp-content/themes/neopark/timthumb.php?src=https://www.neopark.co.jp/wp-content/uploads/2020/07/Bird-Performance.png&w=850&h=567&q=80&zc=1&cc=e7f4e7"
  ],
  "Zoológico de Luján": [
    "ライオンが異常なほどたくさんいる！",
    "https://www.zoolujan.com/",
    "https://i0.wp.com/sekaiissyu.com/wp-content/uploads/2017/05/eye_LUJAN.jpg?w=728&ssl=1"
  ],
  "San Diego Zoo": [
    "世界一大きい動物園\n死ぬ前に三度は行きたい。",
    "https://sandiegozoowildlifealliance.org/",
    "https://zoo.sandiegozoo.org/sites/default/files/styles/home_safari_gradient/public/2022-01/crazy_about_cats_home_tile.jpg?itok=xsfyoCYU"
  ],
  "Zoo Negara Malaysia": [
    "観光地から近い！\n園内にたくさんいるオオトカゲは野生です。",
    "https://www.zoonegaramalaysia.my/",
    "https://www.zoonegaramalaysia.my/images/image3.jpg"
  ],
  "Currumbin Wildlife Sanctuary": [
    "ザ・オーストラリアの動物園\nカンガルーはもれなく放し飼い。",
    "https://currumbinsanctuary.com.au/",
    "https://www.traveldonkey.jp/blog/wp-content/uploads/2020/11/CWS_Entrance.jpg"
  ],
};

function App() {
  const [preference1, setPreference1] = useState();
  const [preference2, setPreference2] = useState();
  const [preference3, setPreference3] = useState();
  const [preference4, setPreference4] = useState();
  const [selectedZooName, setSlectedZooName] = useState("");
  const [selectedZooDetails, setSelectedZooDetails] = useState("");
  const [selectedZooURL, setSelectedZooURL] = useState("");
  const [selectedZooImage, setSelectedZooImage] = useState("");



  const dicideZoo = () => {
    const userSelectedPreference = preference1 + preference2 + preference3 + preference4;
    if (!preference1 || !preference2 || !preference3 || !preference4) {
      alert("ちゃんとラジオボタン選ぼうぜー");
      return;
    }

    for (let preference in zooPreferences) {
      if (preference === userSelectedPreference) {
        setSlectedZooName(zooPreferences[preference]);
        setSelectedZooDetails(zooInfo[zooPreferences[preference]][0]);
        setSelectedZooURL(zooInfo[zooPreferences[preference]][1]);
        setSelectedZooImage(zooInfo[zooPreferences[preference]][2]);

      }
    }
  };

  const DisplayText = ({ msg }) => {
    const texts = msg.split(/(\n)/).map((item, index) => {
      return (
        <div key={index}>
          {item.match(/\n/) ? <br /> : item}
        </div>
      );
    });
    return <div>{texts}</div>;
  };

  const preference1Change = e => setPreference1(e.target.value);
  const preference2Change = e => setPreference2(e.target.value);
  const preference3Change = e => setPreference3(e.target.value);
  const preference4Change = e => setPreference4(e.target.value);

  return (
    <div className="App">
      <h1>ここにGO！後藤田のおすすめ動物園</h1>
      <h2>あなたが行くべき動物園を提示します。<br />今週末行ってきて下さい。</h2>
      <div className="radioPreference">
        <label>
          <input
            type="radio"
            name="preference1"
            value="0"
            onChange={preference1Change}
            checked={preference1 === '0'}
          />
          色んな動物見たい
        </label>
        <label>
          <input
            type="radio"
            name="preference1"
            value="1"
            onChange={preference1Change}
            checked={preference1 === '1'}
          />
          面白い動物見たい
        </label>
      </div>
      <div className="radioPreference">
        <label>
          <input
            type="radio"
            name="preference2"
            value="0"
            onChange={preference2Change}
            checked={preference2 === '0'}
          />
          たくさん歩きたい
        </label>
        <label>
          <input
            type="radio"
            name="preference2"
            value="1"
            onChange={preference2Change}
            checked={preference2 === '1'}
          />
          コンパクトに楽しみたい
        </label>
      </div>
      <div className="radioPreference">
        <label>
          <input
            type="radio"
            name="preference3"
            value="0"
            onChange={preference3Change}
            checked={preference3 === '0'}
          />
          ドキドキしたい
        </label>
        <label>
          <input
            type="radio"
            name="preference3"
            value="1"
            onChange={preference3Change}
            checked={preference3 === '1'}
          />
          ノンビリしたい
        </label>
      </div>
      <div className="radioPreference">
        <label>
          <input
            type="radio"
            name="preference4"
            value="0"
            onChange={preference4Change}
            checked={preference4 === '0'}
          />
          挑戦したい
        </label>
        <label>
          <input
            type="radio"
            name="preference4"
            value="1"
            onChange={preference4Change}
            checked={preference4 === '1'}
          />
          置きにいきたい
        </label>
      </div>

      <button className="btn btn-default" type="button" onClick={dicideZoo}>
        Go!!
      </button>
      <div>
        <a href={selectedZooURL} target="_blank">{selectedZooName}</a>
        <DisplayText msg={selectedZooDetails} />
        {selectedZooImage && <img src={selectedZooImage} alt="動物園画像" />}

      </div>
    </div>
  );
}

export default App

