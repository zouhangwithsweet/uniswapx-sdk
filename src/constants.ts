export const PERMIT2_MAPPING: { readonly [key: number]: string } = {
  1: "0x000000000022d473030f116ddee9f6b43ac78ba3",
  5: "0x000000000022d473030f116ddee9f6b43ac78ba3",
  137: "0x000000000022d473030f116ddee9f6b43ac78ba3",
  12341234: "0x000000000022d473030f116ddee9f6b43ac78ba3",
};

export const ORDER_QUOTER_MAPPING: { readonly [key: number]: string } = {
  1: "0x54539967a06Fc0E3C3ED0ee320Eb67362D13C5fF",
  5: "0x54539967a06Fc0E3C3ED0ee320Eb67362D13C5fF",
  137: "0x54539967a06Fc0E3C3ED0ee320Eb67362D13C5fF",
  12341234: "0xbea0901A41177811b099F787D753436b2c47690E",
};

export const EXCLUSIVE_FILLER_VALIDATION_MAPPING: {
  readonly [key: number]: string;
} = {
  1: "0x8A66A74e15544db9688B68B06E116f5d19e5dF90",
  5: "0x0000000000000000000000000000000000000000",
  12341234: "0x8A66A74e15544db9688B68B06E116f5d19e5dF90",
};

export enum KNOWN_EVENT_SIGNATURES {
  ERC20_TRANSFER = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
}

export enum OrderType {
  Dutch = "Dutch",
}

type Reactors = {
  [key in OrderType]: string;
};

type ReactorMapping = { readonly [key: number]: Reactors };
type ReverseReactorMapping = {
  [key: string]: { chainId: number; orderType: OrderType };
};

export const REACTOR_ADDRESS_MAPPING: ReactorMapping = {
  1: {
    [OrderType.Dutch]: "0x6000da47483062A0D734Ba3dc7576Ce6A0B645C4",
  },
  5: {
    [OrderType.Dutch]: "0x6000da47483062A0D734Ba3dc7576Ce6A0B645C4",
  },
  137: {
    [OrderType.Dutch]: "0x6000da47483062A0D734Ba3dc7576Ce6A0B645C4",
  },
  12341234: {
    [OrderType.Dutch]: "0xbD7F9D0239f81C94b728d827a87b9864972661eC",
  },
};

// https://github.com/mds1/multicall
export const MULTICALL_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";

export const REVERSE_REACTOR_MAPPING: ReverseReactorMapping = Object.entries(
  REACTOR_ADDRESS_MAPPING
).reduce((acc: ReverseReactorMapping, [chainId, orderTypes]) => {
  for (const [orderType, reactorAddress] of Object.entries(orderTypes)) {
    // lowercase for consistency when parsing orders
    acc[reactorAddress.toLowerCase()] = {
      chainId: parseInt(chainId),
      orderType: OrderType[orderType as keyof typeof OrderType],
    };
  }

  return acc;
}, {});

export const BPS = 10000;
