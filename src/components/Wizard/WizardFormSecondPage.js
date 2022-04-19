import React from "react";
import { Form, Input, Select } from "usetheform";

const countries = ["Argentina", "Bolivia", "Brazil", "Chile", "Others..."];

export default function WizardFormSecondPage({ prevPage, ...props }) {
  return (
    <Form name="page2" {...props}>
      <Input type="text" name="email" placeholder="Type your email..." />
      <Select name="country">
        <option value="">Select your Country</option>
        {countries.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <button type="button" onClick={prevPage}>
        Previous Page
      </button>
      <button type="submit">Submit</button>
    </Form>
  );
}