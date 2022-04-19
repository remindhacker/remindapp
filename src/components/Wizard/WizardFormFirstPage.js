import React from "react";
import { Form, Input } from "usetheform";

export default function WizardFormFirstPage(props) {
  return (
    <Form name="page1" {...props}>
      <Input type="text" name="name" placeholder="Type your name..." />
      <Input type="text" name="lastname" placeholder="Type your last name..." />
      <button type="submit">Next Page</button>
    </Form>
  );
}