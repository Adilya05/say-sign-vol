console.log("saysign")
import React from "react";

function App() {
  return <TemplateAnswers {...templateAnswersData} />;
}

export default App;


function TemplateAnswers(props) {
  const {
    templateAnswers,
    union,
    x941,
    mobileSignal,
    wifi,
    overlapGroup1,
    rectangle,
    combinedShape,
    overlapGroup,
    icon,
    vector,
    vector2,
    text,
    media,
    unnamed51,
    vector22,
    vector3,
    vector6,
    vector7,
    unnamed141,
    please,
    media2,
    unnamed71,
    unnamed161,
    hello,
    unnamed1,
    vector5,
    unnamed131,
    place,
    media3,
    media4,
    unnamed61,
    unnamed151,
    goodbye,
    tabBar,
    vector4,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
  } = props;

  return (
    <div className="template-answers" style={{ backgroundImage: `url(${templateAnswers})` }}>
      <div className="flex-row">
        <img className="union" src={union} />
        <div className="i-os-status">
          <img className="x941" src={x941} />
          <div className="right-side">
            <img className="mobile-signal" src={mobileSignal} />
            <img className="wifi" src={wifi} />
            <div className="battery">
              <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <img className="rectangle" src={rectangle} />
              </div>
              <img className="combined-shape" src={combinedShape} />
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <img className="icon" src={icon} />
      </div>
      <div className="search border-1px-mischka">
        <div className="iconsearch">
          <div className="overlap-group1-1">
            <img className="vector" src={vector} />
            <img className="vector-8" src={vector2} />
          </div>
        </div>
        <div className="x-text sfprotext-regular-normal-blueberry-17px">{text}</div>
      </div>
      <div className="flex-row-1">
        <div className="flex-col">
          <div className="item-card">
            <div className="overlap-group-1">
              <img className="media-1" src={media} />
              <div className="card-border border-1px-mischka"></div>
              <img className="unnamed-5-1" src={unnamed51} />
              <img className="vector-2" src={vector22} />
              <img className="vector-3" src={vector3} />
              <img className="vector-6" src={vector6} />
              <img className="vector-7" src={vector7} />
              <img className="unnamed-14-1" src={unnamed141} />
              <div className="frame-3">
                <div className="please inter-semi-bold-black-17px">{please}</div>
              </div>
            </div>
          </div>
          <div className="item-card-1">
            <div className="overlap-group-1">
              <img className="media-1" src={media2} />
              <div className="card-border border-1px-mischka"></div>
              <img className="unnamed-7-1" src={unnamed71} />
              <img className="unnamed-16-1" src={unnamed161} />
              <div className="hello inter-semi-bold-black-17px">{hello}</div>
            </div>
          </div>
        </div>
        <div className="flex-col-1">
          <div className="item-card-2">
            <div className="overlap-group3">
              <div className="card-border border-1px-mischka"></div>
              <img className="unnamed-1" src={unnamed1} />
              <img className="vector-5" src={vector5} />
              <img className="unnamed-13-1" src={unnamed131} />
              <div className="place inter-semi-bold-black-17px">{place}</div>
            </div>
            <img className="media" src={media3} />
          </div>
          <div className="item-card-3">
            <div className="overlap-group-1">
              <img className="media-1" src={media4} />
              <div className="card-border border-1px-mischka"></div>
              <img className="unnamed-6-1" src={unnamed61} />
              <img className="unnamed-15-1" src={unnamed151} />
              <div className="goodbye inter-semi-bold-black-17px">{goodbye}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-bar" style={{ backgroundImage: `url(${tabBar})` }}>
        <div className="overlap-group5">
          <div className="tab">
            <div className="icongrid">
              <div className="flex-col-2">
                <img className="vector-1" src={vector4} />
                <img className="vector-4" src={vector8} />
              </div>
              <div className="flex-col-3">
                <img className="vector-1" src={vector9} />
                <img className="vector-4" src={vector10} />
              </div>
            </div>
          </div>
          <div className="tab-1">
            <div className="carbonuser-profile">
              <div className="flex-col-4">
                <img className="vector-9" src={vector11} />
                <img className="vector-10" src={vector12} />
              </div>
              <div className="flex-col-5">
                <img className="vector-11" src={vector13} />
                <img className="vector-12" src={vector14} />
                <img className="vector-13" src={vector15} />
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
        <img className="vector-14" src={vector16} />
      </div>
    </div>
  );
}
