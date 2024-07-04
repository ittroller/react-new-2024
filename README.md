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
