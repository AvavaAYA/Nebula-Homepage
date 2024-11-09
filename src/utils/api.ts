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

    // name . xxx . <u><a class="text-light-blue dark:text-dark-blue underline" href="" target="_blank"></a></u>
  return `  Active Members

    crabtux . full-stack . <u><a class="text-light-blue dark:text-dark-blue underline" href="https://crabtux.github.io/" target="_blank">https://crabtux.github.io/</a></u>
    wuyuewy . web . <u><a class="text-light-blue dark:text-dark-blue underline" href="http://home.ustc.edu.cn/~wuyuewy/" target="_blank">http://home.ustc.edu.cn/~wuyuewy/</a></u>
    0xd009 . reverse . <u><a class="text-light-blue dark:text-dark-blue underline" href="https://0xd009.github.io/" target="_blank">https://0xd009.github.io/</a></u>
    brealid . crypto . <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.brealid.cn/" target="_blank">https://www.brealid.cn/</a></u>
    eastXueLian . pwn . <u><a class="text-light-blue dark:text-dark-blue underline" href="https://eastxuelian.nebuu.la/" target="_blank">https://eastxuelian.nebuu.la/</a></u>
    AlbedoW . misc . <u><a class="text-light-blue dark:text-dark-blue underline" href="https://albedowang.github.io/" target="_blank">https://albedowang.github.io/</a></u>
-----------------------
  Honorary Members

    ichild . reverse & pwn . <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/" target="_blank">hidden</a></u>
    hklst4r . blockchain & crypto . <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/" target="_blank">hidden</a></u>
`;
};

export const getAwards = async (): Promise<string> => {
  return `🏆 Selected Awards
---
Find it yourself on ctftime or google!`;
};
