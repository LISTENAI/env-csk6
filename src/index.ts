import { Bundle } from '@lisa-env/type';
import gcc from '@binary/gcc-arm-none-eabi-10.3';
import zephyrSDK_14 from '@binary/zephyr-sdk-0.14.2';
import zephyrSDK_16 from '@binary/zephyr-sdk-0.16.1';

export default <Bundle>{
  binaries: [
    'cskburn',
    'zephyr-sdk-0.14.2',
    'zephyr-sdk-0.16.1',
    'gcc-arm-none-eabi-10.3',
    'jlink-venus',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'zephyr',
    ZEPHYR_14_SDK_INSTALL_DIR: zephyrSDK_14.homeDir,
    ZEPHYR_16_SDK_INSTALL_DIR: zephyrSDK_16.homeDir,
    GNUARMEMB_TOOLCHAIN_PATH: gcc.homeDir,
  },
};
