/* eslint-disable @typescript-eslint/no-explicit-any */

export const ShowPasswordIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="{0.4}">
        <path d="M18 4h-2.25V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75V20H18c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4ZM6.5 4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-5Zm.17 8.38c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.09-.1-.16-.21-.22-.33a.986.986 0 0 1-.07-.38c0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.18-.06.34-.07.68.04.91.27.18.19.29.45.29.71 0 .13-.03.26-.08.38Zm3.5 0c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21a.99.99 0 0 1-.21-1.09c.05-.13.12-.23.21-.33.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38Z" />
      </g>
    </svg>
  );
};

export const HidePasswordIcon = (props: any) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M21.27 9.18C20.98 8.72 20.67 8.29 20.35 7.89C19.98 7.42 19.28 7.38 18.86 7.8L15.86 10.8C16.08 11.46 16.12 12.22 15.92 13.01C15.57 14.42 14.43 15.56 13.02 15.91C12.23 16.11 11.47 16.07 10.81 15.85C10.81 15.85 9.38 17.28 8.35 18.31C7.85 18.81 8.01 19.69 8.68 19.95C9.75 20.36 10.86 20.57 12 20.57C13.78 20.57 15.51 20.05 17.09 19.08C18.7 18.08 20.15 16.61 21.32 14.74C22.27 13.23 22.22 10.69 21.27 9.18Z"
          fill="#292D32"
        />
        <path
          d="M14.02 9.98L9.98 14.02C9.47 13.5 9.14 12.78 9.14 12C9.14 10.43 10.42 9.14 12 9.14C12.78 9.14 13.5 9.47 14.02 9.98Z"
          fill="#292D32"
        />
        <path
          d="M18.25 5.75L14.86 9.14C14.13 8.4 13.12 7.96 12 7.96C9.76 7.96 7.96 9.77 7.96 12C7.96 13.12 8.41 14.13 9.14 14.86L5.76 18.25H5.75C4.64 17.35 3.62 16.2 2.75 14.84C1.75 13.27 1.75 10.72 2.75 9.15C3.91 7.33 5.33 5.9 6.91 4.92C8.49 3.96 10.22 3.43 12 3.43C14.23 3.43 16.39 4.25 18.25 5.75Z"
          fill="#292D32"
        />
        <path
          d="M14.86 12C14.86 13.57 13.58 14.86 12 14.86C11.94 14.86 11.89 14.86 11.83 14.84L14.84 11.83C14.86 11.89 14.86 11.94 14.86 12Z"
          fill="#292D32"
        />
        <path
          d="M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L2.23 20.69C1.93 20.99 1.93 21.48 2.23 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z"
          fill="#292D32"
        />
      </g>
    </svg>
  );
};
export const PasswordIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39Z"
        stroke="#8D94A0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3"
        stroke="#8D94A0"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const SuccessIcon = (props: any) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99992 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00004C14.6666 4.33337 11.6666 1.33337 7.99992 1.33337C4.33325 1.33337 1.33325 4.33337 1.33325 8.00004C1.33325 11.6667 4.33325 14.6667 7.99992 14.6667Z"
        stroke="#56DC9C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16675 7.99995L7.05341 9.88661L10.8334 6.11328"
        stroke="#56DC9C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HelpIcon = (props: any) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99992 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00004C14.6666 4.33337 11.6666 1.33337 7.99992 1.33337C4.33325 1.33337 1.33325 4.33337 1.33325 8.00004C1.33325 11.6667 4.33325 14.6667 7.99992 14.6667Z"
        stroke="#FC7A80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.33337V8.66671"
        stroke="#FC7A80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99634 10.6666H8.00233"
        stroke="#FC7A80"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const EmailIcon = (props: any) => {
  return (
    <svg
      width={20}
      height={20}
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1667 17.0833H5.83332C3.33332 17.0833 1.66666 15.8333 1.66666 12.9166V7.08329C1.66666 4.16663 3.33332 2.91663 5.83332 2.91663H14.1667C16.6667 2.91663 18.3333 4.16663 18.3333 7.08329V12.9166C18.3333 15.8333 16.6667 17.0833 14.1667 17.0833Z"
        stroke="#8D94A0"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 7.5L11.5583 9.58333C10.7 10.2667 9.29167 10.2667 8.43334 9.58333L5.83334 7.5"
        stroke="#8D94A0"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const MessageIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#8D94A0"
        d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6zM7 9.5h10m-10 5h7"
      />
    </svg>
  );
};
export function Email(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 428 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M422.64 75.0934C415.894 53.3251 402.354 34.2895 384.003 20.776C365.653 7.26248 343.456 -0.018469 320.667 3.51833e-05H107.333C84.5438 -0.018469 62.3474 7.26248 43.9967 20.776C25.646 34.2895 12.1057 53.3251 5.35999 75.0934C2.28076 85.3363 0.699939 95.971 0.666656 106.667V277.333C0.677964 305.62 11.9197 332.744 31.9211 352.746C51.9225 372.747 79.047 383.989 107.333 384H320.667C348.953 383.989 376.077 372.747 396.079 352.746C416.08 332.744 427.322 305.62 427.333 277.333V106.667C427.3 95.971 425.719 85.3363 422.64 75.0934ZM107.333 42.6667H320.667C335.85 42.7121 350.526 48.138 362.087 57.9806C373.648 67.8232 381.346 81.4451 383.813 96.4267L214 189.013L44.1867 96.4267C46.6541 81.4451 54.3521 67.8232 65.9132 57.9806C77.4743 48.138 92.15 42.7121 107.333 42.6667ZM384.667 277.333C384.616 294.292 377.857 310.541 365.866 322.532C353.874 334.524 337.625 341.283 320.667 341.333H107.333C90.375 341.283 74.1258 334.524 62.1344 322.532C50.1431 310.541 43.384 294.292 43.3333 277.333V144.64L203.76 232.107C206.91 233.791 210.428 234.672 214 234.672C217.572 234.672 221.09 233.791 224.24 232.107L384.667 144.64V277.333Z"
        fill="#090E1A"
      />
    </svg>
  );
}
export const SubjectIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M22 7.43v6c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5Z"
      stroke="#8D94A0"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 17.5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 5 21.5a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 1 17.5a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM6.49 17.48H3.51M5 16.02v2.99M8.5 10.5h7"
      stroke="#8D94A0"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      />
    </svg>
  );
}

