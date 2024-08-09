import config from "../../../config.json";

const sumfetch = async (args: string[]): Promise<string> => {
  return `
           ▄▓  sumfetch ▓▄                ------------
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           ${config.name}
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       
▐▓                                 ▐▓       爵 <u><a href="${config.repo}" target="_blank">Join us!</a></u>
▐▓     > U S T C - N E B U L A     ▐▓       
▐▓                                 ▐▓       -----------
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           CONTACT 
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>

`;
};

export default sumfetch;
