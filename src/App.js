import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
const footerData = {
  socialmediatitle: "關注我們",
  socialmediabtns: [
    {
      iconclass: "icon-facebook",
      url: "https://www.facebook.com/emphasis.hk/"
    },
    {
      iconclass: "icon-instagram",
      url: "https://www.instagram.com/emphasisjewellery/?hl=zh-hk"
    }
  ],
  row1: [
    {
      name: "分店位置",
      url: "/tc/store-locator"
    },
    {
      name:
        "<a href='/tc/contact-us'>聯絡我們</a> <a href='tel:+85221923228'>+852 2192 3228</a>",
      url: null
    },
    {
      name: "貨品退換指引",
      url: "/tc/experience/return-exchange"
    }
  ],
  row2: [
    {
      name: "使用條款",
      url: "//member.emphasis.com/hk/tc/terms-of-use"
    },
    {
      name: "私隱政策",
      url: "//member.emphasis.com/hk/tc/privacy-policy"
    },
    {
      name: "Cookie政策",
      url: "//member.emphasis.com/hk/tc/cookie-policy"
    },
    {
      name: "條款及細則",
      url: "//member.emphasis.com/hk/tc/terms-and-conditions"
    },
    {
      name: "© 2019 周生生集團國際有限公司",
      url: null
    },
    {
      name: "粤ICP备12061196号-2",
      url: null
    }
  ]
};
function App() {
  return (
    <div className="App">
      <div>lorem</div>
      <Footer
        socialmediatitle={footerData.socialmediatitle}
        socialmediabtns={footerData.socialmediabtns}
        row1={footerData.row1}
        row2={footerData.row2}
      />
    </div>
  );
}

export default App;
