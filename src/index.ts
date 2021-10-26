const TOOLS = [
  'gcc-arm-none-eabi-9',
];

interface ITool {
  HOME: string;
  PATH: string;
  version(): Promise<string>;
}

export async function path(): Promise<Record<string, string>> {
  const path: Record<string, string> = {};
  for (const name of TOOLS) {
    const mod = await import(`@tool/${name}`) as ITool;
    path[name] = mod.PATH;
  }
  return path;
}

export async function version(): Promise<Record<string, string>> {
  const version: Record<string, string> = {};
  for (const name of TOOLS) {
    const mod = await import(`@tool/${name}`) as ITool;
    version[name] = await mod.version();
  }
  return version;
}

export async function env(): Promise<Record<string, string>> {
  const gcc = await import('@tool/gcc-arm-none-eabi-9');
  return {
    ZEPHYR_TOOLCHAIN_VARIANT: 'gnuarmemb',
    GNUARMEMB_TOOLCHAIN_PATH: gcc.HOME,
  };
}
