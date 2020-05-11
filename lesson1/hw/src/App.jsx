import React from "react";
import Header from "./Header";
import { userData } from "./userData";

class App extends React.Component {
  state = {
    userData: {
      name: "Nikola Tesla",
      avatar_url: "https://avatars3.githubusercontent.com/u10001"
    }
  };
  render() {
    return (
      <div className="page">
        <userData.Provider value={this.state.userData}>
          <Header />
        </userData.Provider>
      </div>
    );
  }
}
export default App;