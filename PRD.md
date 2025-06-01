# PRD: Pomato Web Monorepo

## 개요

Pomato Web은 Turborepo 기반의 모노레포 프로젝트로, 여러 프론트엔드 앱과 공통 패키지를 통합 관리합니다. 주요 앱은 메인 웹(Next.js)과 계정 관리(Vite+React)로 구성되어 있으며, 공통 UI 및 설정 패키지를 통해 생산성과 일관성을 높입니다.

## 주요 요구사항

### 1. 멀티 앱 구조

- **웹앱**: Next.js 기반, 메인 서비스 제공
- **계정앱**: Vite+React 기반, 계정 관련 기능 제공

### 2. 공통 패키지

- **UI 패키지**: 버튼, 카드 등 공통 컴포넌트 제공
- **ESLint/TypeScript 설정 패키지**: 코드 품질 및 타입 일관성 유지

### 3. 개발 및 빌드 환경

- **Turborepo**: 멀티 앱/패키지의 효율적 빌드 및 캐싱
- **pnpm**: 패키지 관리 및 워크스페이스 지원

### 4. 개발자 경험

- 각 앱/패키지는 독립적으로 개발/실행 가능
- 공통 패키지는 앱에서 쉽게 import하여 사용
- ESLint, Prettier, TypeScript 등 기본 개발 도구 내장

## 폴더 구조 예시

```
apps/
  web/         # Next.js 메인 웹앱
  account/     # Vite+React 계정앱
packages/
  ui/          # 공통 UI 컴포넌트
  eslint-config/ # ESLint 설정
  typescript-config/ # TypeScript 설정
```

## 참고

- [Next.js 공식문서](https://nextjs.org/docs)
- [Vite 공식문서](https://vitejs.dev/guide/)
- [Turborepo 공식문서](https://turborepo.com/docs)
