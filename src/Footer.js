import React, { Component } from "react";
import "./css/footer.css";
import footerImage from "./img/icon-logo-graphic.svg";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="content">
          <img className="icon-logo-graohic" src={footerImage}></img>
          <p className="follow-us">追蹤我們</p>
          <a
            class="iconLink"
            href="https://www.facebook.com/emphasis.hk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon icon-facebook"></span>
          </a>
          <a
            class="iconLink"
            href="https://www.instagram.com/emphasisjewellery/?hl=zh-hk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon icon-instagram"></span>
          </a>
        </div>
      </div>
    );
  }
}
