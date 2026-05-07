import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // .claude/helpers/ contains Claude Code hook helpers — tooling files
  // outside this repo's primary product code. Disable noisy rules:
  // - no-require-imports: .cjs/.js use CommonJS require() canonically
  // - no-unused-vars: catch (e) without usage is defensive (silent failure
  //   intentional in hook handlers); some imports are loaded for side effects
  //   or future use; refactoring risks breaking Claude Code hooks
  // - no-unused-expressions: tooling pattern occasionally uses bare
  //   expressions for side effects (e.g. logger().log())
  {
    files: [".claude/helpers/**/*.{cjs,js,mjs}"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
