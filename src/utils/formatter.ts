type DateFormatType = "day" | "weekday";

export const formatDate = (dateStr: string, format: DateFormatType) => {
  const date = new Date(dateStr);

  switch (format) {
    case "day":
      return date.toLocaleDateString("en-US", { day: "2-digit" });

    case "weekday":
      return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  }
};
