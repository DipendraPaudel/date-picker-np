export const formatDate = (date?: string) => {
  if (typeof date !== "string") return "";

  return date
    .split("-")
    .map((d) => (d.length === 1 ? d.padStart(2, "0") : d))
    .join("-");
};
