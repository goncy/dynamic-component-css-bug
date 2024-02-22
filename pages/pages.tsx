'use client'

import dynamic from "next/dynamic";

const LazyComponent = dynamic(() => import('../components/lazy'))

export default function App() {
  return <div>
    <h1>This is rendered from the server</h1>
    <p>Hello</p>
    <hr />
    <h1>This is rendered from the client</h1>
    <LazyComponent />
  </div>
}