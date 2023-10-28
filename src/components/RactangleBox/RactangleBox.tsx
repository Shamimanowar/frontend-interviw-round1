import './RactangleBox.css';

interface RactangleBoxProps {
  children: React.ReactNode;
}

const RactangleBox = ({ children }: RactangleBoxProps) => {
  return (
    <div className='ractangle_box'>
      <p>{children}</p>
    </div>
  );
};

export default RactangleBox;
