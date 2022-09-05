import 'animate.css';

export default function PreLoader() {
  return (
    <div className='min-h-screen w-full bg-gray-100 flex items-center justify-center'> 
      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg3.svg" className='h-28 w-28 animate__animated animate__flash' alt="logo" />
    </div>
  )
}
