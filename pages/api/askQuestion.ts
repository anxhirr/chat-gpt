import { query } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'
import queryApi from '../../lib/queryApi'
import admin from 'firebase-admin'
import adminDb from '../../firebaseAdmin'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body

  if (!prompt) {
    res.status(400).json({ answer: 'No prompt provided' })
    return
  }
  if (!chatId) {
    res.status(400).json({ answer: 'No chatId provided' })
    return
  }

  // ChatGPT Query
  const response = await queryApi(prompt, model)

  const message: Message = {
    text: response || 'ChatGPT was unable to find an answer for your question!',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar:
        'https://pbs.twimg.com/profile_images/1598924796372422656/nEcoIDXz_400x400.jpg',
    },
  }

  await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message)

  res.status(200).json({ answer: message.text })
}
