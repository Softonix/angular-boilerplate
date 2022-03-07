# Angular project guidelines

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.
Also included libraries: NGXS, RXJS, Angular Material.
Need to notice, that global Softonix frontend guidelines are actual through all projects, and here you can find key differences
of Angular and VueJS projects.(ex. 'tailwind' is not involved in the current app, but should be).

### Project structure

src                             
├── app
│    ├── components                # Global app components, that not involved by router and declared in the app.module
│           ├──  footer            # services that contain different calculation logic (NOT only API calls)
│                   ├──  footer.component.html           # component's template
│                   ├──  footer.component.scss           # component's styles
│                   ├──  footer.component.spec.ts        # component's unit tests
│                   └──  footer.component.ts             # component's logic
│           └──  header 
│    ├── shared                    # shared instruments
│           ├──  helpers           # helper functions
│           ├──  models            # type script objects, interfaces and types
│           ├──  services          # services that contain different calculation logic (NOT only API calls)
│           └──  modules           # shared ui components, must be as modules
│     
│     ├── store                    # states and actions
│     └── views                    # whole pages-modules
│
├── assets
│      │── images                     # global images
│      └── styles                     # base global styles, can include other folders, depend on needs
|            │── variables            # global variables
│            └── ng-deep.scss         # global overwritten styles
│
└── ...

### Store-Service relations
Very important to keep in mind - we use /services/ ... not just for API calls, but also for any logic related to that service data.

(Copied)
In store modules, we usually call Service methods, to get() data for example, but store's actions should be declared only if they are considered to do some state mutation.
If you have a dummy action() in a store which doesn't collaborate with state and just does some logic with data, move it to some.service.js or /core/helpers.js

### Naming conventions
- Name folders, Ng components, selectors and js files with kebab case e.g. home-page, home-page.component.ts, so-header
- Your custom component should have unique prefix. e.g. so-button, so-footer
- Name all files with middleware names like: `auth.service.js`, `search.component.ts`, `focus.module.ts`,  - it will help you to quickly determine what type of file you are editing now

### Best practices

- Use ES linter recommended extensions as in eslintrc.js file
- Use tailwind CSS framework
- Write page/components relative CSS inside component.scss files, and keep only general styles inside /assets/styles/
- Always ask the Lead Developer or your Team Leader about project structure best practices and ask for advice.
- All shared components should have individual module
- Create constants variables for static names or routes.
- All views modules should be lazy-loaded
- ::ng-deep css selector is deprecated. Never use it.
- In case you need change styling of nested components, create /assets/styles/ng-deep.scss file, and do it there. In this case style would be global, so don't forget to wire up it to wrapper or ::host-context
- All components should have ChangeDetectionStrategy.OnPush
- Never write template and styles in the component.ts body. Use separate files. The only case are directives.
- No need to inject service in the root directory, if you use it in the specific module.
