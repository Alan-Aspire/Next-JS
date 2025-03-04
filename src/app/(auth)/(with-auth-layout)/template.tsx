"use client";

import {useState} from 'react'

export default function AuthLayout({children}: {children: React.ReactNode}) {

  const [name, setName] = useState("");
    return (
      <>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>custom layout</p>
        {children}
      </>
    );
  }