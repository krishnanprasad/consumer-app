import { ToasterEventTypes } from './toaster-event-types';

export interface ToastEvent {
  type: ToasterEventTypes;
  title: string;
  message: string;
}
