import React from "react";
import { userData } from "./userData";

class UserMenu extends React.Component {
  render() {
    const { name, avatar_url } = this.context;
    return (
      <div className="menu">
        <span className="menu__greeting">{name}</span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

UserMenu.contextType = userData;

export default UserMenu;
