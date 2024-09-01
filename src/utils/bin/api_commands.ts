// List of commands that require API calls

import { getReadme } from '../api';

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};
