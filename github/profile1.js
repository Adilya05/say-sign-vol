console.log("saysign")
import React from "react";

function App() {
  return <SignUp_Profile {...SignUp_ProfileData} />;
}

export default App;


function SignUp_Profile(props) {
  const {
    signUp_Profile,
    x941,
    mobileSignal,
    wifi,
    overlapGroup2,
    rectangle,
    combinedShape,
    overlapGroup,
    circle,
    icon,
    profile,
    ellipse14,
    x7111,
    overlapGroup3,
    vector,
    box,
    icon2,
    inputAvailable,
    circle2,
    status,
    icon3,
    complete,
    inputEnableProps,
    inputEnable2Props,
  } = props;

  return (
    <div className="sign-upprofile" style={{ backgroundImage: `url(${signUp_Profile})` }}>
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
      <div className="flex-row">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="circle" src={circle} />
          <div className="icon-back">
            <img className="icon" src={icon} />
          </div>
        </div>
        <div className="profile inter-bold-tuna-16px">{profile}</div>
      </div>
      <div className="overlap-group1">
        <img className="ellipse-14" src={ellipse14} />
        <img className="x711-1" src={x7111} />
      </div>
      <div className="flex-row-1">
        <div className="iconcamera">
          <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
            <img className="vector" src={vector} />
          </div>
        </div>
        <div className="icon-edit">
          <img className="box" src={box} />
          <img className="icon-1" src={icon2} />
        </div>
      </div>
      <InputEnable inputEnable={inputEnableProps.inputEnable} seveneleven={inputEnableProps.seveneleven} />
      <InputEnable
        inputEnable={inputEnable2Props.inputEnable}
        seveneleven={inputEnable2Props.seveneleven}
        className="input-enable-1"
      />
      <div className="input-available" style={{ backgroundImage: `url(${inputAvailable})` }}>
        <img className="circle-1" src={circle2} />
        <p className="status inter-medium-tuna-14px">{status}</p>
        <div className="rectangle-1"></div>
        <div className="icon-dropdown">
          <img className="icon-2" src={icon3} />
        </div>
      </div>
      <div className="button-big">
        <img className="complete" src={complete} />
      </div>
    </div>
  );
}


function InputEnable(props) {
  const { inputEnable, seveneleven, className } = props;

  return (
    <div className={`input-enable ${className || ""}`} style={{ backgroundImage: `url(${inputEnable})` }}>
      <div className="seven-eleven inter-medium-tuna-14px">{seveneleven}</div>
    </div>
  );
}




