import { makeStyles, Button } from "@material-ui/core";
import React from "react";
import { view } from "@risingstack/react-easy-state";
import levelone from "../assets/level-one.json";
import { handleSubmitClick } from "./SubmitBoxes";
import SubmitBoxes from "./SubmitBoxes";
import state from "../store/Store";
import Lives from "../components/Lives";

const useStyles = makeStyles((theme) => ({
  stylesMainOuter: {
    fontFamily: "Raleway",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fillerSpace: {
    display: "flex",
    flexDirection: "row",
    height: "100px",
  },
  nextBtn: {
    margin: "23px",
    width: "100px",
    height: "50px",
    borderRadius: "15px",
  },
  lives: {
    position: "absolute",
    justifyContent: "flex-end",
    right: 10
  },
  container: {
    display: "flex",
    flexDirection: "row"
  }
}));

function InputContainer() {
  const style = useStyles();

  return (
    <div className={style.stylesMainOuter}>
      {state.level != 1 ? (
        <div className={style.container}>
           <SubmitBoxes />
           <div className={style.lives}>
            <Lives />
          </div>
          </div>
        
      ) : (
        <div className={style.fillerSpace}>
          <Button
            variant="contained"
            className={style.nextBtn}
            onClick={() => {
              state.instruct = state.instruct + 1;
              state.input = state.ans[state.instruct].array;
              handleSubmitClick();
            }}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default view(InputContainer);
