# @tuiuq/fast-cli

A command-line tool to help you work faster.

## Installation

You can install the CLI globally using pnpm:

```bash
pnpm install -g @tuiuq/fast-cli
```

Or use it directly with `npx`:

```bash
npx @tuiuq/fast-cli <command>
```

## Usage

```bash
fast <command> [options]
```

For detailed command information, use the help option:

```bash
fast --help
fast <command> --help
```

## Commands

This CLI provides several commands to streamline your development workflow.

### `subset`

Creates a font subset from a given font file.

**Usage:**
`fast subset [options]`

### `clean`

Cleans the project by removing generated files and directories.

**Usage:**
`fast clean [options]`


## Development

This project uses `pnpm` as the package manager and `just` as a command runner.

### Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/tuiuQ/fast-cli.git
    ```
2.  Install dependencies:
    ```bash
    cd fast-cli
    pnpm install
    ```

### Available Scripts

The following scripts are available in `package.json` and can be run with `pnpm run <script_name>`:

*   `lint`: Lints the codebase using ESLint.
*   `format`: Formats the code using Prettier.
*   `clean`: Removes the `dist` directory.
*   `build`: Builds the project for production.
*   `dev`: Builds the project in development mode.
*   `test`: Runs the test suite using Vitest.

You can also use `just` to run the tasks defined in the `justfile`.

**Example:**
```bash
just build
just test
```
