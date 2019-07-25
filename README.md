# Boilerplate React App
> Boilerplate React application for component development using [IBM.com](https://github.com/carbon-design-system/ibm-dotcom-library/tree/master/packages/react) and [Carbon](https://github.com/carbon-design-system/carbon/tree/master/packages/react) React packages.

## Installation for local development

Fork and clone the [IBM.com Library](https://github.com/carbon-design-system/ibm-dotcom-library), then link the package in order to install locally into other projects.
```
git clone https://github.com/YOUR-GITHUB/ibm-dotcom-library.git
cd ibm-dotcom-library/packages/react
yarn link
```

You should see output similar this
```
yarn link v1.16.0
success Registered "@ibmdotcom/react".
info You can now run `yarn link "@ibmdotcom/react"` in the projects where you want to use this package and it will be used instead.
✨  Done in 0.07s.
```

The IBM.com Library is now ready to be installed locally into other projects. Fork and clone this project, for example:
```
git clone https://github.com/YOUR-GITHUB/ibmdotcom-react-bp.git
cd ibmdotcom-react-bp
```

Install dependencies
```
yarn
```

Now add your locally linked packages
```
yarn add @ibmdotcom/react
```

Run the app
```
yarn start
```
