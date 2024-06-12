import React from 'react'
import { Label, Select } from "flowbite-react";

export default function SelectCategory() {
  return (
    <Select className='w-max' id="category" required>
    <option>Transactions</option>
    <option>Category</option>
  </Select>  )
}
