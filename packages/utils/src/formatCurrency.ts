const DEFAULT_LOCALE = "en-US";
const DEFAULT_CURRENCY = "USD";

export interface FormatCurrencyOptions {
  locale?: string;
  currency?: string;
}

export function formatCurrency(amount: number, options: FormatCurrencyOptions = {}): string {
  const { locale = DEFAULT_LOCALE, currency = DEFAULT_CURRENCY } = options;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}
