console.log("saysign")
import React from "react";

function App() {
  return <SignIn2 {...SignIn2Data} />;
}

export default App;


function SignIn2(props) {
  const {
    signIn2,
    saySign,
    forgotPassword,
    signIn,
    icon,
    circle,
    overlapGroup1,
    icon2,
    signIn3,
    x941,
    mobileSignal,
    wifi,
    overlapGroup12,
    rectangle,
    combinedShape,
    text2,
    signUpHere,
    inputEnableProps,
    inputEnable2Props,
  } = props;

  return (
    <div className="sign-in-2 smart-layers-pointers ">
      <div className="overlap-group">
        <img className="sign-in-2 smart-layers-pointers " src={signIn2} />
        <h1 className="say-sign inter-bold-new-car-40px">{saySign}</h1>
        <div className="forgot-password inter-bold-blue-12px">{forgotPassword}</div>
        <div className="sign-in inter-semi-bold-tuna-18px">{signIn}</div>
        <InputEnable inputEnable={inputEnableProps.inputEnable} text1={inputEnableProps.text1} />
        <InputEnable
          inputEnable={inputEnable2Props.inputEnable}
          text1={inputEnable2Props.text1}
          className="input-enable-1"
        />
        <div className="icon-eye">
          <img className="icon" src={icon} />
        </div>
        <img className="circle" src={circle} />
        <div className="icon-back">
          <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="icon-1" src={icon2} />
          </div>
        </div>
        <div className="button-big">
          <img className="sign-in-1" src={signIn3} />
        </div>
        <div className="i-os-status">
          <img className="x941" src={x941} />
          <div className="right-side">
            <img className="mobile-signal" src={mobileSignal} />
            <img className="wifi" src={wifi} />
            <div className="battery">
              <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup12})` }}>
                <img className="rectangle" src={rectangle} />
              </div>
              <img className="combined-shape" src={combinedShape} />
            </div>
          </div>
        </div>
        <div className="text-2 inter-medium-tuna-14px">{text2}</div>
        <div className="sign-up-here inter-bold-blue-14px">{signUpHere}</div>
      </div>
    </div>
  );
}


function InputEnable(props) {
  const { inputEnable, text1, className } = props;

  return (
    <div className={`input-enable ${className || ""}`} style={{ backgroundImage: `url(${inputEnable})` }}>
      <div className="text-1 inter-medium-spun-pearl-14px">{text1}</div>
    </div>
  );
}
