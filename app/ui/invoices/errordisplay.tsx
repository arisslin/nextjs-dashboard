'use client';

type ErrorDisplayProps = { id: string; errors: string[] };

const ErrorDisplay = ({ id, errors }: ErrorDisplayProps) => (
  <div id={id} aria-live="polite" aria-atomic="true">
    {errors.map((error: string) => (
      <p className="mt-2 text-sm text-red-500" key={error}>
        {error}
      </p>
    ))}
  </div>
);

export default ErrorDisplay;
