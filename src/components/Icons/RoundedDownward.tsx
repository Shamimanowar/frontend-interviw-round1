import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={399}
    height={203}
    fill='none'
    {...props}
  >
    <path
      stroke='#fff'
      strokeWidth={2}
      d='M359 40v132c0 16.569-13.431 30-30 30H70c-16.569 0-30-13.431-30-30v-51'
    />
    <path stroke='#fff' strokeWidth={2} d='m16 144 24-24 24 24' />
    <circle cx={359} cy={40} r={5} fill='#fff' transform='rotate(-90 359 40)' />
  </svg>
);
export default SvgComponent;
