const yargs = require('yargs');
import { MSICreator } from 'electron-wix-msi';

// Step 0: Preparing paths
const SOFTWARE_VERSION = "1.0.0"
const SOFTWARE_PACKAGE_DIR = "/path/to/app"
const SOFTWARE_INSTALLER_DIR = "/path/to/result"
const SOFTWARE_LOGO_ICO = "/path/to/icon.ico"


// Step 1: Instantiate the MSICreator
// More options : https://github.com/felixrieseberg/electron-wix-msi
const msiCreator = new MSICreator({
    appDirectory: SOFTWARE_PACKAGE_DIR,
    description: 'Your superb description',
    exe: 'Windows_Installer',
    name: 'MySoftware',
    manufacturer: 'MyCompany',
    version: SOFTWARE_VERSION,
    ui: {
        chooseDirectory: true
    },
    iconPath: SOFTWARE_LOGO_ICO,
    defaultInstallMode: 'perUser',
    outputDirectory: SOFTWARE_INSTALLER_DIR
});

// Step 2: Create a .wxs template file
const supportBinaries = await msiCreator.create();

// Step 3: Compile the template to a .msi file
await msiCreator.compile();
