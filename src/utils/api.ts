import axios from "axios";
import config from "../../config.json";

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get("https://api.quotable.io/random");
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getMembers = async (): Promise<string> => {
  return `  Active Members
---
0xd009 . reverse . https://0xd009.github.io/
brealid . crypto . https://www.brealid.cn/
eastXueLian . pwn . https://eastxuelian.nebuu.la/
crabtux . full-stack . https://crabtux.github.io/
wuyuewy . web . http://home.ustc.edu.cn/~wuyuewy/
AlbedoW . misc . https://albedowang.github.io/`;
};

export const getAwards = async (): Promise<string> => {
  return `🏆 Selected Awards
---
Find it yourself on ctftime or google!`;
};
