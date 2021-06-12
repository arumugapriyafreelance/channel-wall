import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import './style.css';


export default function CheckboxesGroup(props) {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className="checkbox-wrapper">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.value}
                onChange={handleChange(props.value)}
                value={props.value}
              />
            }
            label={props.label}
          />
        </FormGroup>
    </div>
  );
}
