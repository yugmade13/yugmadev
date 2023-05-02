export const size = {
  xs: '375px',
  sm: '425px',
  md: '600px',
  lg: '768px',
  xl: '1024px',
  xxl: '1440px',
};

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};

export default device;
