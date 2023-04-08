import { getRandomId } from "../helpers/random";

export const defaultSize = {
  w: 250,
  h: 250
}

const getInitialData = (type: string, props: any) => {
  if (type === 'note') {
    const note = {
        nid: getRandomId('n'),
        x: 0,
        y: 0,
        z: 1,
        text: '',
        ...defaultSize,
        ...props
    }
    return note;
  }
  return null;
};

export default getInitialData;
