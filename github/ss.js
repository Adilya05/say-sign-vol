console.log("saysign")
import React from "react";

function App() {
  return <SignIn {...signInData} />;
}

export default App;


function SignIn(props) {
  const {
    signIn,
    instagram1,
    x941,
    mobileSignal,
    wifi,
    overlapGroup2,
    rectangle,
    combinedShape,
    x9412,
    signIn2,
    logIn,
    unnamed191,
  } = props;

  return (
    <div className="sign-in" style={{ backgroundImage: `url(${signIn})` }}>
      <img className="x-instagram-1" src={instagram1} />
      <div className="flex-col">
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
          <img className="x941-1" src={x9412} />
        </div>
        <div className="overlap-group">
          <div className="button"></div>
          <div className="button-1"></div>
          <div className="sign-in inter-extra-bold-black-16px">{signIn2}</div>
        </div>
        <div className="overlap-group1">
          <div className="log-in inter-extra-bold-black-16px">{logIn}</div>
        </div>
        <img className="unnamed-19-1" src={unnamed191} />
      </div>
    </div>
  );
}



