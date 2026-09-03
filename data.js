// SOURCE: accountability-indicators.csv, row 208 (2026-27 ACT Budget)
// Statement C, CANBERRA HEALTH SERVICES, Table 16, "Accountability Indicators Output 1.1"
// Raw row: Percentage of emergency department presentations whose length of
// stay in the emergency department is four hours or less,81,57,81
// (source text carried a footnote marker "1" glued to "less" - removed below,
// it refers to a footnote, not a fourth number)
//
// Every number below is copied verbatim from that one row. Nothing here is
// estimated, calculated from other rows, or invented.

const ED_WAIT_DATA = {
  indicator: "Percentage of emergency department presentations whose length of stay in the emergency department is four hours or less",
  target_2025_26: 81,
  outcome_2025_26: 57,
  target_2026_27: 81,
  source: {
    file: "accountability-indicators.csv",
    row: 208,
    statement: "Statement C",
    agency: "CANBERRA HEALTH SERVICES",
    table: 16,
    caption: "Accountability Indicators Output 1.1"
  }
};
