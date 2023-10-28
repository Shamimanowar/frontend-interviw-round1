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
      d='M40 163V31C40 14.431 53.431 1 70 1h259c16.569 0 30 13.431 30 30v51'
    />
    <circle cx={359} cy={82} r={5} fill='#fff' transform='rotate(90 359 82)' />
    <path stroke='#fff' strokeWidth={2} d='m64 140-24 24-24-24' />
  </svg>
);
export default SvgComponent;
