import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import styles from "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="Header">
            <div className="header-title">
              InstaBosch
            </div>
          </div>
        );
    }
}

export default Header;
