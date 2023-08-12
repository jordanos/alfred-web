# Contributing to AI-customer-support

Hi there! Thank you for even being interested in contributing to AI-customer-support.
Any kind of contribution(bug fix, new feature, better documentation...) is extremely welcomed.

## 🗺️ Guidelines

### 👩‍💻 Contributing Code

To contribute to this project, please follow a ["fork and pull request"](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) workflow.
Please do not try to push directly to this repo unless you are maintainer.

Please follow the checked-in pull request template when opening pull requests. Note related issues and tag relevant
maintainers.

It's essential that we maintain great documentation and testing. If you:

- Fix a bug
  - Add a relevant unit or integration test when possible. These live in `tests/unit_tests` and `tests/integration_tests`.
- Make an improvement
  - Update any affected example notebooks and documentation. These lives in `docs`.
  - Update unit and integration tests when relevant.
- Add a feature
  - Add unit and integration tests.

### 🚩GitHub Issues

- Every task will be done after an issue ticket is created for it.
- Make sure the issue is not already there before creating a new one.

## Code Formatting

- We urge you to use prettier and vscode for smooth devlopment experience.

### Linting

- We are using eslint.

### Coverage

- On hold.

### Testing

- We are using react testing library and jest for unit and itegration tests.
- Playwright for e2e tests.
- To run all unit tests please use `pnpm test`.
