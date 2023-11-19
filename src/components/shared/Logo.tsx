type LogoProps = {
  width: string
  height: string
  color: string
}

export default function Logo({ width, height, color }: LogoProps) {
  return (
    <span>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path
            d="M2454 5002 c-71 -25 -152 -79 -169 -113 -20 -38 -19 -78 4 -116 26
-41 55 -50 88 -26 63 45 80 53 111 53 47 0 86 -23 114 -67 20 -33 23 -51 23
-133 0 -93 1 -96 33 -136 62 -77 53 -152 -33 -289 -49 -79 -153 -183 -203
-204 -27 -11 -32 -19 -32 -48 0 -117 -79 -383 -171 -573 -111 -230 -245 -421
-429 -610 -214 -219 -269 -344 -257 -588 4 -86 15 -154 40 -257 19 -77 38
-174 42 -215 12 -138 50 -234 131 -328 201 -235 780 -405 1143 -337 342 65
513 180 621 417 91 202 112 520 50 748 -56 204 -196 407 -395 576 -67 57 -138
154 -208 284 -58 106 -67 161 -67 404 0 281 20 502 65 706 12 52 17 122 17
230 0 133 -4 169 -26 253 -33 128 -75 204 -152 276 -101 95 -234 131 -340 93z
m287 -161 c18 -14 24 -29 24 -59 0 -48 -18 -72 -55 -72 -37 0 -55 24 -55 72 0
30 6 45 24 59 13 10 27 19 31 19 4 0 18 -9 31 -19z"
          />
          <path
            d="M2683 4794 c-9 -23 25 -48 44 -33 18 15 16 36 -3 43 -25 10 -34 7
-41 -10z"
          />
          <path
            d="M2226 4723 c-4 -12 -9 -80 -10 -151 -4 -141 -8 -155 -79 -251 -22
-30 -80 -96 -128 -147 -49 -51 -89 -99 -89 -106 0 -22 38 -76 61 -89 58 -31
291 23 415 96 58 34 126 114 169 200 41 79 40 107 -1 146 -37 34 -58 116 -44
171 12 48 1 94 -25 104 -18 7 -27 3 -89 -41 -79 -57 -135 -42 -159 43 -12 40
-15 44 -21 25z m195 -245 c13 -24 -12 -68 -39 -68 -43 0 -57 58 -21 84 25 17
45 12 60 -16z"
          />
          <path
            d="M1864 1049 c19 -223 27 -470 16 -511 -19 -68 -79 -119 -175 -147
-101 -29 -167 -64 -211 -113 -29 -33 -34 -45 -34 -89 l0 -52 47 7 c26 3 133 9
238 12 l190 6 60 -32 c70 -37 107 -36 196 4 107 50 318 79 456 64 114 -12 242
-42 295 -69 61 -31 123 -29 192 6 l56 28 188 -6 c104 -4 210 -10 235 -13 l47
-7 0 52 c0 45 -5 56 -36 91 -40 45 -126 89 -223 116 -48 13 -75 28 -107 58
-63 61 -68 89 -54 338 7 115 10 212 7 214 -3 3 -43 -8 -88 -24 l-84 -30 -5
-148 c-5 -136 -7 -154 -32 -204 -15 -30 -62 -92 -105 -138 l-78 -83 -93 -24
c-52 -13 -118 -33 -148 -45 l-54 -22 -54 22 c-30 12 -96 32 -148 45 l-93 24
-76 81 c-112 119 -128 155 -139 298 -5 64 -10 153 -10 197 l0 80 -81 40 c-45
22 -86 42 -91 44 -7 2 -8 -22 -4 -70z"
          />
        </g>
      </svg>
    </span>
  )
}
