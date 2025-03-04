"use client";

import { useRef, useState, useMemo } from "react";
import { useSprings, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import styles from "./styles.module.scss";

type Props = {
  addSelectedCardId: (selectedcardId: string) => void;
};

export function TarotCardDeck(props: Props) {
  const { addSelectedCardId } = props;
  const cardsCount = 78;
  const RADIUS = (375 + 300 - 60) / 2; // 반원의 반지름

  const onClickCard = () => {
    // TODO: card click event
    addSelectedCardId("test");
  };

  const baseAngles = useMemo(
    () =>
      Array.from(
        { length: cardsCount },
        (_, i) => (i * 360) / (cardsCount - 1), // 0 ~ 360도 사이에 균등 분포
      ),
    [cardsCount],
  );
  const [rotationOffset, setRotationOffset] = useState(0);
  // 드래그 시작 시 rotationOffset을 기억하기 위한 ref
  const initialRotationRef = useRef(0);

  const [springs, api] = useSprings(cardsCount, (i) => {
    const angleDeg = baseAngles[i] + rotationOffset;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = RADIUS + RADIUS * Math.cos(angleRad);
    const y = RADIUS * Math.sin(angleRad) - 200;
    return {
      transform: `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`,
      immediate: true,
    };
  });

  const bind = useDrag(({ movement: [mx], first, last }) => {
    // 드래그 시작 시 현재 rotationOffset을 기억
    if (first) {
      initialRotationRef.current = rotationOffset;
    }
    // 1px당 0.2도의 변화
    const deltaAngle = mx * 0.2;
    // 초기 offset에서 드래그 이동량만큼 더함
    const newOffset = initialRotationRef.current + deltaAngle;

    // 마지막일 때만 상태 업데이트해서 누적
    if (last) {
      setRotationOffset(newOffset);
    }
    // 각 카드의 위치 업데이트
    api.start((i) => {
      const angleDeg = baseAngles[i] + newOffset;
      const angleRad = (angleDeg * Math.PI) / 180;
      const x = RADIUS + RADIUS * Math.cos(angleRad);
      const y = RADIUS * Math.sin(angleRad) - 200;
      return {
        transform: `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`,
      };
    });
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={styles["card-row"]} {...bind()}>
      {springs.map((spring, i) => (
        <animated.div
          key={spring.transform.id}
          className={styles.card}
          style={spring}
          onClick={onClickCard}
        >
          Card {i + 1}
        </animated.div>
      ))}
    </div>
  );
}
