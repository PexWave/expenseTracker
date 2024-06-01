import React from 'react'
import { Label, Select } from "flowbite-react";

export default function SelectMonth() {
  return (
    <Select id="month" required>
    <option>January</option>
    <option>February</option>
    <option>March</option>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
    <option>December</option>
  </Select>  )
}
