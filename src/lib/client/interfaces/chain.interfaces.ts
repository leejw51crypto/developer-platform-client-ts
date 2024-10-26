/**
 * Enum for Cronos EVM chain IDs.
 *
 * Represents the mainnet and testnet for the Cronos EVM network.
 *
 * @enum {string}
 *
 * @example
 * const mainnetChainId = CronosEvm.Mainnet;
 * console.log(mainnetChainId);
 */
export enum CronosEvm {
  /**
   * Cronos EVM Mainnet chain ID.
   *
   * @type {string}
   */
  Mainnet = '25',

  /**
   * Cronos EVM Testnet chain ID.
   *
   * @type {string}
   */
  Testnet = '338',
}

/**
 * Enum for Cronos ZK EVM chain IDs.
 *
 * Represents the mainnet and testnet for the Cronos ZK EVM network.
 *
 * @enum {string}
 *
 * @example
 * const testnetChainId = CronosZkEvm.Testnet;
 * console.log(testnetChainId);
 */
export enum CronosZkEvm {
  /**
   * Cronos ZK EVM Mainnet chain ID.
   *
   * @type {string}
   */
  Mainnet = '388',

  /**
   * Cronos ZK EVM Testnet chain ID.
   *
   * @type {string}
   */
  Testnet = '240',
}
