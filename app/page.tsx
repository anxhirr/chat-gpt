import { BsSun, BsLightningCharge, BsExclamationTriangle } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-white'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center'>
            <BsSun className='text-4xl' />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>"Explain Something to me"</p>
            <p className='infoText'>
              "What is the difference between a dog and a cat?"
            </p>
            <p className='infoText'>"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center'>
            <BsLightningCharge className='text-4xl' />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>Change the ChatGPT model to use</p>
            <p className='infoText'>
              Messages are stores in Firebase's Firestore
            </p>
            <p className='infoText'>
              "Hot Toast notifications when ChatGPT is thinking
            </p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center'>
            <BsExclamationTriangle className='text-4xl' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>
              May occasionally generate nonsense responses
            </p>
            <p className='infoText'>
              May occasionally produce hamful instructions or blased content
            </p>
            <p className='infoText'>
              Limited knowloedge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
