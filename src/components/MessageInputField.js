import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageField";
import MessageSubmitButton from "./MessageSubmitButton";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null);
  const [text, setText] = useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1} item>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10} item>
          <MessageField
            name={name}
            setText={setText}
            text={text}
            inputEl={inputEl}
          />
        </Grid>
        <Grid xs={1} item>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
