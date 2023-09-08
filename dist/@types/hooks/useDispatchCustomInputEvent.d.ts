/// <reference types="react" />
import type { CustomInputEvent, CustomInputEventHandler, ExtendedHTMLInputElement } from '../types';
export default function useDispatchCustomInputEvent<D = unknown>(inputRef: React.MutableRefObject<ExtendedHTMLInputElement | null>, customInputEventType: string | undefined, customInputEventHandler: CustomInputEventHandler<CustomInputEvent<D>> | undefined): [React.MutableRefObject<boolean>, (customInputEventDetail: D) => void];
