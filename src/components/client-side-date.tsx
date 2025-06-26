"use client";

import { DateTimeFormatOptions, useFormatter } from "next-intl";

export default function ClientSideDate({
  date,
  options,
}: {
  date: Date;
  options?: DateTimeFormatOptions;
}) {
  const format = useFormatter();

  return format.dateTime(date, options);
}
