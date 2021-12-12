


## Build

```shell script
make build
```

## Configuration

1. Generate POLYGON private key and ETH private key.

2. Transfer enough MATIC and ETH to the above two accounts.

3. Config swap agent contracts

   1. Deploy contracts
   2. Write the two contract address to `erc_721_swap_agent_addr` and `erc_1155_swap_agent_addr` for each chain config.

4. Config start height
   
   Get the latest height for both BSC and ETH, and write them to `start_height` for each chain config.

## Start

```shell script
./build/swap-backend --config-type local --config-path config/config.json
```

## Specification

It has similar design spec as https://github.com/binance-chain/bsc-eth-swap/blob/main/docs/spec.md


