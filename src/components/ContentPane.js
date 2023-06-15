import React from "react";
import Card from "./Card";
import Hero from "./Hero";
export default function ContentPane() {
  return (
    <div className="Content-pane">
      <Hero title="Welcome to the page" />
      <Card
        title="title goes here"
        description="subtitle or description goes here"
      />
    </div>
  );
}
