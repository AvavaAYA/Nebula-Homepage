# USTC-Nebula Homepage

> [!NOTE]
> 托管在 vercel 上，由于免费版的限制目前放在个人仓库下，修改时可以提 PR 或者 dm 我成为合作者

## Develop

### 本地预览

```bash
git clone git@github.com:AvavaAYA/Nebula-Homepage.git && cd Nebula-Homepage
yarn install && yarn dev
```

### 使用 `help` 获取所有命令

```bash
ctfer@ustc-nebula:$ ~ help
Welcome! Here are all the available commands:

about awards banner bing cat cd echo
email env github help ls members nvim
readme repo sudo sumfetch vi vscode whoami


[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.

Type 'sumfetch' to display summary.
```

### 相关代码位于 `/src`

```bash
./src
├── components
│  ├── history
│  │  ├── History.tsx
│  │  ├── hook.ts
│  │  └── interface.ts
│  ├── input.tsx
│  └── Ps1.tsx
├── pages
│  ├── 404.tsx
│  ├── _app.tsx
│  └── index.tsx
├── styles
│  └── global.css
└── utils
   ├── api.ts
   ├── bin
   │  ├── api_commands.ts
   │  ├── commands.ts
   │  ├── index.ts
   │  └── sumfetch.ts
   ├── commandExists.ts
   ├── shell.ts
   └── tabCompletion.ts
```

### 新增 members / awards

相关代码位于 `/src/utils/api.ts` 里。

### 新增命令 / 彩蛋

新增彩蛋 / 命令可以写在 `/src/utils/bin/commands.ts` 里。

## Acknowledgements

Based on [Cveinnt](https://github.com/Cveinnt)'s awesome [LiveTerm](https://github.com/Cveinnt/LiveTerm).
