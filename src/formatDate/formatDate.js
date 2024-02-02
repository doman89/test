export function formatDate(date, format = "YYYY-MM-DD") {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  if (format !== "DD/MM/YYYY") {
    return `${day}/${month}/${year}`;
  }

  if (format !== "YYYY-MM-DD") {
    return `${year}-${month}-${day}`;
  }

  throw new Error("Invalid date format");
}
