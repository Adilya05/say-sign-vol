console.log("saysign")
import React from "react";

function App() {
  return <Type {...typeData} />;
}

export default App;


function Type(props) {
  const {
    type,
    x941,
    mobileSignal,
    wifi,
    overlapGroup3,
    rectangle,
    combinedShape,
    overlapGroup,
    icon,
    overlapGroup32,
    vector,
    inputAvailable,
    status,
    icon2,
    inputEnable,
    businessAccount,
    inputEnable2,
    personalAccount,
  } = props;

  return (
    <div className="type" style={{ backgroundImage: `url(${type})` }}>
      <div className="i-os-status">
        <img className="x941" src={x941} />
        <div className="right-side">
          <img className="mobile-signal" src={mobileSignal} />
          <img className="wifi" src={wifi} />
          <div className="battery">
            <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <img className="rectangle" src={rectangle} />
            </div>
            <img className="combined-shape" src={combinedShape} />
          </div>
        </div>
      </div>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="icon-back">
          <img className="icon" src={icon} />
        </div>
      </div>
      <div className="overlap-group1">
        <div className="iconcamera">
          <div className="overlap-group3-1" style={{ backgroundImage: `url(${overlapGroup32})` }}>
            <img className="vector" src={vector} />
          </div>
        </div>
        <div className="input-available" style={{ backgroundImage: `url(${inputAvailable})` }}>
          <p className="status inter-medium-tuna-14px">{status}</p>
          <div className="rectangle-1"></div>
          <div className="icon-dropdown">
            <img className="icon-1" src={icon2} />
          </div>
        </div>
      </div>
      <div className="input-enable" style={{ backgroundImage: `url(${inputEnable})` }}>
        <div className="business-account inter-medium-tuna-14px">{businessAccount}</div>
      </div>
      <div className="overlap-group2">
        <div className="frame-4"></div>
        <div className="input-enable-1" style={{ backgroundImage: `url(${inputEnable2})` }}>
          <div className="personal-account inter-medium-tuna-14px">{personalAccount}</div>
        </div>
      </div>
    </div>
  );
}


