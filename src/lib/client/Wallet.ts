import { ApiResponse } from '../../integrations/api.interfaces.js';
import { createWallet, getBalance } from '../../integrations/wallet.api.js';
import { Client } from './Client.js';

/**
 * Wallet class handles operations related to wallet creation and balance retrieval.
 *
 * @class
 */
export class Wallet {
  /**
   * Creates a new wallet using the API.
   *
   * @async
   * @returns {Promise<ApiResponse>} - A promise that resolves to the newly created wallet details.
   * @throws {Error} - Throws an error if the request fails.
   *
   * @example
   * const newWallet = await Wallet.create();
   * console.log(newWallet);
   */
  public static async create(): Promise<ApiResponse> {
    return await createWallet();
  }

  /**
   * Retrieves the balance of the wallet for a specific address.
   *
   * @async
   * @param {string} address - The wallet address to fetch the balance for.
   * @returns {Promise<ApiResponse>} - A promise that resolves to the balance of the wallet.
   * @throws {Error} - Throws an error if the request fails.
   *
   * @example
   * const balance = await Wallet.balance('0x...');
   * console.log(balance);
   */
  public static async balance(address: string): Promise<ApiResponse> {
    const chainId = Client.getChainId();
    return await getBalance(chainId, address);
  }
}
