interface RatesColorsType {
  [rate: number]: {
    color: string;
    bgColor: string;
  };
}
const RatesColors: RatesColorsType = {
  45: {
    color: '#3f7e00',
    bgColor: 'rgba(63, 126, 0, 0.08)'
  },
  40: {
    color: '#5ba839',
    bgColor: 'rgba(91, 168, 41, 0.08)'
  },
  35: {
    color: '#9acd32',
    bgColor: 'rgba(154, 205, 50, 0.08)'
  },
  30: {
    color: '#cdd614',
    bgColor: 'rgba(205, 214, 20, 0.08)'
  },
  25: {
    color: '#ffba00',
    bgColor: 'rgba(255, 186, 0, 0.08)'
  },
  20: {
    color: '#ff7800',
    bgColor: 'rgba(255, 120, 0, 0.08)'
  },
  15: {
    color: '#ff2717',
    bgColor: 'rgba(255, 39, 23, 0.08)'
  },
  10: {
    color: '#c10914',
    bgColor: 'rgba(193, 9, 20, 0.08)'
  },
  5: {
    color: '#c10914',
    bgColor: 'rgba(193, 9, 20, 0.08)'
  },
  0: {
    color: '#22a958',
    bgColor: 'rgba(34,169,88,0.06)'
  }
}

export { RatesColors };
