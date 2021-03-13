console.log("saysign")
import React from "react";

function App() {
  return <Scanningtranslation {...scanningtranslationData} />;
}

export default App;


function Scanningtranslation(props) {
  const {
    x941,
    backdropBase,
    background,
    vector,
    vector2,
    vector3,
    vector4,
    circle,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    x2021031200241,
    text1,
    vector11,
    overlapGroup2,
    icon,
    mobileSignal,
    wifi,
    overlapGroup1,
    rectangle,
    combinedShape,
    tapToReply,
  } = props;

  return (
    <div className="scanning-translation">
      <div className="overlap-group">
        <div className="media"></div>
        <div className="i-os-status">
          <img className="x941" src={x941} />
        </div>
        <div className="backdrop">
          <div className="rectangle-2162"></div>
          <img className="backdrop-base" src={backdropBase} />
        </div>
        <div className="tab-bar">
          <div className="overlap-group1">
            <img className="background" src={background} />
            <div className="tab">
              <div className="icongrid">
                <div className="flex-col">
                  <img className="vector-1" src={vector} />
                  <img className="vector-2" src={vector2} />
                </div>
                <div className="flex-col-1">
                  <img className="vector-1" src={vector3} />
                  <img className="vector-2" src={vector4} />
                </div>
              </div>
            </div>
            <div className="tab-1">
              <img className="circle" src={circle} />
            </div>
            <div className="tab-2">
              <div className="carbonuser-profile">
                <div className="flex-row">
                  <img className="vector" src={vector5} />
                  <div className="flex-col-2">
                    <img className="vector-3" src={vector6} />
                    <img className="vector-4" src={vector7} />
                    <img className="vector-5" src={vector8} />
                  </div>
                </div>
                <img className="vector-6" src={vector9} />
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
        <img className="vector-7" src={vector10} />
        <img className="x2021-03-12-0024-1" src={x2021031200241} />
        <h1 className="text-1 inter-semi-bold-black-24px">{text1}</h1>
        <img className="vector-8" src={vector11} />
        <div className="navigation-bar">
          <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <img className="icon" src={icon} />
          </div>
          <div className="right-side">
            <img className="mobile-signal" src={mobileSignal} />
            <img className="wifi" src={wifi} />
            <div className="battery">
              <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <img className="rectangle" src={rectangle} />
              </div>
              <img className="combined-shape" src={combinedShape} />
            </div>
          </div>
        </div>
        <img className="tap-to-reply" src={tapToReply} />
      </div>
    </div>
  );
}
