console.log("saysign")
import React from "react";

function App() {
  return <Options {...optionsData} />;
}

export default App;


function Options(props) {
  const {
    x941,
    mobileSignal,
    wifi,
    overlapGroup2,
    rectangle,
    combinedShape,
    vector,
    circle,
    icon,
    vector2,
    vector3,
    text,
    card,
    video,
    media,
    vector4,
    text2,
    media2,
    vector5,
    vector6,
    vector7,
    tabBar,
    vector8,
    vector9,
    vector10,
    vector11,
    circle2,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
    vector17,
  } = props;

  return (
    <div className="options">
      <div className="i-os-status">
        <img className="x941" src={x941} />
        <div className="right-side">
          <img className="mobile-signal" src={mobileSignal} />
          <img className="wifi" src={wifi} />
          <div className="battery">
            <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <img className="rectangle" src={rectangle} />
            </div>
            <img className="combined-shape" src={combinedShape} />
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <img className="vector" src={vector} />
        <img className="circle" src={circle} />
        <div className="icon-back">
          <img className="icon" src={icon} />
        </div>
      </div>
      <div className="search border-1px-mischka">
        <div className="iconsearch">
          <div className="overlap-group2-1">
            <img className="vector-3" src={vector2} />
            <img className="vector-4" src={vector3} />
          </div>
        </div>
        <div className="x-text sfprotext-regular-normal-manatee-17px">{text}</div>
      </div>
      <div className="flex-row">
        <div className="item-card">
          <div className="overlap-group3">
            <img className="card" src={card} />
            <div className="video roboto-bold-new-car-18px">{video}</div>
            <img className="media" src={media} />
            <div className="card-border border-1px-mischka"></div>
            <img className="vector-5" src={vector4} />
          </div>
        </div>
        <div className="item-card-1">
          <div className="overlap-group4">
            <div className="text roboto-bold-new-car-18px">{text2}</div>
            <img className="media" src={media2} />
            <div className="card-border border-1px-mischka"></div>
            <img className="vector-6" src={vector5} />
            <img className="vector-7" src={vector6} />
            <img className="vector-8" src={vector7} />
          </div>
        </div>
      </div>
      <div className="overlap-group1">
        <div className="tab-bar" style={{ backgroundImage: `url(${tabBar})` }}>
          <div className="overlap-group2-2">
            <div className="tab">
              <div className="overlap-group3-1">
                <div className="icongrid">
                  <div className="flex-col">
                    <img className="vector-1" src={vector8} />
                    <img className="vector-2" src={vector9} />
                  </div>
                  <div className="flex-col-1">
                    <img className="vector-1" src={vector10} />
                    <img className="vector-2" src={vector11} />
                  </div>
                </div>
                <img className="circle-1" src={circle2} />
              </div>
            </div>
            <div className="block"></div>
            <div className="tab-1">
              <div className="carbonuser-profile">
                <div className="flex-col-2">
                  <img className="vector-9" src={vector12} />
                  <img className="vector-10" src={vector13} />
                </div>
                <div className="flex-col-3">
                  <img className="vector-11" src={vector14} />
                  <img className="vector-12" src={vector15} />
                  <img className="vector-13" src={vector16} />
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
        <img className="vector-14" src={vector17} />
      </div>
    </div>
  );
}

