'use client'

import { BiPlus } from 'react-icons/bi'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const NewChat = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const createNewChat = async () => {
    // Create a new chat
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    )
    router.push(`/chat/${doc.id}`)
  }
  return (
    <div onClick={createNewChat} className='border-gray-700 border chatRow'>
      <BiPlus className='text-xl' />
      <p>New Chat</p>
    </div>
  )
}
export default NewChat
