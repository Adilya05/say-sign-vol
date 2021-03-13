console.log("saysign")
import React from "react";

function App() {
  return <SignUp_Profile {...SignUp_ProfileData} />;
}

export default App;


function SignUp_Profile(props) {
  const {
    signUp_Profile,
    profile,
    overlapGroup,
    circle,
    icon,
    input,
    box,
    icon2,
    x941,
    mobileSignal,
    wifi,
    overlapGroup3,
    rectangle,
    combinedShape,
    ellipse14,
    x2021031200211,
    overlapGroup4,
    vector,
    complete,
    inputEnableProps,
    inputEnable2Props,
  } = props;

  return (
    <div className="sign-up-profile-1" style={{ backgroundImage: `url(${signUp_Profile})` }}>
      <div className="overlap-group5">
        <div className="profile inter-bold-tuna-16px">{profile}</div>
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="circle" src={circle} />
          <div className="icon-back">
            <img className="icon" src={icon} />
          </div>
        </div>
        <div className="overlap-group2">
          <img className="input" src={input} />
          <InputEnable inputEnable={inputEnableProps.inputEnable} name={inputEnableProps.name} />
        </div>
        <div className="icon-edit">
          <img className="box" src={box} />
          <img className="icon-1" src={icon2} />
        </div>
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
        <div className="overlap-group1">
          <img className="ellipse-14" src={ellipse14} />
          <div className="x711-1"></div>
          <img className="x2021-03-12-0021-1" src={x2021031200211} />
        </div>
        <div className="iconcamera">
          <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <img className="vector" src={vector} />
          </div>
        </div>
      </div>
      <InputEnable
        inputEnable={inputEnable2Props.inputEnable}
        name={inputEnable2Props.name}
        className="input-enable-1"
      />
      <div className="button-big">
        <img className="complete" src={complete} />
      </div>
    </div>
  );
}


function InputEnable(props) {
  const { inputEnable, name, className } = props;

  return (
    <div className={`input-enable ${className || ""}`} style={{ backgroundImage: `url(${inputEnable})` }}>
      <div className="name inter-medium-tuna-14px">{name}</div>
    </div>
  );
}
