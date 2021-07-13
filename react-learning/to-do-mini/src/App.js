import "./App.css";
import ToDos from "./components/ToDos";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

const appStyles = makeStyles({
  app: {
    marginTop: "20px",
  },
  addBtn: {
    marginLeft: "20px",
  },
  form: {
    display: "flex",
  },
  input: {
    width: "100%",
  },
});

function App(props) {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(["Finish This Todo", "Give exam"]);
  const classes = appStyles();

  return (
    <>
      <Navbar />
      <CssBaseline />

      <Container maxWidth="md" className={classes.app}>
        <div className={classes.form}>
          <Input
            className={classes.input}
            placeholder="Add ToDo"
            inputProps={{ "aria-label": "description" }}
            type="text"
            onChange={(e) => {
              if (e.target.value !== "") {
                setValue(e.target.value);
              }
            }}
            value={value}
          />

          <Button
            className={classes.addBtn}
            variant="contained"
            color="primary"
            onClick={() => {
              setTodos([...todos, value]);
              setValue("");
            }}
          >
            Add
          </Button>
        </div>

        <List>
          {todos.map((todo, index) => {
            if (todo !== "") {
              return (
                //
                <ToDos
                  key={index}
                  todo={todo}
                  setTodos={setTodos}
                  todos={todos}
                  index={index}
                />
              );
            }
          })}
        </List>
      </Container>
    </>
  );
}

export default App;
