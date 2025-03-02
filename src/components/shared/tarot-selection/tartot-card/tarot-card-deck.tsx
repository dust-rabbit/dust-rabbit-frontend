"use client";

import { useEffect } from "react";
import style from "./styles.module.scss";

type Props = {
  addSelectedCardId: (selectedcardId: string) => void;
};

export function TarotCardDeck(props: Props) {
  const { addSelectedCardId } = props;

  useEffect(() => {
    console.log(addSelectedCardId);
  });

  return <section className={style["tarot-card-deck-container"]}>TarotCardDeck</section>;
}
