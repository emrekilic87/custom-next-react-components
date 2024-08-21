import Button from '../../components/Button';
export default function Buttons() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <div className="flex flex-col justify-center items-center space-y-4">
    {/* Default button */}
    <Button text="Click me" onClick={() => handleClick()} className='bg-green-500 hover:bg-green-600' />

    {/* Button with predefined Tailwind class for rounding */}
    <Button text="Predefined Rounded-lg" round="rounded-lg" className='bg-green-500 hover:bg-green-600' />

    {/* Button with full rounding using boolean */}
    <Button text="Full Rounded" round className='bg-green-500 hover:bg-green-600'/>

    {/* Button with specific rounding in pixels */}
    <Button text="Custom 10px Rounding" round={10} className='bg-green-500 hover:bg-green-600'/>

    {/* Button with arbitrary rounding using a string */}
    <Button text="Custom 20px Rounding" round="20px" className="bg-green-500 hover:bg-green-600" />
  </div>
}