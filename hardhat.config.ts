import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-circom";
import circuits = require('./circuits.config.json')

process.env.BASE_PATH = __dirname;

import "./tasks/newcircuit.ts"


const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks:{
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/amdAP9OM1m_vT_xQk7SyEPZiXNcjViX5`,
      accounts: ["8d934c9548c1abcd60a498c1a1896ec5363fbf55494a78ef3e3025b7d6109d3f"]
    }
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "powersOfTau28_hez_final_12.ptau",
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
