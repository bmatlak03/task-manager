"use client";
type ChevronDirection = "up" | "down" | "left" | "right";
export const Logo = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="6" height="25" rx="2" fill="#635FC7" />
    <rect opacity="0.75" x="9" width="6" height="25" rx="2" fill="#635FC7" />
    <rect opacity="0.5" x="18" width="6" height="25" rx="2" fill="#635FC7" />
  </svg>
);

export const ChevronDown = ({ direction }: { direction: ChevronDirection }) => {
  const directionMap = {
    up: 0,
    down: 180,
    left: 270,
    right: 90,
  };
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${directionMap[direction]}deg)`,
      }}
    >
      <path d="M1 1L5 5L9 1" stroke="#635FC7" strokeWidth="2" />
    </svg>
  );
};

export const PlusIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.368 12V7.344H12V4.632H7.368V0H4.656V4.632H0V7.344H4.656V12H7.368Z"
      fill="white"
    />
  </svg>
);

export const DotsIcon = () => (
  <svg
    width="4"
    height="16"
    viewBox="0 0 4 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1.84615" cy="1.84615" r="1.84615" fill="#828FA3" />
    <circle cx="1.84615" cy="8.00045" r="1.84615" fill="#828FA3" />
    <circle cx="1.84615" cy="14.1538" r="1.84615" fill="#828FA3" />
  </svg>
);

export const BoardIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
      fill="currentColor"
    />
  </svg>
);
