import { ApiResponse, Method } from './api.interfaces.js';
import { BaseUrl } from './const.js';

/**
 * Creates a new wallet using the API.
 *
 * @async
 * @throws Will throw an error if the wallet creation fails or the server responds with an error.
 * @returns {Promise<ApiResponse>} - The newly created wallet information.
 * @throws {Error} Will throw an error if the create wallet request fails or the server responds with an error message.
 *
 * @example
 * const newWallet = await createWallet();
 * console.log(newWallet);
 */
export const createWallet = async (): Promise<ApiResponse> => {
  const url = `${BaseUrl}/v1/cdc-developer-platform/wallet`;

  try {
    const response = await fetch(url, {
      method: Method.POST,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const serverErrorMessage = errorBody.error || `HTTP error! status: ${response.status}`;
      throw new Error(serverErrorMessage);
    }

    return await response.json();
  } catch (e) {
    const error = e as Error;
    console.error(`[walletApi/createWallet] - ${error.message}`);
    throw new Error(`Failed to create wallet: ${error.message}`);
  }
};

/**
 * Fetches the native token balance of a wallet.
 *
 * @async
 * @param {string} chainId - The ID of the blockchain network (e.g., Ethereum, Cronos).
 * @param {string} address - The wallet address to check the balance for (e.g., 0x...).
 * @returns {Promise<ApiResponse>} - The native token balance of the wallet.
 * @throws {Error} Will throw an error if the fetch request fails or the server responds with an error message.
 *
 * @example
 * const balance = await getBalance('1', '0x...');
 * console.log(balance);
 */
export const getBalance = async (chainId: string, address: string): Promise<ApiResponse> => {
  const url = `${BaseUrl}/api/v1/cdc-developer-platform/wallet/${chainId}/balance?address=${address}`;

  try {
    const response = await fetch(url, {
      method: Method.GET,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const serverErrorMessage = errorBody.error || `HTTP error! status: ${response.status}`;
      throw new Error(serverErrorMessage);
    }

    return await response.json();
  } catch (e) {
    const error = e as Error;
    console.error(`[walletApi/getBalance] - ${error.message}`);
    throw new Error(`Failed to fetch wallet balance: ${error.message}`);
  }
};