export const XCloseIcon = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const RightArrIcon = (props: any) => {
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91699 10.5H16.942"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FeatureIcon1 = () => {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={48} height={48} rx={24} fill="#413C6D" />
      <path
        d="M23.9603 10.6667C16.6003 10.6667 10.627 16.6401 10.627 24.0001C10.627 31.3601 16.6003 37.3334 23.9603 37.3334C31.3203 37.3334 37.2936 31.3601 37.2936 24.0001C37.2936 16.6401 31.3336 10.6667 23.9603 10.6667ZM24.0003 29.6401C20.8803 29.6401 18.3603 27.1201 18.3603 24.0001C18.3603 20.8801 20.8803 18.3601 24.0003 18.3601C27.1203 18.3601 29.6403 20.8801 29.6403 24.0001C29.6403 27.1201 27.1203 29.6401 24.0003 29.6401Z"
        fill="white"
      />
    </svg>
  );
};

export const FeatureIcon2 = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#413C6D" />
      <path
        d="M29.5202 11.9467L17.4802 15.9467C9.38682 18.6534 9.38682 23.0667 17.4802 25.7601L21.0535 26.9467L22.2402 30.5201C24.9335 38.6134 29.3602 38.6134 32.0535 30.5201L36.0668 18.4934C37.8535 13.0934 34.9202 10.1467 29.5202 11.9467ZM29.9468 19.1201L24.8802 24.2134C24.6802 24.4134 24.4268 24.5067 24.1735 24.5067C23.9202 24.5067 23.6668 24.4134 23.4668 24.2134C23.0802 23.8267 23.0802 23.1867 23.4668 22.8001L28.5335 17.7067C28.9202 17.3201 29.5602 17.3201 29.9468 17.7067C30.3335 18.0934 30.3335 18.7334 29.9468 19.1201Z"
        fill="white"
      />
    </svg>
  );
};
export const FeatureIcon3 = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#413C6D" />
      <path
        d="M29.587 10.6667H18.4137C13.5603 10.6667 10.667 13.5601 10.667 18.4134V29.5734C10.667 34.4401 13.5603 37.3334 18.4137 37.3334H29.5737C34.427 37.3334 37.3203 34.4401 37.3203 29.5867V18.4134C37.3337 13.5601 34.4403 10.6667 29.587 10.6667ZM15.0003 23.8534C15.0403 21.5067 15.9737 19.2934 17.627 17.6401C19.3337 15.9334 21.6003 15.0001 24.0003 15.0001C26.4003 15.0001 28.667 15.9334 30.3603 17.6401C30.4003 17.6801 30.4403 17.7334 30.4803 17.7867V16.6401C30.4803 16.0934 30.9337 15.6401 31.4803 15.6401C32.027 15.6401 32.4803 16.0934 32.4803 16.6401V20.1734C32.4803 20.7201 32.027 21.1734 31.4803 21.1734H27.947C27.4003 21.1734 26.947 20.7201 26.947 20.1734C26.947 19.6267 27.4003 19.1734 27.947 19.1734H29.0537C29.0137 19.1334 28.987 19.0934 28.947 19.0534C27.627 17.7334 25.867 17.0001 24.0003 17.0001C22.1337 17.0001 20.3737 17.7334 19.0537 19.0534C17.7603 20.3467 17.0403 22.0667 17.0137 23.8934C17.0003 24.4267 16.547 24.8667 16.0003 24.8667H15.987C15.4403 24.8667 15.0003 24.4001 15.0003 23.8534ZM30.3603 30.3601C28.667 32.0534 26.4003 33.0001 24.0003 33.0001C21.6003 33.0001 19.3337 32.0667 17.6403 30.3601C17.6003 30.3201 17.5603 30.2667 17.5203 30.2134V31.3467C17.5203 31.8934 17.067 32.3467 16.5203 32.3467C15.9737 32.3467 15.5203 31.8934 15.5203 31.3467V27.8134C15.5203 27.2667 15.9737 26.8134 16.5203 26.8134H20.0537C20.6003 26.8134 21.0537 27.2667 21.0537 27.8134C21.0537 28.3601 20.6003 28.8134 20.0537 28.8134H18.947C18.987 28.8534 19.0137 28.8934 19.0537 28.9334C20.3737 30.2534 22.1337 30.9867 24.0003 30.9867C25.867 30.9867 27.627 30.2534 28.947 28.9334C30.2537 27.6267 30.987 25.8801 30.987 24.0134C30.987 23.4667 31.4403 23.0134 31.987 23.0134C32.5337 23.0134 32.987 23.4667 32.987 24.0134C32.987 26.4267 32.0537 28.6801 30.3603 30.3601Z"
        fill="white"
      />
    </svg>
  );
};

