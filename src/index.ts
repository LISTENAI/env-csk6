import gcc from '@binary/gcc-arm-none-eabi-9';

interface Bundle {
  bundle: string[];
  env: Record<string, string>;
};

export default <Bundle>{
  bundle: [
    'gcc-arm-none-eabi-9',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'gnuarmemb',
    GNUARMEMB_TOOLCHAIN_PATH: gcc.homeDir,
  },
};
