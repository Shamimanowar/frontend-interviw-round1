import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={199}
    height={248}
    viewBox='0 0 199 248'
    fill='none'
    {...props}
  >
    <path
      stroke='#fff'
      strokeWidth={2}
      d='M119 208h40M39 40h10c16.569 0 30 13.431 30 30v10M119 208h-10c-16.569 0-30-13.431-30-30V79M136 184l24 24-24 24'
    />
    <circle cx={40} cy={40} r={5} fill='#fff' transform='rotate(-180 40 40)' />
  </svg>
);
export default SvgComponent;
