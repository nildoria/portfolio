// eslint-config-next 16 ships a flat config array directly. The previous
// version wrapped the legacy config through FlatCompat, which threw a
// circular-structure error during config validation — so lint could not run
// at all. Importing the flat export removes the compat layer entirely.
import next from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...next,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "public/**"],
  },
];

export default eslintConfig;
