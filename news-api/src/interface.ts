export interface Controller {
  baseLink: string,
  options: Options[];
}

export interface Options {
  apiKey: string
}

// export interface View {
//   news: object;
//   sources: object;
// }


// export interface PointerEvent {
//   isTrusted: boolean;
//   altKey: boolean;
//   altitudeAngle: number;
//   azimuthAngle: number;
//   bubbles: boolean;
//   button: number;
//   buttons: number;
//   cancelBubble: boolean;
//   cancelable: boolean;
//   clientX: number;
//   clientY: number;
//   composed: boolean;
//   ctrlKey: boolean;
//   currentTarget: null;
//   defaultPrevented: boolean
//   detail: number;
//   eventPhase: number;
//   fromElement: null;
//   height: number;
//   isPrimary: boolean;
//   layerX: number;
//   layerY: number;
//   metaKey: boolean;
//   movementX: number;
//   movementY: number;
//   offsetX: number;
//   offsetY: number;
//   pageX: number;
//   pageY: number;
//   // path: (7)[div.source__item, div.sources.buttons, main, body, html, document, Window]
//   pointerId: number;
//   pointerType: string;
//   pressure: number;
//   relatedTarget: null;
//   returnValue: boolean;
//   screenX: number;
//   screenY: number;
//   shiftKey: boolean;
//   // sourceCapabilities: InputDeviceCapabilities { firesTouchEvents: false }
//   // srcElement: div.source__item
//   tangentialPressure: number;
//   // target: div.source__item
//   tiltX: number;
//   tiltY: number;
//   timeStamp: number;
//   toElement: null;
//   twist: number;
//   type: string;
//   // view: Window { window: Window, self: Window, document: document, name: '', location: Location, … }
//   which: number;
//   width: number;
//   x: number;
//   y: number;
// }

// export interface Path {

// }