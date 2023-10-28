import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={120}
    height={80}
    fill='none'
    {...props}
  >
    <path stroke='#fff' strokeDasharray='6 2' strokeWidth={2} d='M0 40h80' />
    <path stroke='#fff' strokeWidth={2} d='m57 16 24 24-24 24' />
  </svg>
);
export default SvgComponent;
