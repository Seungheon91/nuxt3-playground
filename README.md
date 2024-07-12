# Nuxt 3 Minimal Starter

## Setup

```bash
#pnpm 설치
npm install -g pnpm

# pnpm
pnpm install

```

pnpm : 이 시스템에서 스크립트를 실행할 수 없으므로 파일을 로드할 수 없습니다. 에러 해결

1. PowerShell 관리자 권한으로 실행 후 아래 명령어로 실행 정책 확인

```bash
# 해당 명령어에 실행 정책이 Restricted면 Set-ExecutionPolicy 명령어 실행
Get-ExecutionPolicy

# 실행 정책 변경할건지 물어보면 Y 입력
Set-ExecutionPolicy RemoteSigned

# 실행 정책 확인 후 RemoteSigned로 변경되었는지 확인 후 PowerShell 종료 후 재실행 한뒤 pnpm install 실행
Get-ExecutionPolicy

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
