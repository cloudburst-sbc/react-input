/// <reference types="react" />
import type { CustomInputEvent, CustomInputEventHandler, Init, Tracking } from '../types';
interface UseInputParam<D> {
    init: Init;
    tracking: Tracking<D>;
    customInputEventType?: string;
    customInputEventHandler?: CustomInputEventHandler<CustomInputEvent<D>>;
}
export default function useInput<D = unknown>({ init, tracking, customInputEventType, customInputEventHandler, }: UseInputParam<D>): React.MutableRefObject<HTMLInputElement | null>;
export {};
