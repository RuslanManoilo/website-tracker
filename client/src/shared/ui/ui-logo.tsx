import clsx from "clsx";

export function UILogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <EYE className="w-12 h-12" />
      Masonic EYE
    </div>
  );
}

export const EYE = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 26 26"
  >
    <g fill="none">
      <defs>
        <mask id="pepiconsPopEyeCircleFilled0">
          <path fill="#fff" d="M0 0h26v26H0z" />
          <g fill="#000">
            <path
              fillRule="evenodd"
              d="M13 19.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5s-9 2.308-9 5.5s4.103 5.5 9 5.5m0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5s-7-1.722-7-3.5s3.06-3.5 7-3.5"
              clipRule="evenodd"
            />
            <path d="M12 6.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0zm4.02.304a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 0 1-1.96-.392zm-6.04 0a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392zM5.857 7.986a1 1 0 1 0-1.714 1.029l1.5 2.5a1 1 0 1 0 1.714-1.03zm14.286 0a1 1 0 0 1 1.715 1.029l-1.5 2.5a1 1 0 0 1-1.716-1.03z" />
            <path
              fillRule="evenodd"
              d="M13 17a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
              clipRule="evenodd"
            />
          </g>
        </mask>
      </defs>
      <circle
        cx="13"
        cy="13"
        r="13"
        fill="currentColor"
        mask="url(#pepiconsPopEyeCircleFilled0)"
      />
    </g>
  </svg>
);
