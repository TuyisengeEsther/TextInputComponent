import { useState } from "react";
import TextInput from "./components/TextInput";

import { FaUser, FaSearch, FaEye } from "react-icons/fa";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-neutral-50 p-10 flex flex-col gap-6">
      
      {/* DEFAULT */}
      <TextInput
        label="Username"
        placeholder="Enter username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        hint="This is your public username"
      />

      {/* ERROR */}
      <TextInput
        label="Email"
        placeholder="Enter email"
        error="Email is required"
      />

      {/* DISABLED */}
      <TextInput
        label="Disabled"
        placeholder="Cannot type"
        disabled
        value="Locked"
      />

      {/* LEFT ICON */}
      <TextInput
        label="Search"
        placeholder="Search..."
        leftIcon={<FaSearch />}
      />

      {/* RIGHT ICON */}
      <TextInput
        label="Password"
        placeholder="Enter password"
        rightIcon={<FaEye />}
      />

      {/* BOTH ICONS */}
      <TextInput
        label="User"
        placeholder="Username"
        leftIcon={<FaUser />}
        rightIcon={<FaEye />}
      />
    </div>
  );
}