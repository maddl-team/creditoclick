"use client";

import { cn } from "@/lib/utils";

export type RedditoDimostrabile = "si" | "no" | "";

export const REDDITO_DIMOSTRABILE_VALIDATION_MESSAGE =
  "Seleziona se hai un reddito dimostrabile tramite busta paga o pensione.";

export function formatRedditoDimostrabileForSubmit(value: "si" | "no"): "Si" | "No" {
  return value === "si" ? "Si" : "No";
}

type RedditoDimostrabileFieldProps = {
  value: RedditoDimostrabile;
  onChange: (value: "si" | "no") => void;
  error?: string;
  name?: string;
  legendClassName?: string;
  errorClassName?: string;
};

export function RedditoDimostrabileField({
  value,
  onChange,
  error,
  name = "redditoDimostrabile",
  legendClassName,
  errorClassName,
}: RedditoDimostrabileFieldProps) {
  return (
    <fieldset className="space-y-2">
      <legend className={cn("text-sm font-semibold text-text-primary", legendClassName)}>
        Hai un reddito dimostrabile tramite busta paga o pensione?
      </legend>
      <div className="grid grid-cols-2 gap-2">
        {[
          { value: "si" as const, label: "Sì" },
          { value: "no" as const, label: "No" },
        ].map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="accent-brand-indigo"
              required
            />
            <span className="text-sm text-text-primary">{opt.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p className={cn("text-xs text-red-600", errorClassName)}>{error}</p>
      ) : null}
    </fieldset>
  );
}
