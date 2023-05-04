import { createRoot } from 'react-dom/client';

// eslint-disable-next-line -- The element is guaranteed to exist. -- @typescript-eslint/no-non-null-assertion
const rootElement = document.querySelector('#root')!;
const root = createRoot(rootElement);
root.render(<h1>Hello there!</h1>);
