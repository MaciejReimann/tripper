import z from "zod";

export const iconsCount = [1, 2, 3, 4, 5] as const;
export type IconsCount = (typeof iconsCount)[number];

export const getIconsCount = (rating: number): IconsCount => {
  const schema = z.number().min(1).max(5);
  return schema.parse(Number(rating.toFixed(0))) as IconsCount;
};