export const LogoWhite = (props: any) => {
  return (
    <svg
      width="137"
      height="40"
      {...props}
      viewBox="0 0 137 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_597_4400)">
        <path
          d="M31.1401 16.8422C30.5804 14.9123 29.5621 13.1465 28.1721 11.6954C26.7821 10.2443 25.0617 9.15104 23.1577 8.50888C21.2766 7.96133 19.2993 7.82678 17.3614 8.11444C15.4234 8.40211 13.5705 9.10519 11.9296 10.1755C11.7946 10.3109 11.6252 10.4068 11.4398 10.4532C11.2544 10.4996 11.0598 10.4945 10.877 10.4387C10.5084 10.3193 10.1763 10.108 9.91205 9.82467C9.71967 9.47756 9.65746 9.0732 9.73661 8.68432C9.78687 8.49766 9.87514 8.3234 9.9959 8.17245C10.1167 8.0215 10.2673 7.89713 10.4384 7.80712C15.0875 5.08782 19.6489 4.38607 24.0349 5.78958C26.1942 6.5078 28.1656 7.69977 29.8047 9.27823C31.4439 10.8567 32.7094 12.7817 33.5085 14.9124H39.3857C38.184 10.172 35.2871 6.03622 31.2427 3.28695C27.1983 0.537687 22.2868 -0.634505 17.4368 -0.00799665C12.5868 0.618511 8.13434 3.0003 4.92135 6.68704C1.70837 10.3738 -0.0425069 15.11 -0.000228394 20.0001C-0.000228394 20.7896 0.0874909 21.4913 0.0874909 22.2808H7.54363C7.82839 22.2647 8.11069 22.3415 8.34801 22.4997C8.58532 22.6579 8.76481 22.8889 8.85942 23.158C9.43235 25.0812 10.4553 26.8403 11.8434 28.2895C13.2316 29.7387 14.945 30.8363 16.8419 31.4913C18.723 32.0389 20.7002 32.1734 22.6382 31.8858C24.5761 31.5981 26.429 30.895 28.0699 29.8247C28.205 29.6894 28.3743 29.5934 28.5597 29.547C28.7452 29.5007 28.9398 29.5057 29.1226 29.5615C29.4911 29.6809 29.8232 29.8922 30.0875 30.1755C30.2799 30.5227 30.3421 30.927 30.2629 31.3159C30.2127 31.5026 30.1244 31.6768 30.0036 31.8278C29.8829 31.9787 29.7323 32.1031 29.5612 32.1931C26.917 33.9723 23.8008 34.9193 20.6138 34.9124C19.0386 34.9005 17.4732 34.6642 15.9647 34.2106C13.7963 33.5096 11.8162 32.3236 10.1747 30.7429C8.53315 29.1622 7.27338 27.2282 6.491 25.0878H0.701526C1.96964 29.7502 4.88277 33.796 8.90243 36.4771C12.9221 39.1583 17.7765 40.2936 22.5683 39.6732C27.3601 39.0529 31.7653 36.7188 34.9696 33.1023C38.174 29.4859 39.9608 24.8317 39.9998 20.0001C40.0161 19.268 39.9868 18.5356 39.9121 17.8071H32.5436C32.2445 17.7874 31.9563 17.6873 31.7093 17.5175C31.4623 17.3477 31.2657 17.1144 31.1401 16.8422Z"
          fill="white"
        />
        <path
          d="M20.0841 28.7496C21.811 28.733 23.4944 28.2057 24.9222 27.2342C26.3501 26.2627 27.4585 24.8904 28.1078 23.2902C28.7572 21.6899 28.9185 19.9333 28.5715 18.2416C28.2244 16.5498 27.3845 14.9986 26.1575 13.7833C24.9305 12.568 23.3713 11.7429 21.6763 11.4121C19.9813 11.0812 18.2263 11.2593 16.6324 11.924C15.0384 12.5887 13.6768 13.7102 12.719 15.1472C11.7612 16.5843 11.2501 18.2726 11.25 19.9996C11.2499 21.1558 11.479 22.3005 11.924 23.3676C12.369 24.4347 13.021 25.4031 13.8425 26.2167C14.6639 27.0303 15.6385 27.6731 16.7098 28.1078C17.7811 28.5426 18.928 28.7607 20.0841 28.7496Z"
          fill="#120B48"
        />
      </g>
      <path
        d="M49.0114 25.5V13.8636H51.4716V18.6648H56.4659V13.8636H58.9205V25.5H56.4659V20.6932H51.4716V25.5H49.0114ZM64.8807 25.6705C63.983 25.6705 63.2102 25.4886 62.5625 25.125C61.9186 24.7576 61.4223 24.2386 61.0739 23.5682C60.7254 22.8939 60.5511 22.0966 60.5511 21.1761C60.5511 20.2784 60.7254 19.4905 61.0739 18.8125C61.4223 18.1345 61.9129 17.6061 62.5455 17.2273C63.1818 16.8485 63.928 16.6591 64.7841 16.6591C65.3598 16.6591 65.8958 16.7519 66.392 16.9375C66.892 17.1193 67.3277 17.3939 67.6989 17.7614C68.0739 18.1288 68.3655 18.5909 68.5739 19.1477C68.7822 19.7008 68.8864 20.3485 68.8864 21.0909V21.7557H61.517V20.2557H66.608C66.608 19.9072 66.5322 19.5985 66.3807 19.3295C66.2292 19.0606 66.0189 18.8504 65.75 18.6989C65.4848 18.5436 65.1761 18.4659 64.8239 18.4659C64.4564 18.4659 64.1307 18.5511 63.8466 18.7216C63.5663 18.8883 63.3466 19.1136 63.1875 19.3977C63.0284 19.678 62.947 19.9905 62.9432 20.3352V21.7614C62.9432 22.1932 63.0227 22.5663 63.1818 22.8807C63.3447 23.1951 63.5739 23.4375 63.8693 23.608C64.1648 23.7784 64.5152 23.8636 64.9205 23.8636C65.1894 23.8636 65.4356 23.8258 65.6591 23.75C65.8826 23.6742 66.0739 23.5606 66.233 23.4091C66.392 23.2576 66.5133 23.072 66.5966 22.8523L68.8352 23C68.7216 23.5379 68.4886 24.0076 68.1364 24.4091C67.7879 24.8068 67.3371 25.1174 66.7841 25.3409C66.2348 25.5606 65.6004 25.6705 64.8807 25.6705ZM72.8864 13.8636V25.5H70.4659V13.8636H72.8864ZM74.8253 28.7727V16.7727H77.2116V18.2386H77.3196C77.4257 18.0038 77.5791 17.7652 77.7798 17.5227C77.9844 17.2765 78.2495 17.072 78.5753 16.9091C78.9048 16.7424 79.3139 16.6591 79.8026 16.6591C80.4389 16.6591 81.026 16.8258 81.5639 17.1591C82.1018 17.4886 82.5317 17.9867 82.8537 18.6534C83.1757 19.3163 83.3366 20.1477 83.3366 21.1477C83.3366 22.1212 83.1795 22.9432 82.8651 23.6136C82.5545 24.2803 82.1302 24.786 81.5923 25.1307C81.0582 25.4716 80.4598 25.642 79.7969 25.642C79.3272 25.642 78.9276 25.5644 78.598 25.4091C78.2723 25.2538 78.0052 25.0587 77.7969 24.8239C77.5885 24.5852 77.4295 24.3447 77.3196 24.1023H77.2457V28.7727H74.8253ZM77.1946 21.1364C77.1946 21.6553 77.2666 22.108 77.4105 22.4943C77.5545 22.8807 77.7628 23.1818 78.0355 23.3977C78.3082 23.6098 78.6397 23.7159 79.0298 23.7159C79.4238 23.7159 79.7571 23.608 80.0298 23.392C80.3026 23.1723 80.509 22.8693 80.6491 22.483C80.7931 22.0928 80.8651 21.6439 80.8651 21.1364C80.8651 20.6326 80.795 20.1894 80.6548 19.8068C80.5147 19.4242 80.3082 19.125 80.0355 18.9091C79.7628 18.6932 79.4276 18.5852 79.0298 18.5852C78.6359 18.5852 78.3026 18.6894 78.0298 18.8977C77.7609 19.1061 77.5545 19.4015 77.4105 19.7841C77.2666 20.1667 77.1946 20.6174 77.1946 21.1364ZM84.9957 13.8636H88.0298L91.2344 21.6818H91.3707L94.5753 13.8636H97.6094V25.5H95.223V17.9261H95.1264L92.1151 25.4432H90.4901L87.4787 17.8977H87.3821V25.5H84.9957V13.8636ZM103.568 25.6705C102.67 25.6705 101.898 25.4886 101.25 25.125C100.606 24.7576 100.11 24.2386 99.7614 23.5682C99.4129 22.8939 99.2386 22.0966 99.2386 21.1761C99.2386 20.2784 99.4129 19.4905 99.7614 18.8125C100.11 18.1345 100.6 17.6061 101.233 17.2273C101.869 16.8485 102.616 16.6591 103.472 16.6591C104.047 16.6591 104.583 16.7519 105.08 16.9375C105.58 17.1193 106.015 17.3939 106.386 17.7614C106.761 18.1288 107.053 18.5909 107.261 19.1477C107.47 19.7008 107.574 20.3485 107.574 21.0909V21.7557H100.205V20.2557H105.295C105.295 19.9072 105.22 19.5985 105.068 19.3295C104.917 19.0606 104.706 18.8504 104.438 18.6989C104.172 18.5436 103.864 18.4659 103.511 18.4659C103.144 18.4659 102.818 18.5511 102.534 18.7216C102.254 18.8883 102.034 19.1136 101.875 19.3977C101.716 19.678 101.634 19.9905 101.631 20.3352V21.7614C101.631 22.1932 101.71 22.5663 101.869 22.8807C102.032 23.1951 102.261 23.4375 102.557 23.608C102.852 23.7784 103.203 23.8636 103.608 23.8636C103.877 23.8636 104.123 23.8258 104.347 23.75C104.57 23.6742 104.761 23.5606 104.92 23.4091C105.08 23.2576 105.201 23.072 105.284 22.8523L107.523 23C107.409 23.5379 107.176 24.0076 106.824 24.4091C106.475 24.8068 106.025 25.1174 105.472 25.3409C104.922 25.5606 104.288 25.6705 103.568 25.6705ZM119.892 19.6818C119.892 20.9508 119.652 22.0303 119.17 22.9205C118.693 23.8106 118.042 24.4905 117.216 24.9602C116.394 25.4261 115.47 25.6591 114.443 25.6591C113.409 25.6591 112.481 25.4242 111.659 24.9545C110.837 24.4848 110.188 23.8049 109.71 22.9148C109.233 22.0246 108.994 20.947 108.994 19.6818C108.994 18.4129 109.233 17.3333 109.71 16.4432C110.188 15.553 110.837 14.875 111.659 14.4091C112.481 13.9394 113.409 13.7045 114.443 13.7045C115.47 13.7045 116.394 13.9394 117.216 14.4091C118.042 14.875 118.693 15.553 119.17 16.4432C119.652 17.3333 119.892 18.4129 119.892 19.6818ZM117.398 19.6818C117.398 18.8598 117.275 18.1667 117.028 17.6023C116.786 17.0379 116.443 16.6098 116 16.3182C115.557 16.0265 115.038 15.8807 114.443 15.8807C113.848 15.8807 113.33 16.0265 112.886 16.3182C112.443 16.6098 112.098 17.0379 111.852 17.6023C111.61 18.1667 111.489 18.8598 111.489 19.6818C111.489 20.5038 111.61 21.197 111.852 21.7614C112.098 22.3258 112.443 22.7538 112.886 23.0455C113.33 23.3371 113.848 23.483 114.443 23.483C115.038 23.483 115.557 23.3371 116 23.0455C116.443 22.7538 116.786 22.3258 117.028 21.7614C117.275 21.197 117.398 20.5038 117.398 19.6818ZM127.266 21.7841V16.7727H129.686V25.5H127.362V23.9148H127.271C127.074 24.4261 126.747 24.8371 126.288 25.1477C125.834 25.4583 125.279 25.6136 124.624 25.6136C124.04 25.6136 123.527 25.4811 123.084 25.2159C122.641 24.9508 122.294 24.5739 122.044 24.0852C121.798 23.5966 121.673 23.0114 121.669 22.3295V16.7727H124.089V21.8977C124.093 22.4129 124.232 22.8201 124.504 23.1193C124.777 23.4186 125.143 23.5682 125.601 23.5682C125.893 23.5682 126.165 23.5019 126.419 23.3693C126.673 23.233 126.877 23.0322 127.033 22.767C127.192 22.5019 127.269 22.1742 127.266 21.7841ZM136.264 16.7727V18.5909H131.009V16.7727H136.264ZM132.202 14.6818H134.622V22.8182C134.622 23.0417 134.656 23.2159 134.724 23.3409C134.793 23.4621 134.887 23.5473 135.009 23.5966C135.134 23.6458 135.277 23.6705 135.44 23.6705C135.554 23.6705 135.668 23.661 135.781 23.642C135.895 23.6193 135.982 23.6023 136.043 23.5909L136.423 25.392C136.302 25.4299 136.132 25.4735 135.912 25.5227C135.692 25.5758 135.425 25.608 135.111 25.6193C134.527 25.642 134.016 25.5644 133.577 25.3864C133.141 25.2083 132.802 24.9318 132.56 24.5568C132.317 24.1818 132.198 23.7083 132.202 23.1364V14.6818Z"
        fill="white"
      />
      <defs>
        <clipPath id="clip0_597_4400">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrDownIcon = (props: any) => {
  return (
    <svg
      width={24}
      height={24}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke="black"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LinkIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MoreIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
        stroke="#141414"
        strokeWidth="1.5"
      />
      <path
        d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
        stroke="#141414"
        strokeWidth="1.5"
      />
      <path
        d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
        stroke="#141414"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        stroke="#120B48"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
        stroke="#120B48"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899"
        stroke="#120B48"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CopyIcon = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_611_1568)">
        <path
          d="M4.16797 12.4998H3.33464C2.89261 12.4998 2.46868 12.3242 2.15612 12.0117C1.84356 11.6991 1.66797 11.2752 1.66797 10.8332V3.33317C1.66797 2.89114 1.84356 2.46722 2.15612 2.15466C2.46868 1.8421 2.89261 1.6665 3.33464 1.6665H10.8346C11.2767 1.6665 11.7006 1.8421 12.0131 2.15466C12.3257 2.46722 12.5013 2.89114 12.5013 3.33317V4.1665M9.16797 7.49984H16.668C17.5884 7.49984 18.3346 8.24603 18.3346 9.1665V16.6665C18.3346 17.587 17.5884 18.3332 16.668 18.3332H9.16797C8.24749 18.3332 7.5013 17.587 7.5013 16.6665V9.1665C7.5013 8.24603 8.24749 7.49984 9.16797 7.49984Z"
          stroke="#120B48"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_611_1568">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z"
        fill="#1877F2"
      />
      <path
        d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z"
        fill="white"
      />
    </svg>
  );
};

export const WhatsAppIcon = () => {
  return (
    <svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0859 3.87197C15.2061 1.98972 12.7059 0.952615 10.042 0.95166C4.55283 0.95166 0.08547 5.41855 0.08356 10.9092C0.082605 12.6644 0.54147 14.3776 1.41288 15.8874L0 21.0481L5.27909 19.6634C6.7335 20.457 8.37128 20.8748 10.0377 20.8753H10.042C15.5302 20.8753 19.9981 16.4079 20 10.9173C20.0009 8.25627 18.9662 5.7547 17.0859 3.87244V3.87197ZM10.042 19.1935H10.0387C8.55367 19.1931 7.09689 18.7939 5.82583 18.0399L5.52357 17.8604L2.39078 18.6822L3.22686 15.6277L3.03013 15.3144C2.20169 13.9966 1.76383 12.4734 1.76479 10.9097C1.7667 6.3463 5.47963 2.63337 10.0454 2.63337C12.2561 2.63432 14.3342 3.49619 15.8969 5.06091C17.4598 6.62516 18.3197 8.7051 18.3188 10.9163C18.3168 15.4802 14.6039 19.1931 10.042 19.1931V19.1935ZM14.5819 12.9948C14.3332 12.8702 13.1099 12.2685 12.8816 12.1855C12.6534 12.1024 12.4877 12.0609 12.322 12.3101C12.1563 12.5594 11.6793 13.1199 11.5342 13.2856C11.389 13.4518 11.2438 13.4723 10.9951 13.3477C10.7463 13.223 9.94461 12.9604 8.99395 12.1129C8.25433 11.453 7.75483 10.6384 7.60972 10.3892C7.46456 10.1399 7.59444 10.0053 7.71856 9.8816C7.83028 9.76988 7.96733 9.59083 8.09194 9.44566C8.21661 9.30049 8.25767 9.19644 8.34072 9.03071C8.42383 8.86455 8.38228 8.71944 8.32022 8.59477C8.25811 8.47016 7.76061 7.24538 7.55289 6.74738C7.35089 6.26227 7.14561 6.32816 6.99328 6.32004C6.84811 6.31288 6.68244 6.31145 6.51628 6.31145C6.35011 6.31145 6.08078 6.37352 5.85256 6.62277C5.62433 6.87199 4.98162 7.4741 4.98162 8.69838C4.98162 9.92266 5.87311 11.1064 5.99772 11.2725C6.12233 11.4387 7.75244 13.9517 10.2483 15.0299C10.8418 15.2863 11.3054 15.4395 11.6669 15.5542C12.2628 15.7437 12.8052 15.717 13.234 15.653C13.712 15.5814 14.7061 15.0509 14.9133 14.4698C15.1206 13.8887 15.1206 13.3902 15.0585 13.2865C14.9964 13.1829 14.8303 13.1204 14.5815 12.9958L14.5819 12.9948Z"
        fill="#25D366"
      />
    </svg>
  );
};

export const TelegramIcon = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="url(#paint0_linear_611_1614)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.51633 9.89096C7.4291 8.6137 9.37614 7.78815 10.3574 7.38317C13.13 6.23052 13.7064 6.02803 14.0802 6.01245C14.1581 6.01245 14.345 6.02803 14.4696 6.12149C14.5631 6.19937 14.5942 6.3084 14.6098 6.38628C14.6254 6.46416 14.6409 6.6355 14.6254 6.77569C14.4696 8.3489 13.831 12.1963 13.4883 13.9564C13.3481 14.704 13.0677 14.9533 12.8029 14.9844C12.2266 15.0311 11.7749 14.595 11.2141 14.2368C10.3419 13.6604 9.84343 13.3022 8.98673 12.7414C8.00542 12.0872 8.64405 11.729 9.2048 11.1526C9.34499 10.9969 11.9151 8.676 11.9618 8.45793C11.9618 8.42678 11.9774 8.33332 11.9151 8.2866C11.8528 8.23987 11.7749 8.25544 11.7126 8.27102C11.6191 8.28659 10.2173 9.22117 7.4914 11.0592C7.08642 11.3396 6.72816 11.4642 6.40106 11.4642C6.04281 11.4642 5.35745 11.2617 4.84343 11.0903C4.22038 10.8878 3.72193 10.7788 3.76866 10.4361C3.79982 10.2648 4.04904 10.0779 4.51633 9.89096Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_611_1614"
          x1={0}
          y1="9.99276"
          x2="19.9855"
          y2="9.99276"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AABEE" />
          <stop offset={1} stopColor="#229ED9" />
        </linearGradient>
      </defs>
    </svg>
  );
};