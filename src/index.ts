import { Bundle, FlasherArgs } from '@lisa-env/type';
import gcc from '@binary/gcc-arm-none-eabi-9';
import jlink from '@binary/jlink';
import { join, resolve } from 'path';

const JLINK_DIR = join(__dirname, '..', 'jlink');
const VENUS_FLASH_BASE = 0x18000000;

function makeFlashExecArgs(partitions: Record<number, string>, otherArgs: string[] = []): FlasherArgs {
  const execArgs = [
    `-jflashlog${resolve(join(JLINK_DIR, 'jflash.log'))}`,
    `-jlinkdevicesxmlpath${resolve(join(JLINK_DIR, 'JLinkDevices.xml'))}`,
    `-openprj${resolve(join(JLINK_DIR, 'Venus.jflash'))}`,
  ];

  for (const [key, file] of Object.entries(partitions)) {
    const addr = parseInt(key);
    if (!isNaN(addr)) {
      execArgs.push(`-open${resolve(file)},0x${(VENUS_FLASH_BASE + addr).toString(16)}`, '-auto');
    }
  }

  return {
    command: join(jlink.binaryDir, 'JFlash'),
    args: [...execArgs, ...otherArgs, '-exit'],
  };
}

export default <Bundle>{
  binaries: [
    'gcc-arm-none-eabi-9',
    'jlink',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'gnuarmemb',
    GNUARMEMB_TOOLCHAIN_PATH: gcc.homeDir,
  },
  flasher: { makeFlashExecArgs },
};
