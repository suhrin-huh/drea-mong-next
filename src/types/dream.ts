export type Dream = {
  dreamId: number;
  writeTime: string;
  image: string | null;
  content: string;
};

export type SquareDream = {
  dreamId: number;
  interp: string;
  image: string;
  content: string;
};
