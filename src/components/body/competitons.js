import compic from '../../img/Group 45236.png';
import '../../App.css';
function Competitions() {
  return (
    <div className="bg-[#17171F] border-[1px] border-solid border-white rounded-3xl max-h-[478px] border-opacity-5 mt-14 flex justify-between items-center">
      <div className="w-1/2 pl-9">
        <p className='text-[#A3A4AE] text-3xl font-bold'>Special page</p>
        <p className='text-5xl font-bold'>Competitions</p>
        <p className='text-[#A3A4AE] text-sm pt-10 w-[500px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
          
        </p>
        <div className='flex items-center gap-3'>
            <div className='flex flex-col items-center gradient-rectangle  rounded-2xl w-32 h-24 py-4 mt-9'>
                <p className='font-bold text-2xl text-[#FA4B68]'>
                    72
                </p>
                <p className='text-[#A3A4AE] text-xs pt-4'>Running</p>
            </div>
            <div className='flex flex-col items-center gradient-rectangle  rounded-2xl w-32 h-24 py-4 mt-9'>
                <p className='font-bold text-2xl text-[#FBAD25]'>
                    08
                </p>
                <p className='text-[#A3A4AE] text-xs pt-4'>Open trades</p>
            </div>
            <div className='flex flex-col items-center gradient-rectangle  rounded-2xl w-32 h-24 py-4 mt-9'>
                <p className='font-bold text-2xl text-[#1BC1BA]'>
                    34
                </p>
                <p className='text-[#A3A4AE] text-xs pt-4'>Active brokers</p>
            </div>
            <div className='flex flex-col items-center gradient-rectangle  rounded-2xl w-32 h-24 py-4 mt-9'>
                <p className='font-bold text-2xl text-[#39A4F8]'>
                    1.4M
                </p>
                <p className='text-[#A3A4AE] text-xs pt-4'>Active participants</p>
            </div>
            
        </div>
      </div>
      <div>
        <img src={compic} className="pr-10" />
      </div>
    </div>
  );
}

export default Competitions;
