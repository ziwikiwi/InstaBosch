import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import styles from "./Input.scss";

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="Input">
            <Button> month
            </Button>
            <Button> date
            </Button>
            <Button> day
            </Button>
          </div>
        );
    }
}

export default Input;
