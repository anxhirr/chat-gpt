import { useEffect, useState } from 'react'
import { BsChatText, BsTrash } from 'react-icons/bs'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

type Props = {
  id: string
}

const ChatRow = ({ id }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session } = useSession()
  const [active, setActive] = useState(false)

  const [messages, loading, error] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
  )

  console.log(active)

  useEffect(() => {
    if (!pathname) return

    setActive(pathname.includes(id))
  }, [pathname])

  const removeChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
    router.replace('/')
  }

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${active ? 'bg-gray-700/50' : ''}`}
    >
      <BsChatText className='text-xl' />
      <p className='flex-1 hidden truncate md:inline-flex'>
        {messages?.docs[0]?.data().text || 'No messages yet'}
      </p>
      <BsTrash onClick={removeChat} className='text-xl hover:text-red-700' />
    </Link>
  )
}
export default ChatRow
