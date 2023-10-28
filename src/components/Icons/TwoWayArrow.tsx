import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={80}
    height={160}
    fill='none'
    {...props}
  >
    <path
      stroke='#fff'
      strokeWidth={2}
      d='M40 40v80M28 51l12-12 12 12M52 109l-12 12-12-12'
    />
  </svg>
);
export default SvgComponent;
