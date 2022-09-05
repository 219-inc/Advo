import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
export default function HomePage() {

  const navigate = useNavigate();

  const onLogOutPressed = () => {
    Auth.signOut()
      .then(data => {
        console.log(data);
        navigate('/');
        window.location.reload();
      }).catch(err => {
        console.log(err);
      }
      );
  }
  

  return (
    <div className='h-full bg-white px-8 py-6'>
      <h1 className='text-5xl text-gray-800' onClick={onLogOutPressed}>
        Welcome back to <span className='font-bold text-black'>Astro's<br/> admin</span> environment
      </h1>
    </div>
  )
}
