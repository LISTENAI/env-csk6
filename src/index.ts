import { Bundle } from '@lisa-env/type';
import gcc from '@binary/gcc-arm-none-eabi-9';

export default <Bundle>{
  binaries: [
    'gcc-arm-none-eabi-9',
    'jlink-venus',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'gnuarmemb',
    GNUARMEMB_TOOLCHAIN_PATH: gcc.homeDir,
  },
};
