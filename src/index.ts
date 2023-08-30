import { Bundle } from '@lisa-env/type';
import gcc from '@binary/gcc-arm-none-eabi-10.3';
import zephyrSDK from '@binary/zephyr-sdk-multi';

export default <Bundle>{
  binaries: [
    'cskburn',
    'zephyr-sdk-multi',
    'gcc-arm-none-eabi-10.3',
    'jlink-venus',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'zephyr',
    ZEPHYR_SDK_INSTALL_DIR: zephyrSDK.homeDir,
    GNUARMEMB_TOOLCHAIN_PATH: gcc.homeDir,
  },
};
