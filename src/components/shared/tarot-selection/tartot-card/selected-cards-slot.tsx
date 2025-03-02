"use client";

import React from "react";
import style from "./styles.module.scss";

function EmptyCard() {
  return <div className={style["empty-card"]} />;
}

export function SelectedCardsSlot() {
  return (
    <section className={style["selected-cards-slot-container"]}>
      <div className={style["empty-card-slot"]}>
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
    </section>
  );
}
