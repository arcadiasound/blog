import Arweave from "arweave";
import { WarpFactory } from "warp-contracts";

export const arweave = Arweave.init({});

export const warp = WarpFactory.forMainnet();
