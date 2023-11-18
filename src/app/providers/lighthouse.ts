import lighthouse from "@lighthouse-web3/sdk";

const LIGHTHOUSE_API_KEY = process.env.LIGHTHOUSE_API_KEY ?? "";

export const uploadToLighthouse = async ({ path }: { path: string }) => {
  return await lighthouse.upload(path, LIGHTHOUSE_API_KEY);
};
