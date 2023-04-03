/** @format */
import { createContext } from '@builder.io/qwik';

export const MessagesContext = createContext<{ messages: string[]; index: number }>('MESSAGES');
