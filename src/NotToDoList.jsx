import React, { useState } from "react";
import Form from "./Form";
import TaskTableComponent from "./TaskTableComponent";
import Footer from "./Footer";

coconst[(taskList, setTaskList)] = useState([]);

const [totalHours, setTotalHours] = useState(0);
const [badHours, setBadHours] = useState(0);

const calculateTotalHours = (t1) => {
  const tHours = t1.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);
};

const bHours = t1.reduce((acc, item) => {
  if (item.type === "bad") {
    return acc + item.hr;
  } else return acc;
}, 0);

setTotalHours(tHours);

setBadHours(bHours);
