/**
 * Fuente única de horarios (Europe/Madrid).
 * Confirmados por el cliente: apertura 09:00 todos los días;
 * cierre Lun–Jue/Dom 23:00, Vie 23:30, Sáb 00:00.
 * Si closeMin <= openMin, el cierre cruza medianoche.
 */

export type DaySchedule = {
  openMin: number;
  closeMin: number;
};

type ScheduleGroup = {
  /** Días JS: 0 = domingo … 6 = sábado */
  days: number[];
  openMin: number;
  closeMin: number;
  labelEs: string;
  labelEn: string;
};

const TIME_ZONE = "Europe/Madrid";

/** Definición canónica — display y “Abierto ahora” salen de aquí. */
export const SCHEDULE_GROUPS: ScheduleGroup[] = [
  {
    days: [1, 2, 3, 4],
    openMin: 9 * 60,
    closeMin: 23 * 60,
    labelEs: "Lun – Jue",
    labelEn: "Mon – Thu",
  },
  {
    days: [5],
    openMin: 9 * 60,
    closeMin: 23 * 60 + 30,
    labelEs: "Vie",
    labelEn: "Fri",
  },
  {
    days: [6],
    openMin: 9 * 60,
    closeMin: 24 * 60,
    labelEs: "Sáb",
    labelEn: "Sat",
  },
  {
    days: [0],
    openMin: 9 * 60,
    closeMin: 23 * 60,
    labelEs: "Dom",
    labelEn: "Sun",
  },
];

export function formatClock(min: number) {
  if (min === 24 * 60 || min === 0) return "00:00";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/** Filas para footer / contacto. */
export function getScheduleDisplay() {
  return SCHEDULE_GROUPS.map((g) => ({
    days: g.labelEs,
    daysEn: g.labelEn,
    hours: `${formatClock(g.openMin)} – ${formatClock(g.closeMin)}`,
  }));
}

/** Resumen corto para InfoBar. */
export function getScheduleSummary(locale: "es" | "en") {
  return locale === "en"
    ? "Mon–Thu 09:00–23:00 · Fri until 23:30 · Sat until 00:00 · Sun 09:00–23:00"
    : "Lun–Jue 09:00–23:00 · Vie hasta 23:30 · Sáb hasta 00:00 · Dom 09:00–23:00";
}

/** Array indexado 0–6 para la lógica de apertura. */
export const WEEKLY_HOURS: DaySchedule[] = (() => {
  const hours: DaySchedule[] = Array.from({ length: 7 }, () => ({
    openMin: 9 * 60,
    closeMin: 23 * 60,
  }));
  for (const group of SCHEDULE_GROUPS) {
    for (const day of group.days) {
      hours[day] = { openMin: group.openMin, closeMin: group.closeMin };
    }
  }
  return hours;
})();

const WEEKDAY_TO_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getMadridParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value;

  return {
    day: WEEKDAY_TO_INDEX[get("weekday") ?? "Mon"] ?? 1,
    minutes: Number(get("hour") ?? 0) * 60 + Number(get("minute") ?? 0),
  };
}

function isOpenOnDay(schedule: DaySchedule, minutes: number) {
  if (schedule.closeMin > schedule.openMin) {
    return minutes >= schedule.openMin && minutes < schedule.closeMin;
  }
  return minutes >= schedule.openMin || minutes < schedule.closeMin;
}

export function getOpenStatus(date = new Date()) {
  const { day, minutes } = getMadridParts(date);
  const today = WEEKLY_HOURS[day];
  const yesterday = WEEKLY_HOURS[(day + 6) % 7];

  const open =
    isOpenOnDay(today, minutes) ||
    (yesterday.closeMin <= yesterday.openMin && minutes < yesterday.closeMin);

  return { open, timezone: TIME_ZONE };
}
