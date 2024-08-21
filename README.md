# Go To Top 

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Development](#development)
- [Meet Your Artisans](#meet-your-artisans)
- [License](#license)

## Introduction

Experimental WordPress plugin to add go to top button on frontend with setting panel to personalize.

<img src =".github/screenshot.png" alt="Plugin Settings Panel">

## Prerequisites

To get up and running, you will need to make sure that you have installed all of the prerequisites.

-   [NVM](https://github.com/nvm-sh/nvm#installing-and-updating): While you can always install Node through other means, we recommend using NVM to ensure you're aligned with the version used by our development teams. Our repository contains [an `.nvmrc` file](.nvmrc) which helps ensure you are using the correct version of Node.
-   [NPM](https://docs.npmjs.com/): Our repository utilizes NPM to manage project dependencies and run various scripts involved in building and testing projects.
-   [PHP 7.4+](https://www.php.net/manual/en/install.php): WooCommerce Core currently features a minimum PHP version of 7.4. It is also needed to run Composer and various project build scripts.
-   [Composer](https://getcomposer.org/doc/00-intro.md): We use Composer to manage all of the dependencies for PHP packages and plugins.

Once you've installed all of the prerequisites, you can setup your local development.

## Development

01. Clone repo to your `wp-content/plugins`
``` sh
git clone git@github.com:lubusIN/go-to-top-for-wordpress.git 
```

02. Navigate to the plugin folder:
``` sh
cd go-to-top-for-wordpres
```

03. Install composer dependencies & generate auto loader:
``` sh
composer install
``` 

04. Ensure you are using the correct version of Node.js as specified in the .nvmrc file:
``` sh
npm use
```

05. Install npm dependencies:
``` sh
npm install
```

06. Build the plugin:
``` sh
npm run build
```

07. Activate the plugin from the WordPress plugin list.

08. Config and use 🚀

## Meet Your Artisans
[LUBUS](http://lubus.in) is a web design agency based in Mumbai, India.

<a href="https://lubus.in/">
<img src="https://user-images.githubusercontent.com/1039236/40877801-3fa8ccf6-66a4-11e8-8f42-19ed4e883ce9.png" />
</a>

## License

`Go To Top` is an open-source software licensed under the [MIT](LICENSE)
