import Svg, { SvgProps, Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width={200}
    height={200}
    data-name="Layer 1"
    viewBox="0 0 256 256"
    {...props}
  >
    <Defs></Defs>
    <G id="Male_3" data-name="Male 3">
      <Path
        id="Wallpaper"
        d="M249.54 128.15a120.63 120.63 0 0 1-28.37 77.91 119.07 119.07 0 0 1-9.23 9.82H45.39a102.32 102.32 0 0 1-9-8.88l-.82-1c-7-8.29-29.51-37.68-28.35-77.89C8.86 72.45 55.69 7 128.39 7a121.15 121.15 0 0 1 121.15 121.15Z"
        fill="#84d0f7"
      />
      <Path
        id="Sweater"
        d="M221.18 206.07a128 128 0 0 1-9.24 9.81 120.76 120.76 0 0 1-83.55 33.42c-39.39 0-68.91-20.92-83-33.42a106.39 106.39 0 0 1-9-8.88c-.22-.29-.51-.6-.82-1 13.54-13.62 31.73-24.21 52.67-30.2 5.86 14.59 21.6 25 40.12 25 17.2 0 32-9 38.71-22 .53-1 1-2 1.41-3.06.38.11.64.17 1.15.33 20.49 6.15 38.28 16.6 51.55 30Z"
        fill="#aa392d"
      />
      <Path
        id="Neckband"
        d="M168.49 175.83c-.42 1-.88 2-1.41 3.06-6.72 13-21.51 22-38.71 22-18.52 0-34.26-10.45-40.12-25 .44-.13.88-.24 1.32-.38.22 0 .42-.11.64-.17s.46-.11.68-.18a1.42 1.42 0 0 0 .22-.07s1.75-.46 3.4-.83a37.64 37.64 0 0 0 67.72 0 27.56 27.56 0 0 1 6.26 1.57Z"
        fill="#7c211a"
      />
      <Path
        id="Neck"
        d="M162.23 174.2a37.81 37.81 0 0 1-17.39 17.41 37.65 37.65 0 0 1-50.33-17.41c1.34-.33 2.69-.64 4.06-.91.33-.06.66-.13 1-.22.18 0 .33-.06.51-.09l.86-.17 1.19-.2c.28-.07.59-.11.9-.18h.09c.33-.86.68-1.78 1-2.8.11-.33.22-.7.33-1a32.83 32.83 0 0 0 .86-4 41.7 41.7 0 0 0 6.88 4.56c.18.09.35.18.53.29l.62.31.75.35.44.2c.11.07.24.11.37.18a3.62 3.62 0 0 1 .44.2l.44.17.19.09.53.2c.2.09.42.17.66.26l.73.27h.15c.15.07.33.11.51.18s.5.15.75.22.24.06.37.09l.68.19a38.16 38.16 0 0 0 4.52.8h.8c.2 0 .39 0 .61.05H128a30.26 30.26 0 0 0 9.68-1.61.1.1 0 0 0 .07 0 1.57 1.57 0 0 0 .35-.11c.79-.26 1.48-.55 2.12-.79l.83-.36c.07 0 .14-.06.23-.08a38.31 38.31 0 0 0 9.81-6.09q.45 2.06 1.14 4.35c.42 1.36.86 2.64 1.3 3.85.38.07.73.11 1.1.2s.73.13 1.08.2l1.09.2c.26 0 .52.11.79.15s.35.07.53.11c1.44.32 2.79.61 4.11.94Z"
      />
      <Path
        id="Hairs"
        d="M197.15 82.14a7.76 7.76 0 0 1-.35 2.4c-1.59 5.6-7.06 6.17-8.07 11.07-.2.9.09.44 0 3.21-.07 2-.22 6.55-1.52 9.53a10.51 10.51 0 0 1-3.26 4 6.61 6.61 0 0 0-4.13-2.93 6 6 0 0 0-2.35 0 66.51 66.51 0 0 0-.93-14.66A65.21 65.21 0 0 0 174 85c-.46-1.39-1-2.78-1.54-4.14a73.65 73.65 0 0 0-8.58-15.39C155.29 53.76 143 45.06 128.22 45.1a39.51 39.51 0 0 0-24.3 8.82C96.34 59.83 90.25 68.14 86 77a71.9 71.9 0 0 0-5.8 17.79 66.62 66.62 0 0 0-1 14.66 5.42 5.42 0 0 0-2.34 0 7 7 0 0 0-4.58 3.68 10.19 10.19 0 0 1-3.28-3.7c-2.27-4.79 1.1-7.45-1.26-12.39-2.09-4.39-6.06-4.81-7.18-9.88a12.21 12.21 0 0 1-.18-3.77c.53-4.69 3.37-5 4.32-8.7 1.33-5.27-3.48-8.34-1.34-14.82a5.7 5.7 0 0 1 .55-1.37c2.73-4.76 10.23-1.23 14-5.09 3.46-3.55-.25-9.3 4.69-14.15a7.39 7.39 0 0 1 2.1-1.59c5.55-2.69 10.82 4.9 15.74 3 3.92-1.52 2.53-7 8.13-10.25a12.07 12.07 0 0 1 6.59-1.63c6.35.35 7.89 6.06 12 5.51 3.94-.55 3.77-5.91 9.15-7.63a11.18 11.18 0 0 1 9 1.06c4.94 3.06 3.5 8.57 7.45 10.05 3.18 1.21 4.92-2.14 11.05-1.78 2 .11 4.78.28 7.18 2 5.51 3.88 2.01 11 7.01 14.6 3.5 2.53 7.07.37 12.12 4.32a8.64 8.64 0 0 1 2.69 2.77c2.52 4.48-2.44 7.94-.81 13.1 1.32 4.01 5.15 4.87 5.15 9.35Z"
      />
      <Path
        id="NeckShadow"
        d="M169.64 176.16c-.84 1-1.68 1.85-2.56 2.73a56.41 56.41 0 0 1-6.24 5.43 43.63 43.63 0 0 1-9.43 5.35 35.49 35.49 0 0 1-6.57 1.94 28.92 28.92 0 0 1-6 .51 31.61 31.61 0 0 1-11.53-2.38c-.22-.09-.44-.18-.66-.29a41.83 41.83 0 0 1-8.25-4.69A59.16 59.16 0 0 1 105.8 172c-.58-.77-1.13-1.56-1.68-2.36.11-.33.22-.7.33-1a32.83 32.83 0 0 0 .86-4c.6.46 1.19.93 1.81 1.37a43.31 43.31 0 0 0 5.07 3.19c.18.09.35.18.53.29l.62.31.75.35.44.2.37.18a3.62 3.62 0 0 1 .44.2l.44.17.19.09.53.2.66.26.73.27h.15c.15.07.33.11.51.18s.5.15.75.22.24.06.37.09l.68.19a32 32 0 0 0 4.52.8h.8c.2 0 .39 0 .61.05H128a31.38 31.38 0 0 0 9.68-1.61.1.1 0 0 0 .07 0 1.57 1.57 0 0 0 .35-.11c.66-.22 1.3-.46 1.94-.73l.18-.06c.28-.11.55-.24.83-.36.07 0 .14-.06.23-.08a45.63 45.63 0 0 0 8.2-4.85c.55-.4 1.08-.82 1.61-1.24q.45 2.06 1.14 4.35c.42 1.36.86 2.64 1.3 3.85.38.07.73.11 1.1.2s.73.13 1.08.2l1.09.2c.26 0 .52.11.79.15s.35.07.53.11c1.36.29 2.71.58 4 .91 2.12.48 4.21 1 6.26 1.63Z"
      />
      <Path
        id="RightEar"
        d="M186.09 120.25c-.15 5.16-3.45 10.38-7.14 12.3a7 7 0 0 1-1.56.6h-.12a5 5 0 0 1-2 .06 5.13 5.13 0 0 1-2-.87l-.28-.21a7.2 7.2 0 0 1-1.11-1.1c-2.66-3.21-3.75-9.22-2-14a14.66 14.66 0 0 1 3.21-5 9 9 0 0 1 4.4-2.58 6 6 0 0 1 2.35 0c4.36.86 6.39 6.48 6.25 10.8Z"
      />
      <Path
        id="RightEarShadow"
        d="M186.08 120.25c-.15 5.16-3.43 10.39-7.14 12.3a6.81 6.81 0 0 1-1.54.6.32.32 0 0 1-.13 0 4.51 4.51 0 0 1-2 .07 5.14 5.14 0 0 1-2-.86 2.21 2.21 0 0 0-.29-.22 6.8 6.8 0 0 1-1.1-1.11c-2.49-3-3.59-8.44-2.27-13.05.09-.33.2-.64.31-.94a14.45 14.45 0 0 1 3.22-5 8.81 8.81 0 0 1 4.39-2.58 6 6 0 0 1 2.35 0 6.61 6.61 0 0 1 4.13 2.93 13.8 13.8 0 0 1 2.07 7.86Z"
        opacity="0.3"
      />
      <Path
        id="LeftEar"
        d="M84.88 131.05a7.13 7.13 0 0 1-1.24 1.22s-.11.06-.15.11a5.26 5.26 0 0 1-2 .86 4.9 4.9 0 0 1-2-.07.26.26 0 0 1-.11 0 7.22 7.22 0 0 1-1.57-.6c-3.68-1.91-7-7.14-7.14-12.3a14.17 14.17 0 0 1 1.7-7.14 7 7 0 0 1 4.58-3.68 5.42 5.42 0 0 1 2.34 0 8.62 8.62 0 0 1 4.33 2.55 14.42 14.42 0 0 1 3.22 5 12.58 12.58 0 0 1 .44 1.48c1.1 4.52-.02 9.71-2.4 12.57Z"
      />
      <Path
        id="Head"
        d="M177.47 109.45c-.09 2.18-.29 4.37-.6 6.55a77.85 77.85 0 0 1-4 16.16c-4.63 13-12.39 24.53-21.75 32.07-.53.42-1.06.84-1.61 1.24a45.63 45.63 0 0 1-8.2 4.85c-.09 0-.16.06-.23.08-.28.12-.55.25-.83.36l-.18.06c-.64.27-1.28.51-1.94.73a1.57 1.57 0 0 1-.35.11.1.1 0 0 1-.07 0 31.38 31.38 0 0 1-9.68 1.61H126.31c-.22 0-.41 0-.61-.05h-.8a32 32 0 0 1-4.52-.8l-.68-.19c-.13 0-.24-.07-.37-.09s-.51-.16-.75-.22-.36-.11-.51-.18h-.15l-.73-.27-.66-.26-.53-.2-.19-.09-.44-.17a3.62 3.62 0 0 0-.44-.2l-.37-.18-.44-.2-.75-.35-.62-.31c-.18-.11-.35-.2-.53-.29a43.31 43.31 0 0 1-5.07-3.19c-.62-.44-1.21-.91-1.81-1.37a58.6 58.6 0 0 1-8.51-8.46 76.62 76.62 0 0 1-13.16-23.81c-.15-.36-.26-.73-.4-1.11a77.71 77.71 0 0 1-3.39-14.55c-.18-1.19-.31-2.38-.42-3.59-.09-1-.15-2-.2-3.06v-.51a66.62 66.62 0 0 1 1-14.66A71.9 71.9 0 0 1 86 77c4.21-8.84 10.3-17.15 17.88-23.06a39.51 39.51 0 0 1 24.3-8.82c14.81 0 27.07 8.66 35.64 20.37a73.65 73.65 0 0 1 8.58 15.39c.55 1.36 1.08 2.75 1.54 4.14a65.21 65.21 0 0 1 2.56 9.79 66.51 66.51 0 0 1 .97 14.64Z"
      />
      <Path
        id="HairsShadow"
        d="M177.31 100.63a30.22 30.22 0 0 1-7.65-1.43l-.4-.16c-7.89-2.71-7.67-7.56-14.15-9.23-7.32-1.88-10.05 3.68-18.08 1.59-6.1-1.59-5.93-5.16-10.86-5.54-7.34-.55-10.25 7.72-16.43 6.46-4-.81-4.38-4.63-9.26-5.71a13.65 13.65 0 0 0-9.14 1.7c2.36-2.27 3-5 6.35-5.82 4.63-1.17 6.15 3.57 12.1 3.5 7.72-.08 9.53-7 16.43-6.45 4.93.37 4.76 3.94 10.86 5.53 8 2.09 10.76-3.48 18.08-1.59 6.48 1.68 6.26 6.53 14.15 9.24a28.71 28.71 0 0 0 7.19 1.54s.13 1.06.42 3.13c.35 3.04.39 3.24.39 3.24Z"
      />
      <Path
        id="Hairs-2"
        d="M182.73 92.72a6.12 6.12 0 0 1-2.93 1.36l-.35.07a13 13 0 0 1-3 .11 28.71 28.71 0 0 1-7.19-1.54c-7.89-2.71-7.67-7.56-14.15-9.24-7.32-1.89-10.05 3.68-18.08 1.59-6.1-1.59-5.93-5.16-10.86-5.53-6.9-.53-8.71 6.37-16.43 6.45-5.95.07-7.47-4.67-12.1-3.5-3.35.84-4 3.55-6.35 5.82a10 10 0 0 1-2.82 2 15.05 15.05 0 0 1-7.58 1.24c-2.8-.27-5.38-1.33-6.68-3.11-3.69-5.07 3.06-15.26 5.93-19.62 15.1-22.82 41.35-27.6 44.77-28.15.88-.15 2-.33 3.64-.51C136.57 39.3 154 39 168 51.07c15.06 12.99 20.84 36.18 14.73 41.65Z"
        data-name="Hairs"
      />
    </G>
  </Svg>
);
export default SvgComponent;