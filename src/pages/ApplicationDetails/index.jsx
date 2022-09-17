import {TiTick} from 'react-icons/ti';
import {ImCross} from 'react-icons/im';
import {GrStatusPlaceholderSmall} from 'react-icons/gr';
import { useParams } from 'react-router-dom';


const ApplicationDetails = () => {
  const { id } = useParams();

	return (
        <div className="mt-5">
			
          <div className="pl-5 grid grid-cols-3 gap-4 content-start ">
		 
		  <button className='flex justify-center  content-center text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'> <TiTick /> Accept </button>
		  <button className= "justify-evenly text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex " ><ImCross/> Reject </button>
		  <button className= "flex justify-evenly text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> <GrStatusPlaceholderSmall/> Hold </button>

		  </div>

		  <div className='flex p-6 -mt-2'>
		<div className=" h-[400px] w-1/2 p-6 bg-slate-50">

                  <h1>ApplicationId:{id}</h1>
				  <h1>Application_status:APPROVED</h1>
				  <h1>UserId: 1</h1>
				  <h1>Specialization: bancrupt</h1>
				  <h1>City: NewDelhi</h1>
				  <h1>CreatedOn: 2022-09-15 13:29:53</h1>
				  <h1>UpdatedOn: 2022-09-15 13:29:53</h1>
				  <h1>Name: Divyansh</h1>
				  <h1>Email: divyanshg809@gmail.com</h1>
				  <h1>Phone: +918178392040</h1>

		</div>
			<div className=" text-center h-[400px] w-1/2 bg-white" >
				 
				
				
			</div>
		</div>

		</div>

	


		
	);
};

export default ApplicationDetails;
