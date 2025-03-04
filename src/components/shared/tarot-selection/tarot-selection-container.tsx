"use client";

import munto from "@/assets/mt-fortune-teller.png";
import { Button } from "@/components/ui";
import { useState } from "react";
import Image from "next/image";
import { TarotCardDeck, SelectedCardsSlot } from "./tartot-card";
import style from "./tartot-card/styles.module.scss";

export function TarotSelectionContainer() {
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);
  const onCompleteSelection = () => {};

  const addSelectedCardId = (selectedcardId: string) => {
    const newSelectedCardIds = [...selectedCardIds, selectedcardId];
    setSelectedCardIds(newSelectedCardIds);
  };

  return (
    <main className={style.container}>
      <div className={style["munto-image-container"]}>
        <Image src={munto} alt="munto" className={style["munto-img"]} />
      </div>
      <TarotCardDeck addSelectedCardId={addSelectedCardId} />
      <SelectedCardsSlot />
      <Button
        onClick={onCompleteSelection}
        variant={selectedCardIds.length === 3 ? "primary" : "disabled"}
        direction="bottom"
      >
        {selectedCardIds.length === 3 ? "점토와 오늘의 운세 보기" : "카드를 뽑아주세요!"}
      </Button>
    </main>
  );
}
