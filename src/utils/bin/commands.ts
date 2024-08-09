// List of commands that do not require API calls

import * as bin from "./index";
import config from "../../../config.json";

// Help
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
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return "Opening Github repository...";
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, we are ${config.name}. 
Welcome to our website!
More about us:
'sumfetch' - short summary.
'readme' - our recruitment readme.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return "Opening github...";
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(" ")}`);
  return `Searching google for ${args.join(" ")}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(" ")}`);
  return `Searching duckduckgo for ${args.join(" ")}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(" ")}`);
  return `Wow, really? You are using bing for ${args.join(" ")}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(" ")}`);
  return `Searching reddit for ${args.join(" ")}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ");
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  if (args.length === 1 && args[0].includes("-a")) {
    return `.flag
Welcome
to
USTC-Nebula's
Homepage
and
We
are
Waiting
for
U`;
  } else {
    return `Welcome
to
USTC-Nebula's
Homepage
and
We
are
Waiting
for
U`;
  }
};

export const cat = async (args: string[]): Promise<string> => {
  if (args.length === 1 && args[0] === ".flag") {
    return `flag{0k_175_a_h1dd3n_s3c3rt_f14g}`;
  } else {
    return `file not found, maybe you can consider about hidden files`;
  }
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'vscode'?`;
};

export const vscode = async (args?: string[]): Promise<string> => {
  return `you know what? just use <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/AvavaAYA/LianVim" target="_blank">LianVim</a></u>!`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open("https://www.bilibili.com/video/BV1GJ411x7h7/", "_blank"); // ...I'm sorry
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
