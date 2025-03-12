import { create } from 'zustand';

interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

interface ChatbotStore {
  chat: ChatMessage[];
  setChat: (chat: ChatMessage[] | ((prevChat: ChatMessage[]) => ChatMessage[])) => void;
}

const useChatbotStore = create<ChatbotStore>(set => ({
  chat: [],
  setChat: chat => set(state => ({ chat: typeof chat === 'function' ? chat(state.chat) : chat }))
}));

export default useChatbotStore;
