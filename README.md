# Getting Started with Create React App

`npx create-react-app react2024 --template typescript`

# Tạo file editor config và prettier:

`.editorconfig`

```
  # http://editorconfig.org
  root = true
  [*]
  charset = utf-8
  end_of_line = lf
  indent_size = 2
  indent_style = space
  insert_final_newline = true
  max_line_length = 120
  trim_trailing_whitespace = true
```

`.prettierrc`

```
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": false,
  "trailingComma": "all",
  "arrowParens": "avoid"
}
```

# Initial husky

`npx husky init`

- Thêm ` "lint": "eslint src --ext .tsx,.ts --max-warnings 0"` vào scripts - package.json

  Hoặc có thể thêm lệnh trên ở bước cài đặt `eslint` để kiểm tra eslint có hoạt động không.

- Vào .husky/pre-commit để sửa lệnh bên trong refer tới scripts package.json

- Xóa prepare: husky ở package.json scripts nếu có

- Bổ sung 1 file .huskyrc.json

```
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

# Initial react-app-rewired & customize-cra

`npm install customize-cra react-app-rewired -D`

- Tạo file `config-overrides.js` và để hàm `export {}`

- Sửa các script ở package.json thành

```
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
```

# Initial eslint (NÊN SETUP TRÊN MACOS - WINDOW BỊ MISS CONFIG)

`npm init @eslint/config` **(recommend) và chọn version 8 vì ở version 9 thì 1 số thư viện phụ thuộc linter vẫn chưa update kịp nên sẽ dễ không config được**

or

`npm init @eslint/config@latest`

- Dùng eslint để làm gì ?

- Module sử dụng là gì ?

  JS module (ES6)

  CommonJS (hỗ trợ các cú pháp JS core/NodeJS)

- Module sử dụng là gì ? - esm

- Framework đang dùng ?

  ...

**Bổ sung 4 rules:**

```
  'comma-dangle': 'off',
  'no-console': 'warn',
  semi: 'off',
  eqeqeq: 'off',
```

- Cài 1 số thư viện bổ sung
  `npm install eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react-hooks eslint-plugin-jsx-a11y --save-dev --legacy-peer-deps`

_**Lưu ý:** --legacy-peer-deps hay --force khi cài đặt các gói sẽ giúp bạn vượt qua các xung đột phụ thuộc. Đồng thời, đảm bảo rằng cấu hình ESLint của bạn và môi trường phát triển đã được thiết lập đúng cách để ESLint có thể bắt lỗi runtime hiệu quả._

- Tạo folder và file `.vscode/settings.json` ở root và bổ sung các lệnh

```
{
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

- Thay đổi file .mjs thành .eslintrc.js để không phải sử dụng các config dạng flat. ví dụ:

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y'],
  rules: {
    'comma-dangle': 'off',
    'no-console': 'warn',
    semi: 'off',
    eqeqeq: 'off',
    'react-hooks/rules-of-hooks': 'error', // Kiểm tra rules của hooks React
    'react-hooks/exhaustive-deps': 'warn', // Kiểm tra dependencies của hooks
    'jsx-a11y/alt-text': 'warn', // Kiểm tra alt text trong JSX
    'jsx-a11y/anchor-is-valid': 'warn', // Kiểm tra anchor hợp lệ
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```
