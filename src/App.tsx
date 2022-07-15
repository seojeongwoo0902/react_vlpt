import React from "react";
import Counter from "./Counter";
import Greetings from "./Greetings";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import ReducerSampleOne from "./ReducerSampleOne";
import { SampleProvider } from "./SampleContext";

const App = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;
  //return <Greetings name="parker" mark="?" onClick={onClick} />;
  //return <Counter></Counter>;
  return <ReducerSampleOne />;
  // return (
  //   <SampleProvider>
  //     <ReducerSample />
  //   </SampleProvider>
  // );
};

export default App;
