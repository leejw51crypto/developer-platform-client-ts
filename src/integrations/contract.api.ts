import { ApiResponse, Method } from './api.interfaces.js';
import { BaseUrl } from './const.js';

/**
 * Fetches the ABI (Application Binary Interface) of a specific contract by its address on a particular blockchain network.
 *
 * @async
 * @function getContractABI
 * @param {string} chainId - The ID of the blockchain network (e.g., Ethereum, Cronos).
 * @param {string} contractAddress - The contract address on the blockchain for which the ABI needs to be fetched.
 * @param {string} apiKey - The API key used for authentication with the server.
 * @returns {Promise<ApiResponse>} - A promise that resolves to the ABI of the contract or throws an error if the request fails.
 * @throws {Error} Will throw an error if the fetch request fails or the server responds with an error message.
 *
 * @example
 * const abi = await getContractABI('1', '0x...', 'your-api-key');
 * console.log(abi);
 */
export const getContractABI = async (
  chainId: string,
  contractAddress: string,
  apiKey: string
): Promise<ApiResponse> => {
  console.log('********************************');
  let currentTime = new Date().toISOString();
  let currentLocalTime = new Date().toLocaleString();
  console.log('getContractABI', chainId, contractAddress, currentTime, currentLocalTime);
  console.log('********************************');

  const url = `${BaseUrl}/v1/cdc-developer-platform/contract/${chainId}/contract-abi?contractAddress=${contractAddress}&apiKey=${apiKey}`;

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
    console.error(`[contractApi/getContractABI] - ${error.message}`);
    throw new Error(`Failed to fetch contract ABI: ${error.message}`);
  }
};
