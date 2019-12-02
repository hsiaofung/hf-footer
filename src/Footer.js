import React, { Component } from "react";
import "./css/style.css";
import "./css/footer.css";

export default class Footer extends Component {
  render() {
    const {
      socialmediatitle,
      socialmediabtns,
      row1,
      row2
    } = this.props.footerData;

    return (
      <div id="footer">
        <div className="content">
          <div className="icon-logo-graphic"></div>
          <p className="follow-us">{socialmediatitle}</p>
          <p className="footer-icons">
            {socialmediabtns.map((data, index) => (
              <a
                className="iconLink"
                href={data.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`icon ${data.iconclass}`} />
              </a>
            ))}
          </p>
          {/* 第一列 */}
          <div className="footer-group">
            {row1 &&
              row1.map((data, index) => (
                <div className="footer-group-item" key={index}>
                  {data.url ? (
                    <a
                      href={data.url}
                      dangerouslySetInnerHTML={{
                        __html: data.name
                      }}
                    />
                  ) : (
                    <div
                      href={data.url}
                      dangerouslySetInnerHTML={{
                        __html: data.name
                      }}
                    />
                  )}
                </div>
              ))}
          </div>
          {/* 第二列 */}
          <p className="footer-group">
            {row2 &&
              row2.map((data, index) => (
                <div key={index} className={"footer-group-item"}>
                  {data.url ? <a href={data.url}>{data.name}</a> : data.name}
                </div>
              ))}
          </p>
        </div>
      </div>
    );
  }
}
