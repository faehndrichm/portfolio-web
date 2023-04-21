import { supabase } from "../lib/supabaseClient";
import React from "react";

export default async function SimpleCV() {
  let { data, status, statusText } = await supabase.from("experience").select("*");
  let experiences = [];
  if (data) {
    experiences = data.map((d) => ({
      ...d,
      to: new Date(d.to_date),
      from: new Date(d.from_date),
    }));
  }

  let items = [...Array(30).keys()];
  return (
    <section>
      {experiences
        .filter((p) => p.category === 1)
        .map((p) => (
          <div key={p.id}>
            <div className="text-white">{p.name}</div>
          </div>
        ))}
      {experiences
        .filter((p) => p.category === 0)
        .map((p) => (
          <div key={p.id}>
            <div className="text-white">{p.name}</div>
          </div>
        ))}
      {experiences
        .filter((p) => p.category === 2)
        .map((p) => (
          <div key={p.id}>
            <div className="text-white">{p.name}</div>
          </div>
        ))}
    </section>
  );
}
