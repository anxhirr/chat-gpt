import NewChat from './NewChat'

const SideBar = () => {
  return (
    <div className='flex flex-col h-screen p-2'>
      <div className='flex-1'>
        <div>
          <NewChat />

          <div>{/* Model Selection  */}</div>

          {/* Map throught the ChatRows */}
        </div>
      </div>
    </div>
  )
}
export default SideBar
