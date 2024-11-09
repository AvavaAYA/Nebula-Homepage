// List of commands that do not require API calls

import * as bin from "./index";
import config from "../../../config.json";
import { getMembers } from "../api";
import { getAwards } from "../api";

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(", ");
  var c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `Welcome! Here are all the available commands:

=========== Available Commands ===============

${c}

==============================================

Helpful Tips:
    [tab]: trigger completion.
    [ctrl+l]/clear: clear terminal.
    Type 'sumfetch' to display summary.

Credit: Based on <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/Cveinnt" target="_blank">Cveinnt</a></u>'s awesome <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/Cveinnt/LiveTerm" target="_blank">LiveTerm</a></u>.
`;
};

export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return "Opening Github repository...";
};

export const about = async (args: string[]): Promise<string> => {
  return `Hi, we are ${config.name}. 
Welcome to our website!
More about us:
    'sumfetch' - short summary.
    'members' - active members.
    'awards' - selected awards.
    'readme' - our recruitment requirements.`;
};

export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return "Opening github...";
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(" ")}`);
  return `Wow, really? You are using bing for ${args.join(" ")}?`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ");
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  if (args.length > 0 && /(-a|-al|-la)/i.test(args[0])) {
    return `.flag
.oh-you-found-it/
Awards
Members
Welcome-to-USTC-Nebula-s-Homepage/
and-We-are-Waiting-for-U/`;
  } else {
    return `Awards
Members
Welcome-to-USTC-Nebula-s-Homepage/
and-We-are-Waiting-for-U/`;
  }
};

const somedata = "RkxBRz1mbGFne2FjdHVhbGx5X3RoZXJlc19hbm90aGVyX2ZsYWdfaGVyZV90cllfdG9fZjFuRF8xdF95MHVyc2VsZl9fX2pvaW5fdXNfdXN0Y19uZWJ1bGF9";

export const env = async (args: string[]): Promise<string> => {
  return `PWD=/root/Nebula-Homepage
ARCH=loong-arch
NAME=Nebula-Dedicated-High-Performance-Workstation
OS=NixOS❄️
${atob(somedata)}
REQUIREMENTS=1. you must come from USTC; 2. you must be interested in security!
`;
};

const someotherdata = "ZmxhZ3swa18xNzVfYV9oMWRkM25fczNjM3J0X2YxNGdfX19wbGVhc2Vfam9pbl91c191c3RjX25lYnVsYV9hbkRfdHdvX21hSm9yX3JlcXVpcmVtZW50c19hUmVfc2hvd25fc29tZXdoZXJlX2Vsc2V9";

export const cat = async (args: string[]): Promise<string> => {
  if (args.length === 1 && args[0] === ".flag") {
    return `${atob(someotherdata)}`;
  } else if (args.length === 1 && args[0] === "Awards") {
    return getAwards();
  } else if (args.length === 1 && args[0] === "Members") {
    return getMembers();
  } else {
    return `file not found, maybe you can consider about Members / Awards / hidden files`;
  }
};

export const members = async (args: string[]): Promise<string> => {
  return getMembers();
};

export const awards = async (args: string[]): Promise<string> => {
  return getAwards();
};

export const cd = async (args: string[]): Promise<string> => {
  return `Permission denied: root needed.`;
};

export const vi = async (args: string[]): Promise<string> => {
  return `'vi / vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `just try lazyvim!`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open("https://www.bilibili.com/bangumi/play/ss40551", "_blank");
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
      ┌---------------------------------------------------------┐
     ███╗   ██╗███████╗██████╗ ██╗   ██╗██╗      █████╗         │
     ████╗  ██║██╔════╝██╔══██╗██║   ██║██║     ██╔══██╗        │
     ██╔██╗ ██║█████╗  ██████╔╝██║   ██║██║     ███████║        │
     ██║╚██╗██║██╔══╝  ██╔══██╗██║   ██║██║     ██╔══██║        │
     ██║ ╚████║███████╗██████╔╝╚██████╔╝███████╗██║  ██║        │
     ╚═╝  ╚═══╝╚══════╝╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝        │
      │                                                         │
      │                                      Join us!           │
      │                                                         │
      └---------------------------------------------------------┘

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
