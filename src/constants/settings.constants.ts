export const SLEEP_OPTION_LIST = [
  { value: "10", label: "10분" },
  { value: "15", label: "15분" },
  { value: "30", label: "30분" },
  { value: "60", label: "1시간" },
];

export type SleepTime = (typeof SLEEP_OPTION_LIST)[number]["value"];
