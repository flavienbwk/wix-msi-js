# WiX MSI JS

Build a Windows MSI installer easily with NodeJS

## Purpose

[WiX](https://wixtoolset.org/) is a software used to generate MSI files : a Windows installer package. Often used in combination with C# `.exe` executables, WiX config files configuration are a real pain to include several dependencies. Let's say you have a C++ application and want to include a lot of `.dll`. You would have to mention them one by one in a WiX config file.

Based on [`electron-wix-msi`](https://github.com/felixrieseberg/electron-wix-msi) WiX-MSI-JS manages that for you, on top of a lot of other options.

## Install

```bash
npm install
```

## Usage

1. Edit your configuration paths in `generate.js`

2. Run the generator

    ```bash
    npm run start 
    ```
